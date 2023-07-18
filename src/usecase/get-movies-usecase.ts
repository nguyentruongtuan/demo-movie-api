import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { MovieRepository } from "src/repository/movie-repository";
import { BaseUsecase } from "./base-usecase";
import { Movie } from "src/entity/movie";

@injectable()
export class GetMoviesUsecase implements BaseUsecase<Array<Movie>> {
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(): Promise<Array<Movie>> {
    return this.movieRepository.getEntities();
  }
}
