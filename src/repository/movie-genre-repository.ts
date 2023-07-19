import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { MovieGenre } from "src/entity/movie-genre";
import { MovieGenreGateway } from "src/gateway/movie-genre-gateway";
import { CreateMovieGenreRequest } from "src/request/create-movie-genre-request";
import { GetMoviesRequest } from "src/request/get-movies-request";
import { UpdateMovieRequest } from "src/request/update-movie-request";
import { BaseRepository } from "./base-repository";

export interface MovieGenreRepository
  extends BaseRepository<MovieGenre, CreateMovieGenreRequest, unknown> {
  getEntitiesByMovieId(movieId: number): Promise<Array<MovieGenre>>;
  getEntitiesByMovieIds(ids: Array<number>): Promise<Array<MovieGenre>>;
}

@injectable()
export class MovieGenreRepositoryImpl implements MovieGenreRepository {
  constructor(
    @inject(TYPES.MovieGenreGateway)
    private readonly movieGenreGateway: MovieGenreGateway
  ) {}

  async getEntityById(id: number): Promise<MovieGenre> {
    return this.movieGenreGateway.getById(id);
  }

  async getEntitiesByMovieId(movieId: number): Promise<Array<MovieGenre>> {
    return this.movieGenreGateway.getByMovieId(movieId);
  }

  async getEntitiesByMovieIds(ids: Array<number>): Promise<Array<MovieGenre>> {
    return this.movieGenreGateway.getByMovieIds(ids);
  }

  async createEntity(request: CreateMovieGenreRequest): Promise<MovieGenre> {
    return this.movieGenreGateway.create(request);
  }

  async updateEntity(req: UpdateMovieRequest): Promise<MovieGenre> {
    return null;
  }

  async deleteEntity(id: number): Promise<void> {
    return this.movieGenreGateway.deleteById(id);
  }

  async getEntities(req: GetMoviesRequest): Promise<MovieGenre[]> {
    return [];
  }
}
