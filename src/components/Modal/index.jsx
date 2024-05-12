import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Error() {
  const navigate = useNavigate();

  return (
    <Backdrop>
      <motion.div
        drag
        dragConstraints={{
          top: -150,
          right: 250,
          bottom: 150,
          left: -250,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        onClick={(e) => e.stopPropagation()}
        className="m-auto flex h-[50%] min-h-[300px] w-[90%] flex-col items-center rounded-xl bg-white py-8 dark:bg-gray-900 lg:w-[50%]"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Icon
              icon="feather:alert-triangle"
              className="h-12 w-auto text-primary-500"
            />
          </div>
          <div className="py-4 text-center">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-5xl">
              Whoops!
            </h1>
            <p className="mt-8 text-sm font-medium text-gray-300 dark:text-gray-400">
              Looks like something went wrong on our end.
              <br />
              This isn&apos;t your fault, it&apos;s ours. Please try again
              later.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                type="button"
                className="default-transition default-focus flex h-12 items-center justify-center rounded-lg bg-gray-50 px-8 py-4 text-base font-bold text-primary-300 hover:bg-gray-100 hover:bg-opacity-50 hover:text-primary-400 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <Icon icon="feather:arrow-left" className="mr-2" />
                Back
              </button>

              <Link
                to="/"
                type="link"
                className="default-transition default-focus flex h-12 items-center justify-center rounded-lg bg-gray-50 px-8 py-4 text-base font-bold text-primary-300 hover:bg-gray-100 hover:bg-opacity-50 hover:text-primary-400 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <Icon icon="feather:home" className="mr-2" />
                Home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default Error;
