import { injectable } from "inversify";
import protectURL from "src/middleware/auth";
import { BaseController } from "./base-controller";

@injectable()
export class UserController extends BaseController {
  public init(): void {
    this.router.use(protectURL);
    this.router.get("/", this.getUser);
  }

  private async getUser(req, res): Promise<void> {
    res.send({ id: 123 });
  }
}