import React, { useState, useEffect } from "react";
import Main from "../components/commen/MainSection";
import PageHeading from "../components/commen/PageHeading";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Date from "../components/commen/Date";
import Error from "../components/Modal";

export default function Timeline({ setProgress }) {
  useEffect(() => {
    document.title = "ShreYash - Timeline";
  }, []);

  return (
    <>
      <Main>
        <PageHeading title="Timeline" />
        <Timelines setProgress={setProgress} />
      </Main>
    </>
  );
}

function Timelines({ setProgress }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getTimeline = async () => {
    setProgress(30);
    const options = { method: "GET" };
    fetch("https://ishre-yash.github.io/api/portfolio/timeline/", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setProgress(60);
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
    getTimeline();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Error />}
      <ul className="-mb-8">
        {data.map((event, index) => (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25 * index,
            }}
            className="my-1"
            key={event.title}
          >
            <div className="relative pb-8">
              {index !== data.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-1/2 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"
                />
              )}

              <div className="relative flex items-center space-x-3 rounded-lg border-2 border-gray-200 bg-gray-50 bg-opacity-75 px-2 py-3 backdrop-blur-sm backdrop-filter dark:border-gray-600 dark:bg-gray-900 dark:bg-opacity-75">
                <div className="relative mx-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 bg-opacity-[.15] px-1 saturate-200 backdrop-blur-sm backdrop-filter">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-primary-500"
                    icon={event.icon}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 flex flex-wrap justify-between text-lg font-bold tracking-tight text-gray-500 dark:text-white">
                    <span>{event.title}</span>
                    <span className="flex-1 sm:hidden" />
                    <Date date={event.date} />
                  </h3>
                  <p className="my-2 text-base text-gray-300">
                    {event.description}
                  </p>

                  {event.link && (
                    <a
                      className="default-transition default-focus mt-2 inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 bg-opacity-75 px-4 py-1 text-sm font-medium text-gray-400 saturate-200 backdrop-blur-sm backdrop-filter hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-75 dark:text-primary-500 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 dark:hover:text-primary-400 sm:w-auto"
                      href={event.link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {event.link.text}
                      <Icon className="ml-3" icon="feather:external-link" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
