import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <StrictMode>
    {/* <Auth0ProviderWithHistory> */}
      <App />
    {/* </Auth0ProviderWithHistory> */}
    </StrictMode>
  </Router>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
