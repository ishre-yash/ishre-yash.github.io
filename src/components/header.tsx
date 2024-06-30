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
  CookieIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const NavLinkStyles =
  "flex cursor-pointer items-center px-4 py-3 text-sm font-medium tracking-wide hover:bg-secondary";

const menuItems = [
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

const socialLinks = [
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

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto px-2 py-4 flex items-center justify-between">
        <MainMenu />
        <SettingsMenu />
      </div>
    </nav>
  );
};

const MainMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <Button variant="outline" onClick={() => setOpenMenu(!openMenu)}>
        <MenuIcon className="size-5" />
      </Button>
      {openMenu && (
        <div className="fixed inset-0 z-0" onClick={() => setOpenMenu(false)} />
      )}
      <div
        className={`transition ease-in-out z-10 ${
          openMenu
            ? "scale-100 transform opacity-100"
            : "scale-0 transform opacity-0"
        }`}
      >
        <div className="absolute left-0 mt-2 w-[calc(100vw-1rem)] origin-top-left divide-y divide-input border-input rounded-md border bg-secondary/25 shadow-lg backdrop-blur backdrop-filter sm:w-56">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.href}
              onClick={() => setOpenMenu(false)}
              className={NavLinkStyles}
              role="menuitem"
            >
              {item.icon}
              {item.text}
            </Link>
          ))}
          <div>
            {socialLinks.map((link) => (
              <a
                key={link.text}
                className={NavLinkStyles}
                onClick={() => setOpenMenu(false)}
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                role="menuitem"
              >
                {link.icon}
                {link.text}
                <span className="flex-1"></span>
                {link.iconLink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsMenu: React.FC = () => {
  const {
    isAnimation,
    setIsAnimation,
    isSound,
    setIsSound,
    isCookie,
    setIsCookie,
  } = useMyStore();
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState(false);

  const handleCookiesChange = () => {
    if (isCookie) {
      localStorage.removeItem("cookieAccepted");
      setIsCookie(false);
    } else {
      localStorage.setItem("cookieAccepted", "true");
      setIsCookie(true);
    }
    setSettings(false);
  };

  return (
    <section className="relative inline-block text-left">
      <Button
        variant="outline"
        className="group"
        onClick={() => setSettings(!settings)}
      >
        <SettingsIcon className="size-5 group-hover:animate-spin" />
      </Button>
      {settings && (
        <div className="fixed inset-0 z-0" onClick={() => setSettings(false)} />
      )}
      <nav
        className={`transition ease-in-out z-10 ${
          settings
            ? "scale-100 transform opacity-100"
            : "scale-0 transform opacity-0"
        }`}
      >
        <div className="absolute right-0 mt-2 w-[calc(100vw-1rem)] origin-top-right divide-y divide-input border-input rounded-md border bg-secondary/25 shadow-lg backdrop-blur backdrop-filter sm:w-56">
          <div>
            <SettingsMenuItem
              onClick={() => {
                setIsAnimation(!isAnimation);
                setSettings(false);
              }}
              icon={<ImageIcon className="mr-3 h-5 w-5" />}
              text={`Animations ${isAnimation ? "on" : "off"}`}
              checked={isAnimation}
            />
            <SettingsMenuItem
              onClick={() => {
                setIsSound(!isSound);
                setSettings(false);
              }}
              icon={
                isSound ? (
                  <Volume1Icon className="mr-3 h-5 w-5" />
                ) : (
                  <VolumeXIcon className="mr-3 h-5 w-5" />
                )
              }
              text={`Sound ${isSound ? "on" : "off"}`}
              checked={isSound}
            />
            <SettingsMenuItem
              onClick={handleCookiesChange}
              icon={<CookieIcon className="mr-3 h-5 w-5" />}
              text="Cookies"
              checked={isCookie}
            />
          </div>
          <hr className="border-input" />
          <SettingsMenuItem
            onClick={() => {
              setTheme("system");
              setSettings(false);
            }}
            icon={<MonitorIcon className="mr-3 h-5 w-5" />}
            text="System Theme"
            checked={theme === "system"}
          />
          <SettingsMenuItem
            onClick={() => {
              setTheme("light");
              setSettings(false);
            }}
            icon={<SunIcon className="mr-3 h-5 w-5" />}
            text="Light Theme"
            checked={theme === "light"}
          />
          <SettingsMenuItem
            onClick={() => {
              setTheme("dark");
              setSettings(false);
            }}
            icon={<MoonIcon className="mr-3 h-5 w-5" />}
            text="Dark Theme"
            checked={theme === "dark"}
          />
        </div>
      </nav>
    </section>
  );
};

interface SettingsMenuItemProps {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  checked: boolean;
}

const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({
  onClick,
  icon,
  text,
  checked,
}) => (
  <div onClick={onClick} className={NavLinkStyles} role="menuitem">
    {icon}
    {text}
    <span className="flex-1"></span>
    {checked ? (
      <CircleCheckBigIcon className="ml-3 h-4 w-4" />
    ) : (
      <CircleIcon className="ml-3 h-4 w-4" />
    )}
  </div>
);

export default Header;
