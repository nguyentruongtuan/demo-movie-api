import { Express } from "express";
import { inject, injectable } from "inversify";
import { UserController } from "@controller/user-controller";
import { TYPES } from "./types";

@injectable()
export class AppRouter {
  constructor(
    @inject(TYPES.UserController)
    private readonly userController: UserController
  ) {
  }

  public init(app: Express): void {
    this.userController.init()
    app.use('/users',this.userController.getRouter());
  }
}
