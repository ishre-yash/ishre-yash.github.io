import React, { useEffect } from "react";
import Main from "../components/commen/MainSection";
import Project from "../components/Project";
import PageHeading from "../components/commen/PageHeading";

function Projects({ setProgress }) {
  useEffect(() => {
    document.title = "ShreYash - Projects";
  }, []);
  return (
    <>
      <Main>
        <PageHeading title="Projects" />
        <Project setProgress={setProgress} />
      </Main>
    </>
  );
}

export default Projects;
