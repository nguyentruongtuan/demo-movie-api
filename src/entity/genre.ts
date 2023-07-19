import { BaseId } from "./base-entity";

export type GenreId = BaseId & number;

export type Genre = {
  id: GenreId;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
