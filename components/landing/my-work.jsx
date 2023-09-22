import React from "react";
import ProjectBox from "../project-box";
import fs from "fs";
import { getProjects } from "@/lib/api";

function MyWork() {
  const projects = getProjects();

  return (
    <section id="my-work" className="w-full py-10">
      <div className="w-full py-4 px-responsive mb-2">
        {/* <p className="px-3 py-0.5 text-sm bg-purple-200 text-purple-600 inline-flex rounded-full font-medium mb-1.5">Trayectory</p> */}
        <h2 className="text-white text-4xl font-semibold uppercase">My Work</h2>
      </div>
      <div className="grid grid-cols-3 bg-projects-pattern">
        {projects.map((project, i) => (
          <ProjectBox project={JSON.stringify(project)} key={i} />
        ))}
      </div>
    </section>
  );
}

export default MyWork;
