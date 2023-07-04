import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { AppProvider, AppContext } from './context';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// JS de Bootstrap Bundle
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(

  <AppProvider>
    <AppContext.Consumer>
      {({ state, dispatch }) => {
        return (
          <BrowserRouter>
            <App state={state} dispatch={dispatch} />
          </BrowserRouter>
        );
      }}
    </AppContext.Consumer>

  </AppProvider>

);

