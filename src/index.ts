import "module-alias/register";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import container from "@bootstrap/container";
import { AppRouter } from "@bootstrap/app-router";
import { TYPES } from "@bootstrap/types";
import bodyParser from "body-parser";
import { Database } from "./bootstrap/database";
import { ErrorResponse } from "./middleware/error-response";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

container.get<AppRouter>(TYPES.AppRouter).init(app);

app.use(ErrorResponse);
new Database().test().then(() => {
  app.listen(8000, () => {
    console.log("App is listening on PORT 8000");
  });
});


