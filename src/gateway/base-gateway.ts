import { inject, injectable } from "inversify";
import { Database } from "src/bootstrap/database";
import { TYPES } from "src/bootstrap/types";

@injectable()
export abstract class BaseGateway<Entity> {
  constructor(@inject(TYPES.Database) protected db: Database) {}

  abstract getById(id: string): Promise<Entity>;
}
