import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="tianyi.us.auth0.com"
    clientId="gBwzZTry5NBVx44tlOrSm0SGQjQXCeje"
    redirectUri="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);