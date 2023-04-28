import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CalendarPage } from "./pages/CalendarPage";
import { CategoryPage } from "./pages/CategoryPage";
import { DayPage } from "./pages/DayPage";
import { SettingsPage } from "./pages/SettingsPage";

localStorage.getItem("categories")?.length === undefined &&
  localStorage.setItem("categories", `[{"name":"Default","isDefault":true}]`);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tasks/:date" element={<DayPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
