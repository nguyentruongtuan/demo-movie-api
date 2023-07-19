import { MovieModel } from "src/model/movie-model";
import { Genre } from "../genre";
import { Movie } from "../movie";
import { GenreMapping } from "./genre-mapping";

export class MovieMapping {
  private id: number;
  private title: string;
  private year: number;
  private genres: Array<Genre>;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(private readonly movieModel: MovieModel) {
    this.id = this.movieModel.id;
    this.title = this.movieModel.title;
    this.year = this.movieModel.year;
    this.genres = this.movieModel.Genres.map((g) =>
      new GenreMapping(g).build()
    );
    this.updatedAt = this.movieModel.updatedAt;
    this.createdAt = this.movieModel.createdAt;
  }

  public build(): Movie {
    return {
      id: this.id,
      title: this.title,
      year: this.year,
      genres: this.genres,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    } as Movie;
  }
}
