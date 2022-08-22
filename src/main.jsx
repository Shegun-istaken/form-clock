import React from "react";
import ReactDOM from "react-dom/client";
import { App, Clock } from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Clock" element={<Clock />} />
    </Routes>
  </BrowserRouter>
);
