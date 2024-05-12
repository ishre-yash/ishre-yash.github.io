import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEvent } from "react-use";
import LoadingBar from "react-top-loading-bar";

import useClick from "@/lib/Sound";
import Header from "@/layouts/Header";
import Background from "@/components/background";

import HomePage from "@/pages/home.page";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Status from "@/pages/Status";
import TimelinePage from "@/pages/timeline.page";
import ReferralsPage from "@/pages/referrals.page";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [useSound, setUseSound] = useState(true);
  const location = useLocation();
  const [progress, setProgress] = useState(0);

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

      <LoadingBar
        height={3}
        color="#0072ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/about"
            element={<About setProgress={setProgress} />}
          ></Route>
          <Route
            path="/projects"
            element={<Projects setProgress={setProgress} />}
          ></Route>
          <Route
            path="/timeline"
            element={<TimelinePage />}
          ></Route>
          <Route
            path="/referrals"
            element={<ReferralsPage />}
          ></Route>
          <Route
            path="/status"
            element={<Status setProgress={setProgress} />}
          ></Route>

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
