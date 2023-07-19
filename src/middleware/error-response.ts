import { UnauthorizedError } from "express-oauth2-jwt-bearer";
import { StatusCodes } from "http-status-codes";
import { NotFound } from "src/error/not-found";

export function ErrorResponse(err, req, res, next) {
  if (err instanceof UnauthorizedError) {
    res.status(StatusCodes.FORBIDDEN).json({ message: err.message });
  } else if (err instanceof NotFound) {
    res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
  } else {
    res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json({ message: "something wrong" });
  }
}
