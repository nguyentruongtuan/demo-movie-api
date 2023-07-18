import { injectable } from "inversify";
import { BaseModel } from "./base-model";

@injectable()
export class GenreModel extends BaseModel {
  declare name: string;
}
