import { GetMoviesRequest, MovieFilter } from "../get-movies-request";
import { BaseRequestMapping } from "./base-request-mapping";

export class GetMoviesRequestMapping extends BaseRequestMapping<GetMoviesRequest> {
  public limit: number;
  public offset: number;
  public filter: MovieFilter;
  constructor(private readonly request) {
    super();
    this.limit = this.request.query.limit || 10;
    this.offset = this.request.query.offset || 0;

    this.filter = [
      { field: "genre", value: this.request.query.genres },
      {
        field: "updatedDate",
        value: this.request.query.updatedDate,
      },
      {
        field: "year",
        value: this.request.query.year,
      },
    ];
  }

  public build(): GetMoviesRequest {
    return {
      limit: this.limit,
      offset: this.offset,
      filter: this.filter,
    } as GetMoviesRequest;
  }
}
