export const TYPES = {
  AppRouter: Symbol.for("AppRouter"),
  Database: Symbol.for("Database"),

  UserController: Symbol.for("UserController"),
  Auth0Controller: Symbol.for("Auth0Controller"),
  SwaggerController: Symbol.for("SwaggerController"),
  MovieController: Symbol.for("MovieController"),
  GenreController: Symbol.for("GenreController"),

  MovieRepository: Symbol.for("MovieRepository"),
  MovieGenreRepository: Symbol.for("MovieGenreRepository"),
  GenreRepository: Symbol.for("GenreRepository"),

  GetMoviesUsecase: Symbol.for("GetMoviesUsecase"),
  CreateMovieUsecase: Symbol.for("CreateMovieUsecase"),
  DeleteMovieUsecase: Symbol.for("DeleteMovieUsecase"),
  UpdateMovieUsecase: Symbol.for("UpdateMovieUsecase"),
  GetMovieByIdUsecase: Symbol.for("GetMovieByIdUsecase"),
  GetGenresUsecase: Symbol.for("GetGenresUsecase"),

  MovieGateway: Symbol.for("MovieGateway"),
  MovieGenreGateway: Symbol.for("MovieGenreGateway"),
  GenreGateway: Symbol.for("GenreGateway"),

  MovieModel: Symbol.for("MovieModel"),
  GenreModel: Symbol.for("GenreModel"),
};