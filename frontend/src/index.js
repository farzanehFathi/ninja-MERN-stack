import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { workoutsContetxProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <workoutsContetxProvider>
      <App />
    </workoutsContetxProvider>
  </React.StrictMode>
);
