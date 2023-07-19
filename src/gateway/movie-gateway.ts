import { injectable } from "inversify";
import { MovieModel } from "src/model/movie-model";
import { BaseGateway } from "./base-gateway";
import { Movie } from "src/entity/movie";
import { MovieMapping } from "src/entity/data-mapping/movie-mapping";
import { GetMoviesRequest } from "src/request/get-movies-request";
import { CreateMovieRequest } from "src/request/create-movie-request";
import { UpdateMovieRequest } from "src/request/update-movie-request";

@injectable()
export class MovieGateway extends BaseGateway<Movie> {
  async getById(id: number): Promise<Movie> {
    const movie = await MovieModel.findOne({ where: { id } });

    if (!movie) {
      throw new Error(`Cannot find Movie entity with id ${id}`);
    }

    return new MovieMapping(movie).build();
  }

  async getAll(req: GetMoviesRequest): Promise<Array<Movie>> {
    const movies = await MovieModel.findAll({
      limit: req.limit,
      offset: req.offset,
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
      throw new Error(`Cannot find Movie entity with id ${id}`);
    }

    movie.set({ ...modifiedData });
    await movie.save();

    return new MovieMapping(movie).build();
  }

  async deleteById(id: number): Promise<void> {
    await MovieModel.destroy({ where: { id } });
  }
}
