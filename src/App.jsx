import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEvent } from "react-use";

import useClick from "@/lib/Sound";
import Header from "@/layouts/Header";
import Background from "@/components/background";

import HomePage from "@/pages/home.page";
import ProjectsPage from "@/pages/projects.page";
import TimelinePage from "@/pages/timeline.page";
import ReferralsPage from "@/pages/referrals.page";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [useSound, setUseSound] = useState(true);
  const location = useLocation();

  const [play] = useClick();
  useEvent("mousedown", () => play());

  return (
    <>
      <Header
        showAnimation={showAnimation}
        setShowAnimation={setShowAnimation}
        useSound={useSound}
        setUseSound={setUseSound}
      />

      {showAnimation ? <Background /> : ""}



      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/projects"
            element={<ProjectsPage />}
          ></Route>
          <Route
            path="/timeline"
            element={<TimelinePage />}
          ></Route>
          <Route
            path="/referrals"
            element={<ReferralsPage />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
