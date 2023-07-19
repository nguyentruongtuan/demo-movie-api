import { CreateMovieViewRequest } from "../create-movie-view-request";
import { BaseRequestMapping } from "./base-request-mapping";

export class CreateMovieMapping extends BaseRequestMapping<CreateMovieViewRequest> {
  public title: string;
  public year: number;
  public genres: Array<number>;

  constructor(private readonly request) {
    super();
    this.title = this.request.body.title;
    this.year = this.request.body.year;
    this.genres = this.request.body.genre;
  }

  public build(): CreateMovieViewRequest {
    return {
      title: this.title,
      year: this.year,
      genres: this.genres,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as CreateMovieViewRequest;
  }
}
