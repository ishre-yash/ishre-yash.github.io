import React, { useEffect } from "react";
import PageHeading from "../components/commen/PageHeading";
import StatusComponents from "../components/Status";

function Status({ setProgress }) {
  useEffect(() => {
    document.title = "ShreYash - Status 🔴";
  }, []);

  return (
    <>
      <main className="flex flex-col justify-center px-8">
        <section className="flex min-h-screen flex-grow pt-16 pb-12">
          <div className="mx-auto flex w-full max-w-sm flex-grow flex-col justify-start px-0 sm:max-w-2xl sm:px-16">
            <PageHeading title="Status" />
            <StatusComponents setProgress={setProgress} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Status;
