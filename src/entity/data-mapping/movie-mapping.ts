import { MovieModel } from "src/model/movie-model";
import { Movie } from "../movie";

export class MovieMapping {
  private id: number;
  private title: string;
  private year: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(private readonly movieModel: MovieModel) {
    this.id = this.movieModel.id;
    this.title = this.movieModel.title;
    this.year = this.movieModel.year;
    this.updatedAt = this.movieModel.updatedAt;
    this.createdAt = this.movieModel.createdAt;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public build(): Movie {
    return {
      id: this.id,
      title: this.title,
      year: this.year,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    } as Movie;
  }
}
