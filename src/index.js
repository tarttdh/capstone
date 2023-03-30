import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// import dotenv from 'dotenv'; 


// dotenv.config();

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const domain = "https://dev-njqopm1mj3a305g7.us.auth0.com";

const clientId = "WQYV0TihIPEg8nMyhgA2PFQ7j3zAm1tJ";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
