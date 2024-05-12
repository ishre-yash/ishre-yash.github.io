import React from "react";
import { motion } from "framer-motion";

function PageHeading({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
      }}
      className="default-transition default-focus mt-4 mb-4 inline-flex w-full justify-center rounded-2xl bg-primary-500 bg-opacity-[.15] px-3 py-2 text-4xl font-bold text-primary-200 saturate-200 filter backdrop-blur-sm backdrop-filter md:pb-4 md:text-6xl lg:px-5"
    >
      {title}
    </motion.h2>
  );
}

export default PageHeading;
