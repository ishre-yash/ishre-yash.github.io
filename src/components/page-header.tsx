import { motion } from "framer-motion";
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
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="z-50 py-10 flex flex-col items-center justify-center container pt-20"
    >
      <div className="max-w-sm text-center mx-auto mb-12 border rounded-md bg-background/20 backdrop-blur py-8 px-6 md:max-w-4xl">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
          {title}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
      </div>
      {children}
    </motion.main>
  );
}
