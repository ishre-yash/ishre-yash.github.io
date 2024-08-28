import { useEffect } from "react";
import PageHeader from "../components/page-header";
import { TimelinesData } from "../data";
import {
  CalendarIcon,
  ExternalLink,
  PencilRulerIcon,
  ServerCogIcon,
  SmartphoneIcon,
} from "lucide-react";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import formatDate, { calculateExperience } from "../lib/format-date";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function TimelinePage() {
  useEffect(() => {
    document.title = "ShreYash - Timeline";
  }, []);

  return (
    <PageHeader title="Timeline">
      <motion.section
        className="grid md:grid-cols-3 gap-8 items-center justify-center mb-8 max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className="p-4 md:p-8 border rounded-2xl bg-background/15 backdrop-blur h-full transition duration-200 ease-in-out hover:-translate-y-1"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary/20 backdrop-blur p-2 w-12 h-12">
              <ServerCogIcon size={24} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold ml-2">
              {calculateExperience(new Date(2022, 1, 16))}
            </h2>
          </div>

          <p className="text-center text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
            Years of experience in Full Stack Development.
          </p>
        </motion.section>
        <motion.section
          className="p-4 md:p-8 border rounded-2xl bg-background/15 backdrop-blur h-full transition duration-200 ease-in-out hover:-translate-y-1"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary/20 backdrop-blur p-2 w-12 h-12">
              <PencilRulerIcon size={24} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold ml-2">
              {calculateExperience(new Date(2021, 9, 1))}
            </h2>
          </div>

          <p className="text-center text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
            Years of experience in Design and UI/UX.
          </p>
        </motion.section>
        <motion.section
          className="p-4 md:p-8 border rounded-2xl bg-background/15 backdrop-blur h-full transition duration-200 ease-in-out hover:-translate-y-1"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary/20 backdrop-blur p-2 w-12 h-12">
              <SmartphoneIcon size={24} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold ml-2">
              {calculateExperience(new Date(2023, 3, 16))}
            </h2>
          </div>

          <p className="text-center text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
            Years of experience in Mobile Development.
          </p>
        </motion.section>
      </motion.section>
      <motion.ul
        className="max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {TimelinesData.map((t, i) => (
          <motion.li className="my-1 group" key={i} variants={fadeInUp}>
            <div className="relative pb-8">
              {i !== TimelinesData.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-1/2 -ml-px h-full w-0.5 bg-border"
                />
              )}

              <div className="relative flex items-center space-x-3 rounded-2xl border bg-background px-2 py-3  transition duration-200 ease-in-out group-hover:-translate-y-1  group-hover:backdrop-blur-md group-hover:shadow-lg">
                <div className="relative mx-2 flex h-12 w-12  items-center justify-center rounded-full bg-primary/20 backdrop-blur px-1">
                  {t.icon}
                </div>

                <div className="flex-1">
                  <h3 className="flex flex-wrap justify-between scroll-m-20 text-xl font-bold tracking-tight gap-2 sm:gap-0">
                    <span>{t.title}</span>
                    <span className="flex-1 sm:hidden" />
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "secondary",
                          size: "sm",
                        }),
                        "gap-2 w-full sm:w-auto border mb-2"
                      )}
                    >
                      <CalendarIcon size={16} />
                      {formatDate(t.date, "MM/dd/yyyy", "long")}
                    </div>
                  </h3>
                  <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mb-2">
                    {t.description}
                  </p>

                  {t.link && (
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "sm",
                        }),
                        "gap-2 backdrop-blur bg-background/15 border"
                      )}
                      href={t.link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t.link.text}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </PageHeader>
  );
}
