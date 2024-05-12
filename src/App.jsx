import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEvent } from "react-use";
import LoadingBar from "react-top-loading-bar";

import useClick from "./lib/Sound";
import Header from "./layouts/Header";
import Background from "./components/background";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Timeline from "./pages/Timeline";
import Referrals from "./pages/Referrals";
import Status from "./pages/Status";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [useSound, setUseSound] = useState(true);
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  // useSound
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
          <Route path="/" element={<Home setProgress={setProgress} />}></Route>
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
            element={<Timeline setProgress={setProgress} />}
          ></Route>
          <Route
            path="/referrals"
            element={<Referrals setProgress={setProgress} />}
          ></Route>
          <Route
            path="/status"
            element={<Status setProgress={setProgress} />}
          ></Route>

          <Route path="*" component={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
