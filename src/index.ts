import "module-alias/register";
import "reflect-metadata";
import express from "express";
import container from "@bootstrap/container";
import { AppRouter } from "@bootstrap/app-router";
import { TYPES } from "@bootstrap/types";
import { ErrorResponse } from "./middleware/error-response";
import bodyParser from "body-parser";
import { Database } from "./bootstrap/database";
import { StatusCodes } from "http-status-codes";
import { UnauthorizedError } from "express-oauth2-jwt-bearer";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

container.get<AppRouter>(TYPES.AppRouter).init(app);

new Database().test().then(() => {
  app.use((err, req, res, next) => {
    if (err instanceof UnauthorizedError) {
      res.status(StatusCodes.FORBIDDEN).json({ message: err.message });
    } else {
      res
        .status(StatusCodes.SERVICE_UNAVAILABLE)
        .json({ message: "something wrong" });
    }
  });
  app.listen(8000, () => {
    console.log("App is listening on PORT 8000");
  });
});


