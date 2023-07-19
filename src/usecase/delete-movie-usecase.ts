import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { MovieRepository } from "src/repository/movie-repository";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class DeleteMovieUsecase implements BaseUsecase<number, void> {
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(id: number): Promise<void> {
    return this.movieRepository.deleteEntity(id);
  }
}
