import { injectable } from "inversify";
import { DataTypes } from "sequelize";
import { BaseModel } from "./base-model";
import { Database } from "src/bootstrap/database";

@injectable()
export class MovieModel extends BaseModel {
  declare title: string;
  declare year: number;
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
  { sequelize: database.getClient().client, modelName: "Movies" }
);
