import { UserController } from "@controller/user-controller";
import { Express } from "express";
import { inject, injectable } from "inversify";
import { Auth0Controller } from "src/controller/auth0-controller";
import { TYPES } from "./types";
import { SwaggerController } from "src/controller/swagger-controller";
import { ErrorResponse } from "src/middleware/error-response";
import { MovieController } from "src/controller/movie-controller";

@injectable()
export class AppRouter {
  constructor(
    @inject(TYPES.UserController)
    private readonly userController: UserController,
    @inject(TYPES.Auth0Controller)
    private readonly auth0Controller: Auth0Controller,
    @inject(TYPES.SwaggerController)
    private readonly swaggerController: SwaggerController,
    @inject(TYPES.MovieController)
    private readonly movieController: MovieController
  ) {}

  public init(app: Express): void {
    app.use("/api/users", this.userController.getRouter());
    app.use("/api/movies", this.movieController.getRouter());
    app.use("/swagger", this.swaggerController.getRouter());
    app.use("/", this.auth0Controller.getRouter());
  }
}