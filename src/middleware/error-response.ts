import { StatusCodes } from "http-status-codes";
import { Error403 } from "src/error/error-403";

export function ErrorResponse(err, req, res, next) {
  if (err instanceof Error403) {
    res.status(StatusCodes.FORBIDDEN).send("FORBIDDEN");
  } else {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).send("something wrong");
  }

  next(err);
}
