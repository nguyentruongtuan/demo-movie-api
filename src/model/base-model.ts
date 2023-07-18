import { injectable } from "inversify";
import { Model } from "sequelize";

@injectable()
export abstract class BaseModel extends Model {
  declare id: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}
