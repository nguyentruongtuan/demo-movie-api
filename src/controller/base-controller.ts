import express from "express";
import { injectable } from "inversify";
import { ErrorResponse } from "src/middleware/error-response";

@injectable()
export abstract class BaseController {
  protected router: express.Router;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  public abstract init(): void;

  public getRouter(): express.IRouter {
    return this.router;
  }
}
