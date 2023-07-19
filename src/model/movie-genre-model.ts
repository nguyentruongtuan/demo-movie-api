import { injectable } from "inversify";
import { BaseModel } from "./base-model";
import { Database } from "src/bootstrap/database";
import { DataTypes } from "sequelize";
import { MovieModel } from "./movie-model";
import { GenreModel } from "./genre-model";

@injectable()
export class MovieGenreModel extends BaseModel {
  declare MovieId: number;
  declare GenreId: number;
}

const database = new Database();

MovieGenreModel.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MovieModel,
        key: "id",
      },
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GenreModel,
        key: "id",
      },
    },
  },
  { sequelize: database.getClient().client, modelName: "MovieGenres" }
);
