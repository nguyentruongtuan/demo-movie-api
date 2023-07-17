import { injectable } from "inversify";
import { BaseController } from "./base-controller";

@injectable()
export class UserController extends BaseController {

  public init(): void {
    this.router.get('/', this.getUser)
  }

  private async getUser(req, res): Promise<void> {
    res.send( {"id": 123})
  }

}