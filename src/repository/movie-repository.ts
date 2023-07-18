import { inject, injectable } from "inversify";
import { BaseRepository } from "./base-repository";
import { UpdateMovieRequest } from "src/request/update-movie-request";
import { CreateMovieRequest } from "src/request/create-movie-request";
import { Movie } from "src/entity/movie";
import { TYPES } from "src/bootstrap/types";
import { MovieGateway } from "src/gateway/movie-gateway";

export interface MovieRepository extends BaseRepository<Movie> {}

@injectable()
export class MovieControllerImpl implements MovieRepository {
  constructor(
    @inject(TYPES.MovieGateway) private readonly movieGateway: MovieGateway
  ) {}

  async createEntity(request: CreateMovieRequest): Promise<Movie> {
    return null;
  }

  async updateEntity(req: UpdateMovieRequest): Promise<Movie> {
    return null;
  }

  async deleteEntity(id: string): Promise<void> {}

  async getEntities(): Promise<Movie[]> {
    return this.movieGateway.getAll();
  }
}
