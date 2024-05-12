import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Loading from "./Loading.component";
import Error from "./Error.component";
import { Fragment } from "react";

function Index({ setProgress }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getStatus = async () => {
    const options = { method: "GET" };

    fetch("https://ishre-yash.github.io/api/portfolio/status/", options)
      .then((response) => response.json())
      .then((response) => {
        setProgress(60);
        setTimeout(() => {
          setLoading(false);
          setData(response);
          setProgress(100);
        }, 250);
      })
      .catch((err) => {
        setError(true);
        setProgress(100);
      });
  };

  useEffect(() => {
    getStatus();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Error />}
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-auto flex w-full max-w-sm flex-col space-y-5 rounded-lg border-2 border-gray-200 bg-white bg-opacity-50 px-4 py-4 backdrop-blur-sm backdrop-filter hover:shadow-lg dark:border-gray-600 dark:bg-gray-900">
          {data.map((d, index) => {
            return (
              <Fragment key={index}>
                <div className="inline-flex items-center">
                  <a
                    className="default-transition default-focus rounded"
                    href={d.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="pointer-events-none my-auto max-h-12 max-w-md select-none rounded ring-2 ring-gray-200 dark:ring-gray-500">
                      {!d.icon ? (
                        <img
                          alt={d.title}
                          className="max-h-12 w-full rounded"
                          height={48}
                          src={d.url}
                          width={48}
                        />
                      ) : (
                        <Icon
                          className="h-12 w-12 p-1 text-gray-200 dark:text-gray-400"
                          icon={d.url}
                        />
                      )}
                    </div>
                  </a>

                  <div className="ml-4 flex-1">
                    {!d.icon ? (
                      <>
                        <h1 className="overflow-ellipsis text-base font-extrabold tracking-wide text-gray-900 line-clamp-1 dark:text-white">
                          {d.title}
                        </h1>
                        <p className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
                          {d.description}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="mt-0 mb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
                          {d.description}
                        </p>
                        <h1 className="overflow-ellipsis text-base font-extrabold tracking-wide text-gray-900 line-clamp-1 dark:text-white">
                          {d.title}
                        </h1>
                      </>
                    )}
                  </div>

                  {!d.icon ? (
                    <span className="relative mr-3 inline-flex h-5 w-5 items-center justify-center">
                      <span className="absolute flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#f87171] opacity-75 motion-safe:animate-ping"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ef4444]" />
                      </span>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                {index + 1 !== d.length && (
                  <hr className="h-0.5 rounded-full border-none bg-gray-100 dark:bg-gray-600" />
                )}
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Index;
