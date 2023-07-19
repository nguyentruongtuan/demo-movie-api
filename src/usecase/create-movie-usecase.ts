import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/entity/movie";
import { MovieGenreRepository } from "src/repository/movie-genre-repository";
import { MovieRepository } from "src/repository/movie-repository";
import { CreateMovieViewRequest } from "src/request/create-movie-view-request";
import { BaseUsecase } from "./base-usecase";

@injectable()
export class CreateMovieUsecase
  implements BaseUsecase<CreateMovieViewRequest, Movie>
{
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository,
    @inject(TYPES.MovieGenreRepository)
    private readonly movieGenreRepository: MovieGenreRepository
  ) {}

  async execute(req: CreateMovieViewRequest): Promise<Movie> {
    const { genres, ...createMovieRequest } = req;

    const movie = await this.movieRepository.createEntity(createMovieRequest);

    if (genres && genres.length) {
      for (const genre of genres) {
        await this.movieGenreRepository.createEntity({
          genreId: genre,
          movieId: movie.id,
          updatedAt: new Date(),
          createdAt: new Date(),
        });
      }
    }

    return movie;
  }
}
