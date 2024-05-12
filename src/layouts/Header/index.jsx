import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { MenuIcon } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import { MonitorIcon } from "lucide-react";
import { CircleIcon } from "lucide-react";
import { CircleCheckBigIcon } from "lucide-react";
import { Volume1Icon } from "lucide-react";
import { VolumeXIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { LinkIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { ClockIcon } from "lucide-react";
import { CopyIcon } from "lucide-react";

function Index({ showAnimation, setShowAnimation, useSound, setUseSound }) {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState(false);
  const [cookies, setCookies] = useState(true);

  function openMenu() {
    if (settings) {
      setSettings(!settings);
      setShow(!show);
    } else {
      setShow(!show);
    }
  }
  function openSettings() {
    if (show) {
      setShow(!show);
      setSettings(!settings);
    } else {
      setSettings(!settings);
    }
  }
  const [menu] = useState([
    {
      href: "/",
      icon: <HomeIcon className="mr-3 h-5 w-5" />,
      text: "Home",
    },
    {
      href: "/projects",
      icon: <CopyIcon className="mr-3 h-5 w-5" />,
      text: "Projects",
    },
    {
      href: "/timeline",
      icon: <ClockIcon className="mr-3 h-5 w-5" />,
      text: "Timeline",
    },
    {
      href: "/referrals",
      icon: <LinkIcon className="mr-3 h-5 w-5" />,
      text: "Referrals",
    },
  ]);
  const [social] = useState([
    {
      href: "https://twitter.com/ishre_yash",
      icon: <TwitterIcon className="mr-3 h-5 w-5" />,
      text: "Twitter",
      iconLink: <LinkIcon className="mr-3 h-5 w-5" />,
    },
    {
      href: "https://github.com/ishre-yash",
      icon: <GithubIcon className="mr-3 h-5 w-5" />,
      text: "GitHub",
      iconLink: <LinkIcon className="mr-3 h-5 w-5" />,
    },
  ]);
  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="mx-auto px-2">
        <div className="relative flex h-16 items-center justify-between">
          <div className="relative inline-block text-left">
            <button
              onClick={openMenu}
              className="default-transition default-focus group relative inline-flex items-center rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-label="Menu"
              type="button"
            >
              <MenuIcon
                className=" my-1 h-4 w-4 fill-current"
              />
            </button>
            <div
              className={`transition ease-in-out  ${show
                ? "scale-100 transform opacity-100 "
                : "scale-0 transform opacity-0"
                }`}
            >
              <div
                className="absolute left-0 mt-2 w-[calc(100vw-1rem)] origin-top-left divide-y divide-gray-100 rounded-md border border-gray-100 bg-gray-50 bg-opacity-75 shadow-lg backdrop-blur-sm backdrop-filter focus:outline-none dark:divide-gray-500 dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-75 sm:w-56"
                role="menu"
              >
                <div className="py-2">
                  {menu.map((m) => {
                    return (
                      <Link
                        key={m.text}
                        to={m.href}
                        onClick={() => setShow(!show)}
                        className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                        role="menuitem"
                      >
                        {m.icon}
                        {m.text}
                      </Link>
                    );
                  })}
                </div>
                <div className="py-2" role="none">
                  {social.map((s) => {
                    return (
                      <a
                        key={s.text}
                        className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setShow(!show)}
                        href={s.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        role="menuitem"
                      >
                        {s.icon}
                        {s.text}
                        <span className="flex-1"></span>
                        {s.iconLink}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={openSettings}
              className="default-transition default-focus group relative inline-flex items-center rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-label="Settings"
              type="button"
            >
              <SettingsIcon className=" my-1 h-4 w-4" />
            </button>
            <div
              className={`transition ease-in-out ${settings
                ? " scale-100 transform  opacity-100"
                : "scale-0 transform opacity-0"
                }`}
            >
              <div
                className="absolute right-0 mt-2 w-[calc(100vw-1rem)] origin-top-right divide-y divide-gray-100 rounded-md border border-gray-100 bg-gray-50 bg-opacity-75 shadow-lg backdrop-blur-sm backdrop-filter focus:outline-none dark:divide-gray-500 dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-75 sm:w-56"
                role="menu"
              >
                <div className="py-2">
                  <div
                    onClick={() => {
                      setShowAnimation(!showAnimation);
                      setSettings(!settings);
                    }}
                    className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                    role="menuitem"
                  >
                    <ImageIcon className="mr-3 h-5 w-5" />
                    Animations {showAnimation ? "on" : "off"}
                    <span className="flex-1"></span>
                    {showAnimation ? (
                      <>
                        <CircleCheckBigIcon
                          className=" ml-3 h-4 w-4"
                          icon="feather:check-circle"
                        />
                      </>
                    ) : (
                      <CircleIcon className="ml-3 h-4 w-4" />
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setUseSound(!useSound);
                      setSettings(!settings);
                    }}
                    className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                    role="menuitem"
                  >
                    {useSound ? (
                      <Volume1Icon className="mr-3 h-5 w-5" />
                    ) : (
                      <VolumeXIcon className="mr-3 h-5 w-5" />
                    )}
                    Sound {useSound ? "on" : "off"}
                    <span className="flex-1"></span>
                    {useSound ? (
                      <>
                        <CircleCheckBigIcon
                          className=" ml-3 h-4 w-4"
                          icon="feather:check-circle"
                        />
                      </>
                    ) : (
                      <CircleIcon className="ml-3 h-4 w-4" />
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setCookies(!cookies);
                      setSettings(!settings);
                    }}
                    className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-5 w-5"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm3-12a8 8 0 1 0 7.87 6.56a.5.5 0 0 0-.867-.24A2 2 0 0 1 13.5 7a.562.562 0 0 0-.44-.548a2 2 0 0 1-.954-3.386a.5.5 0 0 0-.232-.845A8.02 8.02 0 0 0 10 2Zm-7 8a7 7 0 0 1 7.871-6.946a3 3 0 0 0 1.647 4.282a3 3 0 0 0 4.471 2.269A7 7 0 1 1 3 10Z"
                      ></path>
                    </svg>
                    Cookies
                    <span className="flex-1"></span>
                    {cookies ? (
                      <>
                        <CircleCheckBigIcon
                          className=" ml-3 h-4 w-4"
                          icon="feather:check-circle"
                        />
                      </>
                    ) : (
                      <CircleIcon className="ml-3 h-4 w-4" />
                    )}
                  </div>

                  <hr className="mt-2 border-gray-100 pb-2 dark:border-gray-500" />
                  <div
                    onClick={() => {
                      setTheme("system");
                      setSettings(!settings);
                    }}
                    className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                    role="menuitem"
                  >
                    <MonitorIcon className="mr-3 h-5 w-5" />
                    System Theme
                    {theme === "system" ? (
                      <>
                        <span className="flex-1"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify iconify--feather ml-3 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </g>
                        </svg>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setTheme("light");
                      setSettings(!settings);
                    }}
                    className="default-transition group flex cursor-pointer items-center bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                    role="menuitem"
                  >
                    <SunIcon className="mr-3 h-5 w-5" />
                    Light Theme
                    {theme === "light" ? (
                      <>
                        <span className="flex-1"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify iconify--feather ml-3 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </g>
                        </svg>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setTheme("dark");
                      setSettings(!settings);
                    }}
                    className="default-transition group flex cursor-pointer items-center  bg-opacity-[50] px-4 py-3 text-sm font-medium tracking-wide text-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                    role="menuitem"
                  >
                    <MoonIcon className="mr-3 h-5 w-5" />
                    Dark Theme{" "}
                    {theme === "dark" ? (
                      <>
                        <span className="flex-1"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify iconify--feather ml-3 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </g>
                        </svg>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Index;
