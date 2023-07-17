import swaggerDoc from "@config/swagger";
import { injectable } from "inversify";
import { serve, setup } from "swagger-ui-express";
import { BaseController } from "./base-controller";

@injectable()
export class SwaggerController extends BaseController {
  constructor() {
    super();
  }

  public init(): void {
    this.router.use("/", serve);
    this.router.get("/", setup(swaggerDoc));
  }
}
