import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Root component
import "./index.css"; // Styles for the app


const rootElement = document.getElementById("root");


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
