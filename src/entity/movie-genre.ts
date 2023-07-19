import { BaseId } from "./base-entity";

export type MovieGenreId = BaseId & number;

export type MovieGenre = {
  id: MovieGenreId;
  movieId: number;
  genreId: number;
  createdAt: Date;
  updatedAt: Date;
};
