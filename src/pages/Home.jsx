import React, { useState, useEffect, useRef } from "react";
import { differenceInYears } from "date-fns";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Typed from "typed.js";

export default function Home({ setProgress }) {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="z-50"
      >
        <Hero />
      </motion.div>
    </>
  );
}

function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Developer",
        "UX Designer",
        "Python",
        "Next.js",
        "Android Dev",
        "DevOps",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: "",
      loopCount: Infinity,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  const [button] = useState([
    {
      href: "/about",
      icon: <Icon className="mr-3" icon="feather:user" />,
      text: "About",
    },
    {
      href: "/projects",
      icon: <Icon className="mr-3" icon="feather:copy" />,
      text: "Projects",
    },
    {
      external: true,
      href: "https://github.com/ishre-yash",
      icon: <Icon className="mr-3" icon="feather:github" />,
      text: "GitHub",
    },
  ]);
  const today = new Date();
  const birthday = new Date("2004-03-12");
  const age = differenceInYears(today, birthday);
  // const isBirthday =
  //   today.getDate() === birthday.getDate() &&
  //   today.getMonth() === birthday.getMonth();
  return (
    <>
      <main className="flex flex-col justify-center px-8">
        <div className="relative flex min-h-screen items-center justify-center py-12">
          <div className="w-full max-w-md space-y-8 text-center sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-4xl">
            <motion.h1
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-6xl md:text-6xl lg:text-8xl"
            >
              Hey I'm Shre Yash,
              <br className="hidden sm:block" />
              a&nbsp;
              <br className="block md:hidden" />
              <div className="default-transition default-focus mt-4 inline-flex rounded-2xl bg-primary-500 bg-opacity-[.15] px-3 py-2 text-primary-200 saturate-200 filter backdrop-blur-sm backdrop-filter md:pb-4 lg:px-5">
                <div ref={el}></div>&nbsp;
              </div>
            </motion.h1>
            <motion.p
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-4 max-w-xs text-base text-gray-300 sm:text-lg md:mt-8 md:max-w-3xl md:text-xl"
            >
              I am a {age} year old software engineer &amp; designer.
            </motion.p>
            <div className="mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:mt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              {button.map((b, index) => {
                return (
                  <motion.div
                    key={b.text}
                    initial={{ scale: 0.75, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 2) + 0.5 }}
                    className="w-full sm:w-auto"
                  >
                    {!b.external ? (
                      <Link
                        to={b.href}
                        className="default-transition default-focus inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 bg-opacity-75 px-8 py-2 font-medium text-gray-400 saturate-200 backdrop-blur-sm backdrop-filter hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-75 dark:text-primary-500 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 dark:hover:text-primary-400 sm:w-auto"
                        rel="noopener noreferrer"
                      >
                        {b.icon}

                        <span>{b.text}</span>
                      </Link>
                    ) : (
                      <a
                        href={b.href}
                        className="default-transition default-focus inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 bg-opacity-75 px-8 py-2 font-medium text-gray-400 saturate-200 backdrop-blur-sm backdrop-filter hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-75 dark:text-primary-500 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 dark:hover:text-primary-400 sm:w-auto"
                        rel="noopener noreferrer"
                      >
                        {b.icon}

                        <span>{b.text}</span>
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
