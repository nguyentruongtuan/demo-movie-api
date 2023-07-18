import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/model/movie";
import { MovieRepository } from "src/repository/movie-repository";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class GetMoviesUsecase implements BaseUsecase<Movie> {
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(): Promise<Array<Movie>> {
    return this.movieRepository.getEntities();
  }
}
