import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// @ts-ignore
import useClick from "./lib/sound";
// @ts-ignore
import Background from "./components/background";
import Header from "./components/header";

import HomePage from "./pages/home.page";
import ProjectsPage from "./pages/projects.page";
import TimelinePage from "./pages/timeline.page";
import ReferralsPage from "./pages/referrals.page";
import useMyStore from "./store";
import { useEffect } from "react";

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

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/timeline" element={<TimelinePage />}></Route>
          <Route path="/referrals" element={<ReferralsPage />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
