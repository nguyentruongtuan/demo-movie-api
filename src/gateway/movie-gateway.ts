import { injectable } from "inversify";
import { MovieModel } from "src/model/movie-model";
import { BaseGateway } from "./base-gateway";
import { Movie } from "src/entity/movie";
import { MovieMapping } from "src/entity/data-mapping/movie-mapping";
import { GetMoviesRequest } from "src/request/get-movies-request";
import { CreateMovieRequest } from "src/request/create-movie-request";
import { UpdateMovieRequest } from "src/request/update-movie-request";
import { NotFound } from "src/error/not-found";
import { Op } from "sequelize";
import { GenreModel } from "src/model/genre-model";

@injectable()
export class MovieGateway extends BaseGateway<Movie> {
  async getById(id: number): Promise<Movie> {
    const movie = await MovieModel.findOne({ where: { id } });

    if (!movie) {
      throw new NotFound(`Cannot find Movie entity with id ${id}`);
    }

    return new MovieMapping(movie).build();
  }

  async getAll(req: GetMoviesRequest): Promise<Array<Movie>> {
    const filters = {};
    const relationFilter = {};

    if (req.filter) {
      for (const filter of req.filter) {
        if (!filter.value) {
          continue;
        }
        switch (filter.field) {
          case "year":
            filters["year"] = filter.value;
            break;
          case "updatedDate":
            filters[Op.and] = [
              { year: { [Op.gte]: filter.value.from } },
              { year: { [Op.lte]: filter.value.to } },
            ];
            break;
          case "genre":
            relationFilter["id"] = filter.value;
            break;
          default:
            break;
        }
      }
    }

    const movies = await MovieModel.findAll({
      limit: req.limit,
      offset: req.offset,
      where: {
        ...filters,
      },
      include: [{ model: GenreModel, where: { ...relationFilter } }],
    });

    return movies.map((m) => new MovieMapping(m).build());
  }

  async create(req: CreateMovieRequest): Promise<Movie> {
    const movie = await MovieModel.create(req);

    return new MovieMapping(movie).build();
  }

  async updateById(req: UpdateMovieRequest): Promise<Movie> {
    const { id, ...modifiedData } = req;
    const movie = await MovieModel.findByPk(id);
    if (!movie) {
      throw new NotFound(`Cannot find Movie entity with id ${id}`);
    }

    movie.set({ ...modifiedData });
    await movie.save();

    return new MovieMapping(movie).build();
  }

  async deleteById(id: number): Promise<void> {
    await MovieModel.destroy({ where: { id } });
  }
}
