import { UserController } from "@controller/user-controller";
import { Express } from "express";
import { inject, injectable } from "inversify";
import { Auth0Controller } from "src/controller/auth0-controller";
import { TYPES } from "./types";

@injectable()
export class AppRouter {
  constructor(
    @inject(TYPES.UserController)
    private readonly userController: UserController,
    @inject(TYPES.Auth0Controller)
    private readonly auth0Controller: Auth0Controller
  ) {}

  public init(app: Express): void {
    this.userController.init();
    app.use("/users", this.userController.getRouter());
    app.use("/", this.auth0Controller.getRouter());
  }
}
