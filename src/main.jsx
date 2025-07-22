import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import { FavoritesContext } from "./context/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <FavoritesContext>
    <App />
  </FavoritesContext>
);
