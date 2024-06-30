import { motion } from "framer-motion";
import "./loader.style.css";

const LoadingScreen = () => {
  return (
    <motion.section
      className="fixed inset-0 flex items-center justify-center bg-background/15 backdrop-blur z-50"
      initial={{ opacity: 0 }} // Initial state (invisible)
      animate={{ opacity: 1 }} // Animate to visible
      exit={{ opacity: 0 }} // Exit animation (fade out)
    >
      <div className="loader">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="loader-square bg-foreground"></div>
        ))}
      </div>
    </motion.section>
  );
};

export default LoadingScreen;
