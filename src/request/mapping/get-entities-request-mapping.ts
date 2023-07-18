import { GetEntitiesRequest } from "../get-entities-request";
import { BaseRequestMapping } from "./base-request-mapping";

export class GetEntitiesRequestMapping extends BaseRequestMapping<GetEntitiesRequest> {
  public limit: number;
  public offset: number;
  constructor(private readonly request) {
    super();
    this.limit = this.request.limit || 10;
    this.offset = this.request.offset || 0;
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public setOffset(offset: number): void {
    this.offset = offset;
  }

  public build(): GetEntitiesRequest {
    return {
      limit: this.limit,
      offset: this.offset,
    } as GetEntitiesRequest;
  }
}
