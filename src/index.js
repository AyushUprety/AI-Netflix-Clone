import App from "./Components/app.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
