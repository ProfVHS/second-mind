import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriesPage } from "./pages/CategoriesPage";

localStorage.getItem("categories")?.length === undefined &&
  localStorage.setItem("categories", `[{"name":"Default","isDefault":true}]`);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
