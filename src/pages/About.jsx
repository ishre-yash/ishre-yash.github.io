import React, { useEffect } from "react";
import Abouts from "../components/about";
import { motion } from "framer-motion";

function About({ setProgress }) {
  useEffect(() => {
    document.title = "ShreYash - About";
  }, []);
  return (
    <>
      <motion.main
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="flex flex-col justify-center sm:px-8"
      >
        <section className="flex min-h-screen flex-grow sm:pb-12 sm:pt-16">
          <div className="mx-auto flex w-full  flex-grow flex-col justify-start px-0 sm:max-w-2xl sm:px-16">
            <Abouts setProgress={setProgress} />
          </div>
        </section>
      </motion.main>
    </>
  );
}

export default About;
