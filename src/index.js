import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "animate.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import themeSlice from "./features/themeSlice";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: { themeSlice: themeSlice },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

