import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/entity/movie";
import { MovieGenreRepository } from "src/repository/movie-genre-repository";
import { MovieRepository } from "src/repository/movie-repository";
import { GetMoviesRequest } from "src/request/get-movies-request";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class GetMoviesUsecase
  implements BaseUsecase<GetMoviesRequest, Array<Movie>>
{
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository,
    @inject(TYPES.MovieGenreRepository)
    private readonly movieGenreRepository: MovieGenreRepository
  ) {}

  async execute(req: GetMoviesRequest): Promise<Array<Movie>> {
    const movies = await this.movieRepository.getEntities(req);

    return movies;
  }
}
