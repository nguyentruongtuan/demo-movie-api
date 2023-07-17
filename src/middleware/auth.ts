import { Error403 } from "src/error/error-403";

import { auth } from "express-oauth2-jwt-bearer";

const config = {
  audience: "QWNlRGlnaXRhbA==",
  issuerBaseURL: "https://dev-x07ebo0c4dxmxxgj.us.auth0.com/",
  tokenSigningAlg: "RS256",
};

export default auth(config);

// export function protectURL(req, res, next) {
//   if (!req.oidc.isAuthenticated()) {
//     throw new Error403("Forbidden");
//   }

//   next();
// }
