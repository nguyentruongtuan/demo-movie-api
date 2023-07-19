import { MovieGenreModel } from "src/model/movie-genre-model";
import { MovieGenre } from "../movie-genre";

export class MovieGenreMapping {
  private id: number;
  private movieId: number;
  private genreId: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(private readonly model: MovieGenreModel) {
    this.id = this.model.id;
    this.movieId = this.model.MovieId;
    this.genreId = this.model.GenreId;
    this.updatedAt = this.model.updatedAt;
    this.createdAt = this.model.createdAt;
  }
  public build(): MovieGenre {
    return {
      id: this.id,
      movieId: this.movieId,
      genreId: this.genreId,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    } as MovieGenre;
  }
}
