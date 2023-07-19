import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/entity/movie";
import { MovieRepository } from "src/repository/movie-repository";
import { GetEntitiesRequest } from "src/request/get-entities-request";
import { BaseUsecase } from "./base-usecase";
import { CreateMovieRequest } from "src/request/create-movie-request";

@injectable()
export class CreateMovieUsecase
  implements BaseUsecase<CreateMovieRequest, Movie>
{
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(req: CreateMovieRequest): Promise<Movie> {
    return this.movieRepository.createEntity(req);
  }
}
