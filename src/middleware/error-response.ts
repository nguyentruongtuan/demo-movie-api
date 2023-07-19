import { UnauthorizedError } from "express-oauth2-jwt-bearer";
import { StatusCodes } from "http-status-codes";

export function ErrorResponse(err, req, res, next) {
  if (err instanceof UnauthorizedError) {
    res.status(StatusCodes.FORBIDDEN).json({ message: err.message });
  } else {
    res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json({ message: "something wrong" });
  }
}
