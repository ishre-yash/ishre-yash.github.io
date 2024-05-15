import { useEffect } from "react";
import PageHeader from "../components/page-header";
import { ProjectsData } from "../data";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { GithubIcon, HomeIcon } from "lucide-react";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "ShreYash - Projects";
  }, []);
  return (
    <PageHeader
      title="My Work"
      description="Explore a curated collection of my digital creations. From web applications to coding experiments, this is where I bring ideas to life. Join me on a journey through my projects and discover the magic of technology in action."
    >
      <ul className="flex flex-col space-y-8 max-w-2xl">
        {ProjectsData.map((p, idx) => {
          return (
            <div className="group" key={idx}>
              <li
                className="overflow-hidden rounded-lg border bg-background/15 backdrop-blur transition duration-200 ease-in-out group-hover:-translate-y-1 group-hover:backdrop-blur-md group-hover:shadow-lg"
                draggable="true"
              >
                {p.img && (
                  <img
                    className="h-fit w-full rounded-t-lg "
                    src={p.img}
                    alt={p.title}
                  />
                )}

                <div className="flex flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-6">
                  <div className="flex w-full flex-1 items-start justify-start">
                    <img
                      className="mt-2 h-10 w-10 rounded-full"
                      src={p.logo}
                      alt={p.title}
                    ></img>
                    <div className="min-w-0 flex-1 px-4">
                      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
                        {p.title}
                      </h1>
                      <p className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
                        {" "}
                        {p.description.split("\n").map((item, key) => {
                          return (
                            <span key={key}>
                              {item}
                              <br />
                              <br />
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex w-full items-center justify-end space-x-2 sm:mt-1 sm:w-auto sm:flex-col sm:gap-4 sm:space-x-0">
                    {p.url && (
                      <a
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                          }),
                          "w-full sm:w-auto backdrop-blur bg-background/15 border"
                        )}
                        aria-label={`${p.title} homepage`}
                        href={p.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">{p.title} homepage</span>
                        <HomeIcon size={12} />
                      </a>
                    )}
                    {p.git && (
                      <a
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                          }),
                          "w-full sm:w-auto backdrop-blur bg-background/15 border"
                        )}
                        aria-label="GitHub Repository"
                        href={p.git}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <GithubIcon size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </PageHeader>
  );
}
