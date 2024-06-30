import React from "react";
import { Typography } from "./ui/typography";

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
    <main className="py-10 flex flex-col items-center justify-center container pt-20 z-50">
      <div className="max-w-sm  mx-auto mb-12 border rounded-2xl bg-background/15 backdrop-blur py-8 px-6 md:max-w-4xl">
        <Typography variant="h1" className="text-center">
          {title}
        </Typography>

        <Typography variant="p" className="text-center">
          {description}
        </Typography>
      </div>
      {children}
    </main>
  );
}
