import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// @ts-ignore
import useClick from "./lib/sound";
// @ts-ignore
import Background from "./components/background";
import Header from "./components/header";

import useMyStore from "./store";

const HomePage = React.lazy(() => import("./pages/home.page"));
const ProjectsPage = React.lazy(() => import("./pages/projects.page"));
const TimelinePage = React.lazy(() => import("./pages/timeline.page"));
const ReferralsPage = React.lazy(() => import("./pages/referrals.page"));

function App() {
  const { isAnimation, isSound } = useMyStore();
  const location = useLocation();

  const [play] = useClick();
  // useEvent("mousedown", () => play());

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
      {isAnimation ? <Background /> : ""}

      <React.Suspense
        fallback={
          <section className="fixed inset-0 flex items-center justify-center bg-background/15 backdrop-blur z-50">
            <div
              data-glitch="Loading..."
              className="glitch text-4xl font-bold tracking-widest"
            >
              Loading...
            </div>
          </section>
        }
      >
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/timeline" element={<TimelinePage />}></Route>
            <Route path="/referrals" element={<ReferralsPage />}></Route>
          </Routes>
        </AnimatePresence>
      </React.Suspense>
    </>
  );
}

export default App;
