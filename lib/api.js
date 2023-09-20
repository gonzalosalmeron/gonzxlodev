import fs from "fs";
import matter from "gray-matter";

const projectsDirectory = "_projects";

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug) {
  const fullPath = `${projectsDirectory}/${slug}`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const project = matter(fileContents);

  return project;
}

export function getProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

  return projects;
}
