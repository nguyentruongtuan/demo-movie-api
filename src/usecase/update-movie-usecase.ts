import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/entity/movie";
import { MovieRepository } from "src/repository/movie-repository";
import { UpdateMovieRequest } from "src/request/update-movie-request";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class UpdateMovieUsecase
  implements BaseUsecase<UpdateMovieRequest, Movie>
{
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(req: UpdateMovieRequest): Promise<Movie> {
    return this.movieRepository.updateEntity(req);
  }
}
