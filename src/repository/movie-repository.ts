import { inject, injectable } from "inversify";
import { BaseRepository } from "./base-repository";
import { UpdateMovieRequest } from "src/request/update-movie-request";
import { CreateMovieRequest } from "src/request/create-movie-request";
import { Movie } from "src/entity/movie";
import { TYPES } from "src/bootstrap/types";
import { MovieGateway } from "src/gateway/movie-gateway";
import { GetMoviesRequest } from "src/request/get-movies-request";

export interface MovieRepository
  extends BaseRepository<Movie, CreateMovieRequest, UpdateMovieRequest> {}

@injectable()
export class MovieControllerImpl implements MovieRepository {
  constructor(
    @inject(TYPES.MovieGateway) private readonly movieGateway: MovieGateway
  ) {}

  async getEntityById(id: number): Promise<Movie> {
    return this.movieGateway.getById(id);
  }

  async createEntity(request: CreateMovieRequest): Promise<Movie> {
    return this.movieGateway.create(request);
  }

  async updateEntity(req: UpdateMovieRequest): Promise<Movie> {
    return this.movieGateway.updateById(req);
  }

  async deleteEntity(id: number): Promise<void> {
    return this.movieGateway.deleteById(id);
  }

  async getEntities(req: GetMoviesRequest): Promise<Movie[]> {
    return this.movieGateway.getAll(req);
  }
}
