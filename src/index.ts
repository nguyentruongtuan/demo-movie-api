import "module-alias/register";
import "reflect-metadata";
import express from "express";
import container from "@bootstrap/container";
import { AppRouter } from "@bootstrap/app-router";
import { TYPES } from "@bootstrap/types";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

container.get<AppRouter>(TYPES.AppRouter).init(app);

app.listen(3000, () => {

  console.log("App is listening on PORT 3000")
});
