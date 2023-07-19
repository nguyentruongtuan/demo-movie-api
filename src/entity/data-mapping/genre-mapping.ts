import { GenreModel } from "src/model/genre-model";
import { Genre } from "../genre";

export class GenreMapping {
  private id: number;
  private name: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(private readonly model: GenreModel) {
    this.id = this.model.id;
    this.name = this.model.name;
    this.updatedAt = this.model.updatedAt;
    this.createdAt = this.model.createdAt;
  }
  public build(): Genre {
    return {
      id: this.id,
      name: this.name,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    } as Genre;
  }
}
