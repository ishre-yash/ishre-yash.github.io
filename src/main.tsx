import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "system"]}
      >
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
