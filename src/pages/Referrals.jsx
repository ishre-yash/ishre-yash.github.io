import React, { useState, useEffect } from "react";
import Main from "../components/commen/MainSection";
import PageHeading from "../components/commen/PageHeading";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Error from "../components/Modal";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import writeText from "copy-to-clipboard";

export default function Referrals({ setProgress }) {
  useEffect(() => {
    document.title = "ShreYash - Referrals";
  }, []);
  return (
    <Main>
      <PageHeading title="Referrals" />
      <Referral setProgress={setProgress} />
    </Main>
  );
}

function Referral({ setProgress }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getReferrals = async () => {
    setProgress(30);

    const options = { method: "GET" };
    fetch("https://ishre-yash.github.io/api/portfolio/referrals/", options)
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
    getReferrals();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Error />}
      <Toaster
        toastOptions={{
          position: "bottom-right",
          style: {
            background: "bg-gray-50",
            borderColor: "border-gray-100",
            borderWidth: "2px",
            color: "text-gray-700",
          },
        }}
      />

      <ul className="-mb-8 space-y-4">
        {data.map((d, index) => (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25 * index,
            }}
            className="rounded-lg border border-gray-100 bg-gray-50 bg-opacity-75 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-75"
            key={index}
          >
            <div className="flex flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-6">
              <div className="flex w-full flex-1 items-center justify-start">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${d.color}` }}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                    icon={d.icon}
                  />
                </div>
                <div className="min-w-0 flex-1 px-4">
                  <h1 className="text-lg font-bold text-gray-700 dark:text-white">
                    {d.name}
                  </h1>
                  <p className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    {d.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 inline-flex w-full items-center justify-end space-x-2 sm:mt-1 sm:w-auto">
                <a
                  className="default-transition default-focus relative inline-flex h-10 w-full justify-center rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white sm:w-10"
                  aria-label={`${d.name} homepage`}
                  href={d.homepage}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">{d.name} homepage</span>
                  <Icon
                    aria-hidden="true"
                    className="mt-1"
                    icon="feather:home"
                  />
                </a>
                {d.code && (
                  <button
                    className="default-transition default-focus relative inline-flex h-10 w-full justify-center rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white sm:w-10"
                    aria-label="Copy Referral Code"
                    onClick={() => {
                      writeText(d.code);
                      toast.success("Copied referral code");
                    }}
                  >
                    <span className="sr-only">Copy Referral Code</span>
                    <Icon
                      aria-hidden="true"
                      className="mt-1"
                      icon="feather:hash"
                    />
                  </button>
                )}

                <a
                  className="default-transition default-focus relative inline-flex h-10 w-full justify-center rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white sm:w-10"
                  aria-label="Referral Link"
                  href={d.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">Referral Link</span>
                  <Icon
                    aria-hidden="true"
                    className="mt-1"
                    icon="feather:external-link"
                  />
                </a>
              </div>
            </div>
            {d.bonus && (
              <div className="m-2 mt-0">
                <div
                  className="default-transition default-focus bg-opacity-15 flex w-full items-center justify-center rounded-lg bg-primary-500 bg-opacity-[.15] px-3 py-2 text-sm text-primary-500 saturate-200 filter backdrop-blur-sm backdrop-filter md:pb-2 lg:px-5"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon
                    aria-hidden="true"
                    className="mr-2"
                    icon="feather:award"
                  />
                  {d.bonus}
                </div>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </>
  );
}
