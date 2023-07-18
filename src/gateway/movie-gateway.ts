import { injectable } from "inversify";
import { MovieModel } from "src/model/movie-model";
import { BaseGateway } from "./base-gateway";
import { Movie } from "src/entity/movie";
import { MovieMapping } from "src/entity/data-mapping/movie-mapping";

@injectable()
export class MovieGateway extends BaseGateway<Movie> {
  async getById(id: number): Promise<Movie> {
    const movie = await MovieModel.findOne({ where: { id } });

    return new MovieMapping(movie).build();
  }

  async getAll(): Promise<Array<Movie>> {
    const movies = await MovieModel.findAll({ limit: 10 });

    return movies.map((m) => new MovieMapping(m).build());
  }
}
