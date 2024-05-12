import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Profiles({ profile }) {
  return (
    <>
      <div className="relative mx-auto flex h-fit w-full justify-center overflow-hidden">
        <div className=" mx-auto h-28 w-28 rounded-full border-2 border-primary-500 bg-gray-200 p-1 motion-safe:animate-pulse dark:bg-gray-600 md:h-32 md:w-32" />
        <img
          className="absolute mx-auto h-28 w-28 rounded-full border-2 border-primary-500 p-1 md:h-32 md:w-32"
          loading="lazy"
          src={profile.img}
          alt={profile.name}
        />
      </div>

      <Profile profile={profile} />
      <Links profile={profile} />
      <Stats profile={profile} />
    </>
  );
}

export default Profiles;

function Profile({ profile }) {
  return (
    <>
      {profile.name ? (
        <>
          <h2 className="mx-auto mt-4 text-2xl font-black text-gray-700 dark:text-white sm:text-4xl">
            {profile.name}
          </h2>
          <h3 className="mx-auto text-sm font-semibold text-gray-500 dark:text-gray-200">
            {profile.title}
          </h3>
          <p className="mb-4 text-center text-xs font-medium text-gray-400 dark:text-gray-300">
            {profile.description}
          </p>
        </>
      ) : (
        <>
          <div className="mx-auto mt-4 h-6 w-[40%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600 md:h-10"></div>
          <div className="mx-auto mt-1 h-[14px] w-[50%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
          <div className="mt-1 h-3 w-[100%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
          <div className="mt-1 h-3 w-[100%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
          <div className="mt-1 h-3 w-[100%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
          <div className="mt-1 mb-4 h-3 w-[70%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
        </>
      )}
    </>
  );
}

function Links({ profile }) {
  return (
    <section className=" grid w-full grid-cols-2 items-center justify-center gap-4">
      <a
        href={profile.cv}
        title="Download CV"
        className="flex flex-row items-center justify-center gap-2 rounded-lg bg-primary-400 px-2 py-4 font-bold text-white hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-200"
      >
        Download CV
        <Icon className="my-auto h-5 w-5" icon="feather:download" />
      </a>

      <div className="item-center flex justify-center">
        {profile.icons ? (
          profile.icons?.map((i, index) => {
            return (
              <Link
                key={index}
                title={i.title}
                to={i.link}
                className="m-1 w-fit items-center justify-center rounded-lg bg-gray-200 p-4 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Icon
                  className="my-auto h-5 w-5 dark:text-gray-200"
                  icon={i.icon}
                />
              </Link>
            );
          })
        ) : (
          <>
            <div className="m-1 mb-4 h-12 w-[50px] rounded-lg  bg-gray-200  motion-safe:animate-pulse dark:bg-gray-600"></div>
            <div className="m-1 mb-4 h-12 w-[50px] rounded-lg  bg-gray-200  motion-safe:animate-pulse dark:bg-gray-600"></div>
            <div className="m-1 mb-4 h-12 w-[50px] rounded-lg  bg-gray-200  motion-safe:animate-pulse dark:bg-gray-600"></div>
          </>
        )}
      </div>
    </section>
  );
}

function Stats({ profile }) {
  return (
    <>
      <section className="mt-4 grid w-full grid-cols-3 gap-0.5 text-center sm:gap-4">
        {profile.stats ? (
          profile.stats?.map((s, index) => {
            return (
              <div
                key={index}
                className="flex w-full flex-col items-start sm:px-2"
              >
                <p className="text-xs font-semibold text-gray-400  line-clamp-1 dark:text-gray-300">
                  {s.title}
                </p>
                <div className="text-xl font-black text-gray-700 dark:text-gray-200">
                  {s.stats}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div>
              <div className=" h-3 w-[85%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
              <div className="mt-1 h-6 w-[25%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
            </div>
            <div>
              <div className=" h-3 w-[85%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
              <div className="mt-1 h-6 w-[25%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
            </div>
            <div>
              <div className=" h-3 w-[85%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
              <div className="mt-1 h-6 w-[25%] rounded  bg-gray-200 motion-safe:animate-pulse dark:bg-gray-600"></div>
            </div>
          </>
        )}
      </section>
      <h3 className="my-2 text-sm font-semibold text-gray-500 dark:text-gray-200">
        About Me:
      </h3>
      <p className="mb-4 text-left text-xs font-medium text-gray-400 dark:text-gray-300">
        {profile?.about?.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
              <br />
            </span>
          );
        })}
      </p>
    </>
  );
}
