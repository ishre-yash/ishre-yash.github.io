import React from "react";

export default function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>

    <main className="z-50 py-10 flex flex-col items-center justify-center container pt-20 bg-background/15 backdrop-blur">
      <div className="max-w-sm  mx-auto mb-12 border rounded-2xl bg-background/15 backdrop-blur py-8 px-6 md:max-w-4xl">
        <h2
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl glitch mx-auto w-fit"
          data-glitch={title}
        >
          {title}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          {description}
        </p>
      </div>
      {children}
    </main>
    </>
  );
}
