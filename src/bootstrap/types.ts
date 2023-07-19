export const TYPES = {
  AppRouter: Symbol.for("AppRouter"),
  Database: Symbol.for("Database"),

  UserController: Symbol.for("UserController"),
  Auth0Controller: Symbol.for("Auth0Controller"),
  SwaggerController: Symbol.for("SwaggerController"),
  MovieController: Symbol.for("MovieController"),

  MovieRepository: Symbol.for("MovieRepository"),
  GetMoviesUsecase: Symbol.for("GetMoviesUsecase"),
  CreateMovieUsecase: Symbol.for("CreateMovieUsecase"),

  MovieGateway: Symbol.for("MovieGateway"),

  MovieModel: Symbol.for("MovieModel"),
  GenreModel: Symbol.for("GenreModel"),
};