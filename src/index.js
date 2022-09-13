import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./components/Application";

import "./sass/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
