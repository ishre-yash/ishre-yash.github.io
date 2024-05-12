import React from "react";
import { motion } from "framer-motion";

function Backdrop({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
