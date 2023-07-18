import "module-alias/register";
import "reflect-metadata";
import express from "express";
import container from "@bootstrap/container";
import { AppRouter } from "@bootstrap/app-router";
import { TYPES } from "@bootstrap/types";
import { ErrorResponse } from "./middleware/error-response";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

container.get<AppRouter>(TYPES.AppRouter).init(app);
app.use(ErrorResponse);

app.listen(8000, () => {
  console.log("App is listening on PORT 8000");
});
