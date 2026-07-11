import {
  Instagram,
  Github,
  Linkedin,
  Youtube,
  Download,
  Mail,
} from "lucide-react";
import { useState } from "react";
import AIChat from "./AIChat";

export const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const socialLinks = [
    {
      Icon: Instagram,
      url: "https://www.instagram.com/pitamberwale.astha",
    },
    {
      Icon: Github,
      url: "https://github.com/AsthaPitambarwale",
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/astha-pitambarwale-a32028316/",
    },
    {
      Icon: Youtube,
      url: "https://www.youtube.com/channel/yourchannel",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
    >
      {/* Animated Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-purple-600/20 blur-[140px] animate-pulse" />

        <div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[120px] animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center animate-float">
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl
                bg-slate-900/80 border border-slate-800
                text-slate-400
                hover:text-indigo-400
                hover:border-indigo-500
                hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
                hover:-translate-y-1
                transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            Available for Full Stack & AI Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              Astha Pitambarwale
            </span>
          </h1>

          {/* Animated Role */}
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-8">
            Full Stack Developer • AI Enthusiast • Problem Solver
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
            I craft modern web applications, scalable backend systems,
            and AI-powered solutions using React, TypeScript,
            Node.js, Python, and cloud technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="https://drive.google.com/file/d/1Jl3WdEbiEqgoGmdGUMoAMZrOirLkeanT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                px-8 py-4
                rounded-full
                font-semibold
                text-white
                bg-gradient-to-r
                from-purple-600
                via-indigo-600
                to-purple-600
                bg-[length:200%]
                animate-gradient
                shadow-[0_0_35px_rgba(99,102,241,0.45)]
                hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]
                hover:scale-105
                transition-all duration-300
              "
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>

            <button
              onClick={() => setChatOpen(true)}
              className="
                flex items-center justify-center gap-2
                px-8 py-4
                rounded-full
                border border-slate-700
                bg-slate-900/50
                text-slate-300
                hover:border-indigo-500
                hover:text-indigo-400
                hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                hover:scale-105
                transition-all duration-300
              "
            >
              <Mail className="w-5 h-5" />
              Ask My AI Agent
            </button>
          </div>
        </div>
      </div>

      <AIChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </section>
  );
};
