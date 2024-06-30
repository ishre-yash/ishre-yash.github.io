import React, { useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSound } from "./lib/sound";
import Header from "./components/header";

import useMyStore from "./store";
import Particles from "./components/ui/particles";
import { useTheme } from "next-themes";
import LoadingScreen from "./components/loading-screen";
import NotFoundPage from "./pages/not-found.page";

const HomePage = React.lazy(() => import("./pages/home.page"));
const ProjectsPage = React.lazy(() => import("./pages/projects.page"));
const TimelinePage = React.lazy(() => import("./pages/timeline.page"));
const ReferralsPage = React.lazy(() => import("./pages/referrals.page"));

function App() {
  const { isAnimation, isSound } = useMyStore();
  const location = useLocation();
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const { play } = useSound("/sounds/click.ogg", { volume: 0.05 });

  useEffect(() => {
    if (isSound) {
      const handler = () => play();
      window.addEventListener("mousedown", handler);
      return () => {
        window.removeEventListener("mousedown", handler);
      };
    }
  }, [play, isSound]);

  return (
    <>
      <Header />
      {isAnimation && (
        <section className="fixed inset-0">
          <Particles
            className="absolute inset-0"
            quantity={1000}
            ease={1}
            size={1}
            color={color}
            refresh
          />
        </section>
      )}
      <div className="background-pattern" />
      <React.Suspense fallback={<LoadingScreen />}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/timeline" element={<TimelinePage />}></Route>
            <Route path="/referrals" element={<ReferralsPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </AnimatePresence>
      </React.Suspense>
    </>
  );
}

export default App;
