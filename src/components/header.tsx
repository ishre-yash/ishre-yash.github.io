import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import useMyStore from "../store";
import {
  CircleCheckBigIcon,
  MenuIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
  MonitorIcon,
  CircleIcon,
  Volume1Icon,
  VolumeXIcon,
  ImageIcon,
  GithubIcon,
  LinkIcon,
  TwitterIcon,
  HomeIcon,
  ClockIcon,
  CopyIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const NavLinkStyles =
  "flex cursor-pointer items-center px-4 py-3 text-sm font-medium tracking-wide hover:bg-secondary hover:text-primary";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="mx-auto px-2 py-4 flex items-center justify-between">
        <MainMenu />
        <SettingsMenu />
      </div>
    </nav>
  );
}

function MainMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = [
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
  ];
  const social = [
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
  ];
  return (
    <div className="relative inline-block text-left ">
      <Button variant="outline" onClick={() => setOpenMenu(!openMenu)}>
        <MenuIcon className="size-5" />
      </Button>
      {openMenu && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}

      <div
        className={`transition ease-in-out z-10  ${
          openMenu
            ? "scale-100 transform opacity-100 "
            : "scale-0 transform opacity-0"
        }`}
      >
        <div
          className="absolute left-0 mt-2 w-[calc(100vw-1rem)] origin-top-left divide-y divide-input border-input rounded-md border bg-secondary/25 shadow-lg backdrop-blur backdrop-filter sm:w-56"
          role="menu"
        >
          <div>
            {menu.map((m) => {
              return (
                <Link
                  key={m.text}
                  to={m.href}
                  onClick={() => setOpenMenu(!openMenu)}
                  className={NavLinkStyles}
                  role="menuitem"
                >
                  {m.icon}
                  {m.text}
                </Link>
              );
            })}
          </div>
          <div>
            {social.map((s) => {
              return (
                <a
                  key={s.text}
                  className={NavLinkStyles}
                  onClick={() => setOpenMenu(!openMenu)}
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
  );
}

function SettingsMenu() {
  const { isAnimation, setIsAnimation, isSound, setIsSound } = useMyStore();
  const { theme, setTheme } = useTheme();
  const [cookies, setCookies] = useState(true);
  const [settings, setSettings] = useState(false);

  return (
    <section className="relative inline-block text-left z-0">
      <Button
        variant="outline"
        className="z-0 group"
        onClick={() => setSettings(!settings)}
      >
        <SettingsIcon className="size-5 group-hover:animate-spin" />
      </Button>
      {settings && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setSettings(!settings)}
        />
      )}
      <nav
        className={`transition ease-in-out z-10 ${
          settings
            ? " scale-100 transform  opacity-100"
            : "scale-0 transform opacity-0"
        }`}
      >
        <div className="absolute right-0 mt-2 w-[calc(100vw-1rem)] origin-top-right divide-y divide-input border-input rounded-md border bg-secondary/25 shadow-lg backdrop-blur backdrop-filter sm:w-56">
          <div>
            <div
              onClick={() => {
                setIsAnimation(!isAnimation);
                setSettings(!settings);
              }}
              className={NavLinkStyles}
              role="menuitem"
            >
              <ImageIcon className="mr-3 h-5 w-5" />
              Animations {isAnimation ? "on" : "off"}
              <span className="flex-1"></span>
              {isAnimation ? (
                <>
                  <CircleCheckBigIcon className=" ml-3 h-4 w-4" />
                </>
              ) : (
                <CircleIcon className="ml-3 h-4 w-4" />
              )}
            </div>
            <div
              onClick={() => {
                setIsSound(!isSound);
                setSettings(!settings);
              }}
              className={NavLinkStyles}
              role="menuitem"
            >
              {isSound ? (
                <Volume1Icon className="mr-3 h-5 w-5" />
              ) : (
                <VolumeXIcon className="mr-3 h-5 w-5" />
              )}
              Sound {isSound ? "on" : "off"}
              <span className="flex-1"></span>
              {isSound ? (
                <>
                  <CircleCheckBigIcon className=" ml-3 h-4 w-4" />
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
              className={NavLinkStyles}
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
                  <CircleCheckBigIcon className=" ml-3 h-4 w-4" />
                </>
              ) : (
                <CircleIcon className="ml-3 h-4 w-4" />
              )}
            </div>

            <hr className="border-input" />
            <div
              onClick={() => {
                setTheme("system");
                setSettings(!settings);
              }}
              className={NavLinkStyles}
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
              className={NavLinkStyles}
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
              className={NavLinkStyles}
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
      </nav>
    </section>
  );
}
