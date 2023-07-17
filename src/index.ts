import "module-alias/register";
import "reflect-metadata";
import express from "express";
import container from "@bootstrap/container";
import { AppRouter } from "@bootstrap/app-router";
import { TYPES } from "@bootstrap/types";
import { appAuth } from "./middleware/auth";
import { ErrorResponse } from "./middleware/error-response";

const app = express();

app.use(appAuth());

container.get<AppRouter>(TYPES.AppRouter).init(app);
app.use(ErrorResponse);

app.listen(3000, () => {

  console.log("App is listening on PORT 3000")
});
