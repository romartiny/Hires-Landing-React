import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/assets/index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './redux/store';

const rootElement = document.getElementById('hires');

if (!rootElement) {
    throw new Error('Root element not found.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
