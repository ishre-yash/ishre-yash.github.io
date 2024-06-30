import React, { useState, useEffect } from "react";
import useMyStore from "../store";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";

const CookiesDialog = () => {
  const { setIsCookie } = useMyStore();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const storedCookie = localStorage.getItem("cookieAccepted");
    if (!storedCookie) {
      setShowDialog(true);
      setIsCookie(false);
    } else {
      setIsCookie(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowDialog(false);
    setIsCookie(true);
  };

  return (
    <React.Fragment>
      {showDialog && (
        <section className="fixed bottom-4 right-4 left-4 sm:left-auto z-50">
          <div className="mx-auto p-8 bg-background/15 backdrop-blur rounded-2xl border max-w-lg text-center">
            <Icons.logo className="w-32 h-32 mx-auto rounded-full -mt-24" />
            <Typography variant="h2" className="mt-4">
              Cookies
            </Typography>
            <Typography variant="lead" className="!mt-2 text-base">
              We use cookies to improve your experience on our website.
            </Typography>

            <div className="mt-6">
              <Button
                onClick={acceptCookies}
                variant="secondary"
                className="w-full"
              >
                Accept cookies
              </Button>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default CookiesDialog;
