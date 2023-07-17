import { Error403 } from "src/error/error-403";

import { auth } from "express-openid-connect";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "INLs3n0eFrxhNNlgsGt18tw6dtLufByF",
  issuerBaseURL: "https://dev-x07ebo0c4dxmxxgj.us.auth0.com",
};

export function appAuth() {
  return auth(config);
}

export function protectURL(req, res, next) {
  if (!req.oidc.isAuthenticated()) {
    throw new Error403("Forbidden");
  }

  next();
}
