import { Container } from "inversify";
import { TYPES } from "./types";
import { UserController } from "@controller/user-controller";
import { AppRouter } from "@bootstrap/app-router";
import { Auth0Controller } from "src/controller/auth0-controller";
import { SwaggerController } from "src/controller/swagger-controller";
import { MovieController } from "src/controller/movie-controller";
import {
  MovieControllerImpl,
  MovieRepository,
} from "src/repository/movie-repository";
import { GetMoviesUsecase } from "src/usecase/get-movies-usecase";
import { MovieModel } from "src/model/movie-model";
import { MovieGateway } from "src/gateway/movie-gateway";
import { Database } from "./database";
import { GenreModel } from "src/model/genre-model";

const container = new Container();

container.bind<AppRouter>(TYPES.AppRouter).to(AppRouter);
container.bind<Database>(TYPES.Database).to(Database);
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<Auth0Controller>(TYPES.Auth0Controller).to(Auth0Controller);
container.bind<MovieController>(TYPES.MovieController).to(MovieController);
container.bind<MovieRepository>(TYPES.MovieRepository).to(MovieControllerImpl);
container.bind<GetMoviesUsecase>(TYPES.GetMoviesUsecase).to(GetMoviesUsecase);
container.bind<MovieGateway>(TYPES.MovieGateway).to(MovieGateway);
container
  .bind<SwaggerController>(TYPES.SwaggerController)
  .to(SwaggerController);
container.bind<MovieModel>(TYPES.MovieModel).to(MovieModel);
container.bind<GenreModel>(TYPES.GenreModel).to(GenreModel);

export default container