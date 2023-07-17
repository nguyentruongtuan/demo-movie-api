import { Container } from "inversify";
import { TYPES } from "./types";
import { UserController } from "@controller/user-controller";
import { AppRouter } from "@bootstrap/app-router";


const container = new Container()

container.bind<AppRouter>(TYPES.AppRouter).to(AppRouter);
container.bind<UserController>(TYPES.UserController).to(UserController);


export default container