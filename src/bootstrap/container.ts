import { Container } from "inversify";
import { TYPES } from "./types";
import { UserController } from "@controller/user-controller";
import { AppRouter } from "@bootstrap/app-router";
import { Auth0Controller } from "src/controller/auth0-controller";

const container = new Container();

container.bind<AppRouter>(TYPES.AppRouter).to(AppRouter);
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<Auth0Controller>(TYPES.Auth0Controller).to(Auth0Controller);


export default container