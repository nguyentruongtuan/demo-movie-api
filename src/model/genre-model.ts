import { injectable } from "inversify";
import { BaseModel } from "./base-model";
import { Database } from "src/bootstrap/database";
import { DataTypes } from "sequelize";
import { MovieModel } from "./movie-model";
import { MovieGenreModel } from "./movie-genre-model";

@injectable()
export class GenreModel extends BaseModel {
  declare name: string;
}

const database = new Database();

GenreModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: database.getClient().client, modelName: "Genres" }
);

