import { GetEntitiesRequest } from "./get-entities-request";

type GenreFilter = { field: "genre"; value: Array<number> };
type YearFilter = { field: "year"; value: Array<number> };
type UpdatedAtFilter = {
  field: "updatedDate";
  value: { from: Date; to: Date };
};

export type MovieFilter = Array<GenreFilter | YearFilter | UpdatedAtFilter>;

export type GetMoviesRequest = GetEntitiesRequest & {
  filter: MovieFilter;
};
