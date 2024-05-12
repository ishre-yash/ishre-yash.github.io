import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import '@/globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "system"]}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
