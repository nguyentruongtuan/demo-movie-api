import { auth } from "express-oauth2-jwt-bearer";

const config = {
  audience: "QWNlRGlnaXRhbA==",
  issuerBaseURL: "https://dev-x07ebo0c4dxmxxgj.us.auth0.com/",
  tokenSigningAlg: "RS256",
};

export default auth(config);
