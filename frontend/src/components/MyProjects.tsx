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

// Tech icon mapping
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

// Filters with proper literal types
const filters: ("All" | "Full Stack" | "Frontend" | "Backend")[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
];

// All project objects
const projects: Project[] = [
  {
    id: 1,
    title: "Astha's Cakes",
    image: "../assets/projects/asthas-cake.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "https://astha-s-cakkes.vercel.app/",
    codeLink: "https://github.com/AsthaPitambarwale/Astha-s-Cakkes",
    type: "Full Stack",
  },
  {
    id: 2,
    title: "AI Article Processing System",
    image: "../assets/projects/AI-Enhanced-Article.png",
    tags: ["React", "Node.js", "Laravel"],
    demoLink: "#",
    codeLink:
      "https://github.com/AsthaPitambarwale/AI-Enhanced-Article-Processing-System",
    type: "Full Stack",
  },
  {
    id: 3,
    title: "Real Estate AI Chatbot",
    image: "../assets/projects/realestate-chatbot.png",
    tags: ["Django", "OpenAI API", "React", "Tailwind CSS", "Chart.js"],
    demoLink: "https://realestate-chatbot-sigma.vercel.app/",
    codeLink:
      "https://github.com/AsthaPitambarwale/Realestate_chatbot",
    type: "Full Stack",
  },
  {
    id: 4,
    title: "Ticket Booking Backend",
    image: "../assets/projects/ticket-booking.png",
    tags: ["Node.js", "Express.js", "MongoDB"],
    demoLink: "https://ticket-booking-backend-ow9x.onrender.com",
    codeLink:
      "https://github.com/AsthaPitambarwale/Ticket_booking_backend",
    type: "Backend",
  },
  {
    id: 5,
    title: "Cancer Donation Dashboard",
    image: "../assets/projects/Cancer-donation dashboard.png",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    demoLink: "https://cancer-donation-dashboard.vercel.app/",
    codeLink:
      "https://github.com/AsthaPitambarwale/Cancer-Donation-Dashboard",
    type: "Frontend",
  },
  {
    id: 6,
    title: "Therapy Practice Website",
    image: "../assets/Projects/Therapy.png",
    tags: ["Next.js", "React", "CSS"],
    demoLink: "https://elegant-capybara-7c06f7.netlify.app/",
    codeLink:
      "https://github.com/AsthaPitambarwale/grow-my-therapy",
    type: "Frontend",
  },
   {
    id: 7,
    title: "Kilangi Jewellery – Homepage",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "../assets/projects/Kalingi-Jwellery.png",
    demoLink: "http://kilangi-jewellery.vercel.app",
    codeLink: "https://github.com/AsthaPitambarwale/Kilangi-Jewellery",
    type: "Frontend",
  },
  {
    id: 8,
    title: "BudgetBuddy",
    image: "../assets/projects/budgetbuddy-landing.png",
    tags: ["React", "Tailwind CSS", "Local Storage"],
    demoLink: "https://budget-tracker-landing-orcin.vercel.app/",
    codeLink: "https://github.com/AsthaPitambarwale/budget-tracker-landing",
    type: "Frontend",
  },
  {
    id: 9,
    title: "Grocery Store Website",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    image: "../assets/projects/grocery-store.png",
    demoLink: "https://asthapitambarwale.github.io/FMGS-grocery-store/",
    codeLink: "https://github.com/AsthaPitambarwale/FMGS-grocery-store",
    type: "Full Stack",
  },
  {
    id: 10,
    title: "NGO Charity Website",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "../assets/projects/leelashankar-ngo.png",
    demoLink: "https://leela-shankar-foundation-mi443v58e-asthapitambarwales-projects.vercel.app/",
    codeLink: "https://github.com/AsthaPitambarwale/LeelaShankarFoundation",
    type: "Frontend"
  },
  {
    id: 11,
    title: "Lost and Found Portal",
    tags: ["HTML", "CSS", "JavaScript", "Flask", "Python"],
    image: "../assets/projects/l&f.png",
    demoLink: "",
    codeLink: "https://github.com/AsthaPitambarwale/Lost-FoundApplication",
    type: "Full Stack",
  },
  {
    id: 12,
    title: "Vishal Bharti School Website",
    tags: ["HTML", "CSS"],
    image: "../assets/projects/vishal-bharti.png",
    demoLink: "https://vishal-bharti-ac-in.vercel.app/",
    codeLink: "https://github.com/AsthaPitambarwale/VishalBharti.ac.in",
    type: "Frontend",
  },
  {
    id: 13,
    title: "Fitness Gym Website",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "../assets/projects/gym.png",
    demoLink: "https://asthapitambarwale.github.io/AshFitness/",
    codeLink: "https://github.com/AsthaPitambarwale/AshFitness",
    type: "Frontend",
  },
   {
    id: 14,
    title: "Pizza Restaurant Website",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "../assets/projects/pizza.png",
    demoLink: "https://asthapitambarwale.github.io/FoodyHILLS/",
    codeLink: "https://github.com/AsthaPitambarwale/FoodyHILLS",
    type: "Frontend",
  }
];

export const MyProjects = () => {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
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
              }
            `}
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
          <a
            href={project.demoLink}
            target="_blank"
            className="px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>

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
            {filters.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
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
              <h2 className="text-2xl sm:text-3xl font-bold">
                All Projects
              </h2>
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
