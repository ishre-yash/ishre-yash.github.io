import { useEffect, useRef } from "react";
import { differenceInYears } from "date-fns";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Typed from "typed.js";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const el = useRef(null);
  const today = new Date();
  const birthday = new Date("2005-03-12");
  const age = differenceInYears(today, birthday);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Developer",
        "UX Designer",
        "Python",
        "Next.js",
        "Android Dev",
        "DevOps",
        "Typescript",
      ],
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

  const button = [
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
  ];

  return (
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="z-50"
    >
      <div className="relative flex min-h-screen items-center justify-center py-12 px-8">
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
            <div className="mt-4 inline-flex rounded-2xl bg-primary/15 px-3 py-2 text-primary backdrop-blur-sm md:pb-4 lg:px-5">
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
                      className={buttonVariants({
                        variant: "outline",
                      })}
                    >
                      {data.icon}

                      <span>{data.text}</span>
                    </Link>
                  ) : (
                    <a
                      href={data.href}
                      className={buttonVariants({
                        variant: "outline",
                      })}
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
      </div>
    </motion.main >
  );
}
