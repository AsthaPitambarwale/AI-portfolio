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

// ... keep your projects array as-is ...

export const MyProjects = () => {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Frontend" | "Backend">("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-slate-950/70 backdrop-blur-lg rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-2xl">
      <div className="p-5">
        {/* Badge + Tech Icons */}
        <div className="flex items-center justify-between mb-4 gap-3">
          <span
            className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap
              ${project.type === "Full Stack"
                ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                : project.type === "Frontend"
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                : "bg-green-600/20 text-green-400 border border-green-500/30"
              }`}
          >
            {project.type}
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {project.tags.map((tag) => {
              const Icon = techIcons[tag];
              return Icon ? (
                <Icon
                  key={tag}
                  className="text-indigo-400 text-lg sm:text-xl md:text-2xl shrink-0 transition-transform hover:scale-110"
                />
              ) : null;
            })}
          </div>
        </div>

        <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
      </div>

      {/* Image Section */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col sm:flex-row items-center justify-center gap-3 p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              className="px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}

          <a
            href={project.codeLink}
            target="_blank"
            className="px-4 py-2 text-xs sm:text-sm border border-white text-white rounded-lg flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading + Filter */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <div className="flex justify-center gap-3 flex-wrap">
            {["All", "Full Stack", "Frontend", "Backend"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-4 py-2 rounded-full text-sm transition-all
                  ${filter === type
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-lg shadow-indigo-900/30"
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {showAll && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">All Projects</h2>
              <button
                onClick={() => setShowAll(false)}
                className="border px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
