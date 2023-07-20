import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import protectURL from "src/middleware/auth";
import { GetEntitiesRequestMapping } from "src/request/mapping/get-entities-request-mapping";
import { GetGenresUsecase } from "src/usecase/genre/get-genres-usecase";
import { BaseController } from "./base-controller";

@injectable()
export class GenreController extends BaseController {
  constructor(
    @inject(TYPES.GetGenresUsecase)
    private readonly getGenresUsecase: GetGenresUsecase
  ) {
    super();
  }

  public init(): void {
    this.router.use(protectURL);

    this.router.get("/", async (req, res): Promise<void> => {
      const movies = await this.getGenresUsecase.execute(
        new GetEntitiesRequestMapping(req).build()
      );
      res.json(movies);
    });
  }
}
