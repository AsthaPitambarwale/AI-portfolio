import { motion } from "framer-motion";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiVite,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiDjango,
  SiPython,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
}

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PHP", icon: SiPhp },
  { name: "Django", icon: SiDjango },
  { name: "Python", icon: SiPython },
  { name: "Laravel", icon: SiLaravel },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "C++", icon: SiCplusplus },
];

const infiniteSkills = [...skills, ...skills];

export default function MySkills() {
  return (
    <section id="skills" className="py-28 bg-slate-950 text-white">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-slate-400 mt-4 text-sm tracking-wide">
          Technologies I use to build scalable modern applications.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full">

        <motion.div
          className="flex gap-12 w-max items-end"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {infiniteSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center group cursor-pointer px-4"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Tooltip */}
                <div
                  className="
                    absolute -top-10
                    px-3 py-1
                    text-xs font-medium
                    bg-slate-800 text-white
                    rounded-md
                    opacity-0 scale-90
                    group-hover:opacity-100
                    group-hover:scale-100
                    transition-all duration-300
                    whitespace-nowrap
                    pointer-events-none
                  "
                >
                  {skill.name}
                </div>

                {/* Icon Card */}
                <div
                  className="
                    w-24 h-24
                    flex items-center justify-center
                    bg-slate-900
                    rounded-3xl
                    border border-slate-800
                    shadow-xl
                    backdrop-blur-md
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:shadow-indigo-500/40
                  "
                >
                  <Icon className="text-4xl text-indigo-400" />
                </div>

                {/* Reflection */}
                <div
                  className="
                    w-24 h-24 mt-2
                    opacity-30 scale-y-[-1]
                    blur-sm flex items-center justify-center
                    pointer-events-none
                  "
                >
                  <Icon className="text-4xl text-indigo-400 opacity-40" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

      </div>
    </section>
  );
}