import { inject, injectable } from "inversify";
import { Model } from "sequelize";
import { Database } from "src/bootstrap/database";
import { TYPES } from "src/bootstrap/types";

@injectable()
export abstract class BaseModel extends Model {
  declare id: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}
