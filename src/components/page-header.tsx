import React from "react";
import { motion } from "framer-motion";
import { Typography } from "./ui/typography";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
      className="py-10 flex flex-col items-center justify-center container pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-sm mx-auto mb-12 border rounded-2xl bg-background/15 backdrop-blur py-8 px-6 md:max-w-4xl"
        variants={childVariants}
      >
        <Typography variant="h1" className="text-center">
          {title}
        </Typography>
        <Typography variant="p" className="text-center">
          {description}
        </Typography>
      </motion.div>
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.main>
  );
}
