import React, { useState, useEffect } from "react";
import Error from "./Modal";
import { motion } from "framer-motion";

function Project({ setProgress }) {
  const [project, setProject] = useState([]);
  const [error, setError] = useState(false);
  const getProject = async () => {
    setProgress(30);
    const options = { method: "GET" };
    fetch("https://ishre-yash.github.io/api/portfolio/projects/", options)
      .then((response) => response.json())
      .then((response) => {
        setProgress(60);
        setProject(response);
        setTimeout(() => {
          setProgress(100);
        }, 250);
      })
      .catch((err) => {
        setError(true);
        setProgress(100);
      });
  };
  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Error />}
      <ul className="flex flex-col space-y-4">
        {project.map((p, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25 * index,
              }}
              key={index}
            >
              <li
                className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50 bg-opacity-75 backdrop-blur-sm backdrop-filter transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-75"
                draggable="true"
              >
                {p.img && (
                  <img
                    className="h-fit w-full rounded-t-lg "
                    src={p.img}
                    alt={p.title}
                  />
                )}

                <div className="flex flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-6">
                  <div className="flex w-full flex-1 items-start justify-start">
                    <img
                      className="mt-2 h-10 w-10 rounded-full"
                      src={p.logo}
                      alt={p.title}
                      crossOrigin="anonymous"
                    ></img>
                    <div className="min-w-0 flex-1 px-4">
                      <h1 className="text-lg font-bold text-gray-700 dark:text-white">
                        {p.title}
                      </h1>
                      <p className="mt-1 flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                        {" "}
                        {p.description.split("\n").map((item, key) => {
                          return (
                            <span key={key}>
                              {item}
                              <br />
                              <br />
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex w-full items-center justify-end space-x-2 sm:mt-1 sm:w-auto sm:flex-col sm:gap-4 sm:space-x-0">
                    {p.url && (
                      <a
                        className="relative inline-flex h-10 w-full justify-center rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white sm:w-10"
                        aria-label={`${p.title} homepage`}
                        href={p.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">{p.title} homepage</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <path d="M9 22V12h6v10"></path>
                          </g>
                        </svg>
                      </a>
                    )}
                    {p.git && (
                      <a
                        className="relative inline-flex h-10 w-full justify-center rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white sm:w-10 "
                        aria-label="GitHub Repository"
                        href={p.git}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          ></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            </motion.div>
          );
        })}
      </ul>
    </>
  );
}

export default Project;
