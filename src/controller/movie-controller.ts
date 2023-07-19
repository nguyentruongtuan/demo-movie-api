import { inject, injectable } from "inversify";
import protectURL from "src/middleware/auth";
import { BaseController } from "./base-controller";
import { GetMoviesUsecase } from "src/usecase/get-movies-usecase";
import { TYPES } from "src/bootstrap/types";
import { GetEntitiesRequestMapping } from "src/request/mapping/get-entities-request-mapping";
import { CreateMovieUsecase } from "src/usecase/create-movie-usecase";
import { CreateMovieMapping } from "src/request/mapping/create-movie-mapping";
import { DeleteMovieUsecase } from "src/usecase/delete-movie-usecase";
import { UpdateMovieMapping } from "src/request/mapping/update-movie-mapping";
import { UpdateMovieUsecase } from "src/usecase/update-movie-usecase";
import { GetMovieByIdUsecase } from "src/usecase/get-movie-by-id-usecase";
import { ErrorResponse } from "src/middleware/error-response";

@injectable()
export class MovieController extends BaseController {
  constructor(
    @inject(TYPES.GetMoviesUsecase)
    private readonly getMovieUseCase: GetMoviesUsecase,
    @inject(TYPES.CreateMovieUsecase)
    private readonly createMovieUsecase: CreateMovieUsecase,
    @inject(TYPES.DeleteMovieUsecase)
    private readonly deleteMovieUsecase: DeleteMovieUsecase,
    @inject(TYPES.UpdateMovieUsecase)
    private readonly updateMovieUsecase: UpdateMovieUsecase,
    @inject(TYPES.GetMovieByIdUsecase)
    private readonly getMovieByIdUsecase: GetMovieByIdUsecase
  ) {
    super();
  }

  public init(): void {
    this.router.use(protectURL);

    this.router.get("/", async (req, res): Promise<void> => {
      const movies = await this.getMovieUseCase.execute(
        new GetEntitiesRequestMapping(req.query).build()
      );
      res.json(movies);
    });

    this.router.get("/:id", async (req, res): Promise<void> => {
      const movies = await this.getMovieByIdUsecase.execute(
        Number(req.params.id)
      );
      res.json(movies);
    });

    this.router.post("/", async (req, res): Promise<void> => {
      const movie = await this.createMovieUsecase.execute(
        new CreateMovieMapping(req).build()
      );
      res.json(movie);
    });

    this.router.put("/:id", async (req, res): Promise<void> => {
      const movie = await this.updateMovieUsecase.execute(
        new UpdateMovieMapping(req).build()
      );
      res.json(movie);
    });

    this.router.delete("/:id", async (req, res): Promise<void> => {
      const movie = await this.deleteMovieUsecase.execute(
        Number(req.params.id)
      );
      res.json(movie);
    });
  }
}
