import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/entity/movie";
import { MovieRepository } from "src/repository/movie-repository";
import { GetEntitiesRequest } from "src/request/get-entities-request";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class GetMoviesUsecase
  implements BaseUsecase<GetEntitiesRequest, Array<Movie>>
{
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository
  ) {}

  async execute(req: GetEntitiesRequest): Promise<Array<Movie>> {
    return this.movieRepository.getEntities(req);
  }
}
