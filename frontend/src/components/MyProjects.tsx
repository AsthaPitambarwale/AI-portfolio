import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiDjango,
  SiNextdotjs,
  SiLaravel,
  SiChartdotjs,
  SiOpenai,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  type: "Full Stack" | "Frontend" | "Backend";
}

const techIcons: Record<string, any> = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  MySQL: SiMysql,
  Django: SiDjango,
  "Next.js": SiNextdotjs,
  Laravel: SiLaravel,
  "Chart.js": SiChartdotjs,
  "OpenAI API": SiOpenai,
  HTML: SiHtml5,
  CSS: SiCss3,
};

// ✅ Declare projects array **above** MyProjects
const projects: Project[] = [
  // ... all your project objects here
];

export const MyProjects = () => {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Frontend" | "Backend">("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = 
    filter === "All"
      ? projects
      : projects.filter((p: Project) => p.type === filter);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-slate-950/70 backdrop-blur-lg rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-2xl">
      {/* Card content */}
    </div>
  );

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      {/* Heading + Filters */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.slice(0, 6).map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Modal */}
      {showAll && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
