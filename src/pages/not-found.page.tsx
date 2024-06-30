import { motion } from "framer-motion";
import { ArrowLeftIcon, HouseIcon, TriangleAlertIcon } from "lucide-react";
import { Typography } from "../components/ui/typography";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const pageVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.5 } },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <motion.main
      className="h-screen w-full flex items-center justify-center relative"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <motion.section
        className="sm:mx-auto flex w-full max-w-2xl flex-grow flex-col justify-center p-4 sm:p-6 lg:p-8 bg-background border rounded-2xl mx-4 gap-4"
        variants={pageVariants}
      >
        <motion.div variants={iconVariants} className="mx-auto">
          <TriangleAlertIcon className="h-12 w-auto" />
        </motion.div>
        <Typography variant={"h1"} className="text-center">
          Whoops!
        </Typography>
        <Typography variant={"p"} className="text-center !mt-0">
          The page you're looking for doesn't exist.
        </Typography>

        <div className="mx-auto flex gap-4 mt-4">
          <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>
            <ArrowLeftIcon className="mr-2" />
            Back
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate("/")}>
            <HouseIcon className="mr-2" />
            Home
          </Button>
        </div>
      </motion.section>
    </motion.main>
  );
}
