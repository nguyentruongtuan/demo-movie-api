import { CreateMovieRequest } from "../create-movie-request";
import { BaseRequestMapping } from "./base-request-mapping";

export class CreateMovieMapping extends BaseRequestMapping<CreateMovieRequest> {
  public title: string;
  public year: number;

  constructor(private readonly request) {
    super();
    this.title = this.request.body.title;
    this.year = this.request.body.year;
  }

  public build(): CreateMovieRequest {
    return {
      title: this.title,
      year: this.year,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as CreateMovieRequest;
  }
}
