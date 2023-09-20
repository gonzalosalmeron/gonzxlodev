import React from "react";
import ProjectBox from "../project-box";
import fs from "fs";
import { getProjects } from "@/lib/api";

function MyWork() {
  const projects = getProjects();

  return (
    <section id="my-work" className="w-full grid grid-cols-3 bg-projects-pattern">
      {projects.map((project, i) => (
        <ProjectBox project={JSON.stringify(project)} key={i} />
      ))}
    </section>
  );
}

export default MyWork;
