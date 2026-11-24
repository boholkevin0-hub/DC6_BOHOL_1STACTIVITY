
export const metadata = {
  title: "Projects | Kevin Bohol",
};

const projects = [
  {
    id: 1,
    name: "Student Document Request System",
    description: "A system for students to request school documents.",
  },
  {
    id: 2,
    name: "Streaming Content Management System",
    description: "A website for managing movies and streaming content.",
  },
  {
    id: 3,
    name: "Personal Portfolio",
    description: "A personal website introducing myself and my projects.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
