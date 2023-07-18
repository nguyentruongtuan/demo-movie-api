import { injectable } from "inversify";

@injectable()
export abstract class BaseGateway<Entity> {
  abstract getById(id: number): Promise<Entity>;
}
