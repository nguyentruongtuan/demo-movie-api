import { injectable } from "inversify";
import { BaseController } from "./base-controller";

@injectable()
export class Auth0Controller extends BaseController {
  public init(): void {
    this.router.get("/callback", this.callback);
  }

  private async callback(req, res): Promise<void> {
    res.send({ id: 123 });
  }
}
