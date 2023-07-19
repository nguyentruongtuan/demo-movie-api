import { injectable } from "inversify";
import { MovieGenreMapping } from "src/entity/data-mapping/movie-genre-mapping";
import { MovieGenre } from "src/entity/movie-genre";
import { NotFound } from "src/error/not-found";
import { MovieGenreModel } from "src/model/movie-genre-model";
import { BaseGateway } from "./base-gateway";
import { CreateMovieGenreRequest } from "src/request/create-movie-genre-request";

@injectable()
export class MovieGenreGateway extends BaseGateway<MovieGenre> {
  async getById(id: number): Promise<MovieGenre> {
    const entity = await MovieGenreModel.findOne({ where: { id } });

    if (!entity) {
      throw new NotFound(`Cannot find MovieGenre entity with id ${id}`);
    }

    return new MovieGenreMapping(entity).build();
  }

  async create(req: CreateMovieGenreRequest): Promise<MovieGenre> {
    const entity = await MovieGenreModel.create(req);

    return new MovieGenreMapping(entity).build();
  }

  async getByMovieId(movieId: number): Promise<Array<MovieGenre>> {
    const entities = await MovieGenreModel.findAll({ where: { movieId } });

    return entities.map((entity) => new MovieGenreMapping(entity).build());
  }

  async getByMovieIds(ids: Array<number>): Promise<Array<MovieGenre>> {
    const entities = await MovieGenreModel.findAll({ where: { movieId: ids } });

    return entities.map((entity) => new MovieGenreMapping(entity).build());
  }

  async deleteById(id: number): Promise<void> {
    await MovieGenreModel.destroy({ where: { id } });
  }
}
