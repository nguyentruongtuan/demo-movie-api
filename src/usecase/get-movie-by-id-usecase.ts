import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie, MovieId } from "src/entity/movie";
import { MovieRepository } from "src/repository/movie-repository";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class GetMovieByIdUsecase implements BaseUsecase<number, Movie> {
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(id: MovieId): Promise<Movie> {
    return this.movieRepository.getEntityById(id);
  }
}
