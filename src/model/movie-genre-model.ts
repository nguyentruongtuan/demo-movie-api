import { injectable } from "inversify";
import { BaseModel } from "./base-model";
import { Database } from "src/bootstrap/database";
import { DataTypes } from "sequelize";

@injectable()
export class MovieGenreModel extends BaseModel {
  declare movieId: number;
  declare genreId: number;
}

const database = new Database();

MovieGenreModel.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: database.getClient().client, modelName: "MovieGenres" }
);
