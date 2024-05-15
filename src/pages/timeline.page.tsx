import { useEffect } from "react";
import PageHeader from "../components/page-header";
import { TimelinesData } from "@/data"
import {
  CalendarIcon,
  ExternalLink,
  PencilRulerIcon,
  ServerCogIcon,
  SmartphoneIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TimelinePage() {

  useEffect(() => {
    document.title = "ShreYash - Timeline";
  }, []);

  return (
    <>
      <PageHeader title="My Journey"
        description="Step into my world and travel through time. This timeline captures the milestones, experiences, and adventures that have shaped my journey in the tech universe. From my earliest coding endeavors to my latest achievements, let's embark on this chronological adventure together."
      >
        <section className="grid md:grid-cols-3 gap-8 items-center justify-center mb-8">
          <section className="p-4 md:p-8 border-2 rounded-md bg-background/20 backdrop-blur h-full transition duration-200 ease-in-out hover:-translate-y-1">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-primary/20 backdrop-blur p-2 w-12 h-12">
                <ServerCogIcon size={24} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold ml-2">
                {new Date().getFullYear() - 2021}
              </h2>
            </div>

            <p className="text-center text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
              Years of experience in Full Stack Development.
            </p>
          </section>
          <section className="p-4 md:p-8 border-2 rounded-md bg-background/20 backdrop-blur h-full transition duration-200 ease-in-out hover:-translate-y-1">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-primary/20 backdrop-blur p-2 w-12 h-12">
                <PencilRulerIcon size={24} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold ml-2">
                {new Date().getFullYear() - 2021}
              </h2>
            </div>

            <p className="text-center text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
              Years of experience in Design and UI/UX.
            </p>
          </section>
          <section className="p-4 md:p-8 border-2 rounded-md bg-background/20 backdrop-blur h-full transition duration-200 ease-in-out hover:-translate-y-1">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-primary/20 backdrop-blur p-2 w-12 h-12">
                <SmartphoneIcon size={24} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold ml-2">
                {new Date().getFullYear() - 2022}
              </h2>
            </div>

            <p className="text-center text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
              Years of experience in Mobile Development.
            </p>
          </section>
        </section>
        <ul className="max-w-2xl">
          {TimelinesData.map((t, i) => (
            <li className="my-1 group" key={i}>
              <div className="relative pb-8">
                {i !== TimelinesData.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-1 left-1/2 -ml-px h-full w-0.5 bg-border"
                  />
                )}

                <div className="relative flex items-center space-x-3 rounded-lg border-2 bg-background/20 px-2 py-3 backdrop-blur  transition duration-200 ease-in-out group-hover:-translate-y-1  group-hover:backdrop-blur-md group-hover:shadow-lg">
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
                          "gap-2 w-full sm:w-auto backdrop-blur bg-background/20 border mb-2"
                        )}
                      >
                        <CalendarIcon size={16} />
                        {t.date}
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
                          "gap-2 backdrop-blur bg-background/20 border"
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
            </li>
          ))}
        </ul>
      </PageHeader>
    </>
  );
}
