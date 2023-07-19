import { BaseId } from "./base-entity";
import { Genre, GenreId } from "./genre";

export type MovieId = BaseId & number;

export type Movie = {
  id: MovieId;
  title: string;
  year: number;
  genres: Array<Genre>;
  createdAt: Date;
  updatedAt: Date;
};
