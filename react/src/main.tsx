import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ExerciseProvider } from "./context/exercise";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }: any) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0ProviderWithHistory>
    <ExerciseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExerciseProvider>
  </Auth0ProviderWithHistory>
);