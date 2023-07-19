import { injectable } from "inversify";
import { DataTypes } from "sequelize";
import { BaseModel } from "./base-model";
import { Database } from "src/bootstrap/database";
import { GenreModel } from "./genre-model";
import { MovieGenreModel } from "./movie-genre-model";

@injectable()
export class MovieModel extends BaseModel {
  declare title: string;
  declare year: number;
  declare Genres: Array<GenreModel>;
}

const database = new Database();

MovieModel.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database.getClient().client,
    modelName: "Movies",
  }
);

MovieModel.belongsToMany(GenreModel, {
  through: MovieGenreModel,
  foreignKey: "movieId",
});
GenreModel.belongsToMany(MovieModel, {
  through: MovieGenreModel,
  foreignKey: "genreId",
});