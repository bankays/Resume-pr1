import Link from "next/link";

async function getProjects() {
  const res = await fetch("http://localhost:8000/projects", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Projects() {
  const t = await getProjects();
  return (
    <div className="projects">
      {t.map((project) => (
        <div className="project" key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
