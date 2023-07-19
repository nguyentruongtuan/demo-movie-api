import { UpdateMovieRequest } from "../update-movie-request";
import { BaseRequestMapping } from "./base-request-mapping";

export class UpdateMovieMapping extends BaseRequestMapping<UpdateMovieRequest> {
  public id: number;
  public title: string;
  public year: number;

  constructor(private readonly request) {
    super();
    this.id = this.request.params.id;
    this.title = this.request.body.title;
    this.year = this.request.body.year;
  }

  public build(): UpdateMovieRequest {
    return {
      id: this.id,
      title: this.title,
      year: this.year,
      updatedAt: new Date(),
    } as UpdateMovieRequest;
  }
}
