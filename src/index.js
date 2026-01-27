import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import App from "@/App";

// Handle redirect from 404.html
if (window.location.search.includes('redirect=')) {
  const redirectPath = decodeURIComponent(window.location.search.split('redirect=')[1]);
  window.history.replaceState(null, null, redirectPath);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
