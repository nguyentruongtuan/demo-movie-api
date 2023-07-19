import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { Movie } from "src/entity/movie";
import { MovieRepository } from "src/repository/movie-repository";
import { GetEntitiesRequest } from "src/request/get-entities-request";
import { BaseUsecase } from "./base-usecase";
import { MovieGenreRepository } from "src/repository/movie-genre-repository";

@injectable()
export class GetMoviesUsecase
  implements BaseUsecase<GetEntitiesRequest, Array<Movie>>
{
  constructor(
    @inject(TYPES.MovieRepository)
    private readonly movieRepository: MovieRepository,
    @inject(TYPES.MovieGenreRepository)
    private readonly movieGenreRepository: MovieGenreRepository
  ) {}

  async execute(req: GetEntitiesRequest): Promise<Array<Movie>> {
    const movies = await this.movieRepository.getEntities(req);

    const movieIds = movies.map((m) => m.id);

    const allGenreRelation =
      await this.movieGenreRepository.getEntitiesByMovieIds(movieIds);

    for (const movie of movies) {
      const movieGenres = allGenreRelation.filter(
        (re) => re.movieId === movie.id
      );

      movie.genres = movieGenres.map((g) => g.genreId);
    }

    return movies;
  }
}
