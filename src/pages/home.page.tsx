import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { ClockIcon } from "lucide-react";
import { CopyIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import Header from "../components/header";
import { differenceInYears } from "date-fns";

export default function HomePage() {
  const el = useRef(null);
  const today = new Date();
  const birthday = new Date("2005-03-12");
  const age = differenceInYears(today, birthday);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Android Dev", "DevOps"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: "",
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    document.title = "Shre Yash - Software Engineer";
  }, []);

  const button = [
    {
      href: "/timeline",
      icon: <ClockIcon className="mr-3 size-4" />,
      text: "Timeline",
    },
    {
      href: "/projects",
      icon: <CopyIcon className="mr-3 size-4" />,
      text: "Projects",
    },
    {
      external: true,
      href: "https://github.com/ishre-yash",
      icon: <GithubIcon className="mr-3 size-4" />,
      text: "GitHub",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <main className="relative flex min-h-screen items-center justify-center py-12 px-8">
        <section className="w-full max-w-md space-y-8 text-center sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-4xl">
          <motion.h1
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-6xl lg:text-8xl"
          >
            Hey I&apos;m Shre Yash,
            <br className="hidden sm:block" />
            a&nbsp;
            <br className="block md:hidden" />
            <div className="mt-4 inline-flex rounded-2xl bg-primary/15 px-3 py-2 text-primary backdrop-blur md:pb-4 lg:px-5">
              <div ref={el}></div>&nbsp;
            </div>
          </motion.h1>
          <motion.p
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-4 max-w-xs text-base text-muted-foreground sm:text-lg md:mt-8 md:max-w-3xl md:text-xl"
          >
            I am a {age} year old software engineer &amp; designer.
          </motion.p>
          <div className="mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:mt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            {button.map((data, index) => {
              return (
                <motion.div
                  key={data.text}
                  initial={{ scale: 0.75, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 2) + 0.5 }}
                  className="w-full sm:w-auto"
                >
                  {!data.external ? (
                    <Link
                      to={data.href}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                        }),
                        "w-full sm:w-auto"
                      )}
                    >
                      {data.icon}

                      <span>{data.text}</span>
                    </Link>
                  ) : (
                    <a
                      href={data.href}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                        }),
                        "w-full sm:w-auto"
                      )}
                      rel="noopener noreferrer"
                    >
                      {data.icon}

                      <span>{data.text}</span>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
