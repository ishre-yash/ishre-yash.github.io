import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Error from "../Modal";

function Index({ setProgress }) {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);

  const getAbout = async () => {
    setProgress(30);
    const options = { method: "GET" };
    fetch("https://ishre-yash.github.io/api/portfolio/about/", options)
      .then((response) => response.json())
      .then((response) => {
        setProgress(60);
        setProfile(response);
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
    getAbout();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Error />}
      <section className="flex h-fit w-full flex-col items-start justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 bg-opacity-75  px-4 py-16 backdrop-blur-sm backdrop-filter dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-75">
        <Profile profile={profile} />

        <section className="mt-8 grid w-full cursor-pointer grid-cols-1 gap-2 rounded-xl bg-gray-200 p-2 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
          <div className="rounded-xl bg-gray-100 p-3 text-center text-base font-semibold transition delay-100 duration-200 ease-in-out hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500">
            Skills
          </div>
        </section>

        <Skills profile={profile} />
      </section>
    </>
  );
}

export default Index;
