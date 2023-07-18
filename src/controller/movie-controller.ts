import { inject, injectable } from "inversify";
import protectURL from "src/middleware/auth";
import { BaseController } from "./base-controller";
import { GetMoviesUsecase } from "src/usecase/get-movies-usecase";
import { TYPES } from "src/bootstrap/types";

@injectable()
export class MovieController extends BaseController {
  constructor(
    @inject(TYPES.GetMoviesUsecase)
    private readonly getMovieUseCase: GetMoviesUsecase
  ) {
    super();
  }

  public init(): void {
    this.router.use(protectURL);
    this.router.get("/", async (req, res): Promise<void> => {
      const movies = await this.getMovieUseCase.execute();
      res.send(movies);
    });
    this.router.post("/", async (req, res): Promise<void> => {
      res.send({ id: 123 });
    });
  }
}
