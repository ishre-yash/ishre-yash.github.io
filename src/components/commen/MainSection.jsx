import React from "react";
import { motion } from "framer-motion";

function MainSection({ children }) {
  return (
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="flex flex-col justify-center px-8"
    >
      <section className="flex min-h-screen flex-grow pt-16 pb-12">
        <div className="mx-auto flex w-full flex-grow flex-col justify-start px-0 container sm:px-16">
          {children}
        </div>
      </section>
    </motion.main>
  );
}

export default MainSection;
