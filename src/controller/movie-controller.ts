import { inject, injectable } from "inversify";
import protectURL from "src/middleware/auth";
import { BaseController } from "./base-controller";
import { GetMoviesUsecase } from "src/usecase/get-movies-usecase";
import { TYPES } from "src/bootstrap/types";
import { GetEntitiesRequestMapping } from "src/request/mapping/get-entities-request-mapping";
import { CreateMovieUsecase } from "src/usecase/create-movie-usecase";
import { CreateMovieMapping } from "src/request/mapping/create-movie-mapping";

@injectable()
export class MovieController extends BaseController {
  constructor(
    @inject(TYPES.GetMoviesUsecase)
    private readonly getMovieUseCase: GetMoviesUsecase,
    @inject(TYPES.CreateMovieUsecase)
    private readonly createMovieUsecase: CreateMovieUsecase
  ) {
    super();
  }

  public init(): void {
    this.router.use(protectURL);
    this.router.get("/", async (req, res): Promise<void> => {
      const movies = await this.getMovieUseCase.execute(
        new GetEntitiesRequestMapping(req.query).build()
      );
      res.send(movies);
    });
    this.router.post("/", async (req, res): Promise<void> => {
      const movie = await this.createMovieUsecase.execute(
        new CreateMovieMapping(req).build()
      );
      res.json(movie);
    });
  }
}
