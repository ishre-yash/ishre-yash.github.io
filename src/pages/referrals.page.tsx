import { useEffect } from "react";
import { motion } from "framer-motion";
import { ReferralsData } from "../data";
import PageHeader from "../components/page-header";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { AwardIcon, ExternalLinkIcon, HashIcon, HomeIcon } from "lucide-react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ReferralsPage() {
  useEffect(() => {
    document.title = "ShreYash - Referrals";
  }, []);

  return (
    <PageHeader
      title="Referrals & Partnerships"
      description="Discover what my colleagues, clients, and collaborators have to say about working with me. These recommendations and referrals provide valuable insights into the quality of my work and the strong partnerships I've forged. Join me in celebrating the trust and appreciation that have fueled my journey in the tech world."
    >
      <motion.ul
        className="space-y-8 max-w-2xl w-full"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {ReferralsData.map((d, idx) => (
          <motion.li
            className="rounded-lg border bg-background/15 backdrop-blur transition duration-300 ease-in-out"
            key={idx}
            variants={itemVariants}
          >
            <div className="flex flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-6">
              <div className="flex w-full flex-1 items-center justify-start">
                <img
                  src={d.icon}
                  alt={d.name}
                  className="h-12 w-12 rounded-full bg-cover"
                />
                <div className="min-w-0 flex-1 px-4">
                  <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {d.name}
                  </h1>
                  <p className="mt-1 flex items-center text-muted-foreground">
                    {d.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 inline-flex w-full items-center justify-end space-x-2 sm:mt-1 sm:w-auto">
                <a
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "w-full sm:w-auto backdrop-blur bg-background/15 border"
                  )}
                  aria-label={`${d.name} homepage`}
                  href={d.homepage}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">{d.name} homepage</span>
                  <HomeIcon size={12} />
                </a>
                {d.code && (
                  <button
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                      }),
                      "w-full sm:w-auto backdrop-blur bg-background/15 border"
                    )}
                    aria-label="Copy Referral Code"
                  >
                    <span className="sr-only">Copy Referral Code</span>
                    <HashIcon size={12} />
                  </button>
                )}
                {d.url && (
                  <a
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                      }),
                      "w-full sm:w-auto backdrop-blur bg-background/15 border"
                    )}
                    href={d.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">Referral Link</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                )}
              </div>
            </div>
            {d.bonus && (
              <div className="m-2 mt-0">
                <div
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "w-full backdrop-blur bg-background/15 border gap-2"
                  )}
                >
                  <AwardIcon size={16} />
                  {d.bonus}
                </div>
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </PageHeader>
  );
}
