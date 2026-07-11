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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="text-center">

            {/* Social Icons */}
            <div className="flex justify-center gap-3 mb-8">
              {socialLinks.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Astha Pitambarwale
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
              Full Stack Developer specializing in React, TypeScript,
              Tailwind CSS, Python, Node.js, and AI integrations.
              <br />
              I build scalable web applications, intelligent AI-powered
              solutions, and modern user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1Jl3WdEbiEqgoGmdGUMoAMZrOirLkeanT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-900/30"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>

              <button
                onClick={() => setChatOpen(true)}
                className="flex items-center justify-center gap-2 px-7 py-3 border border-slate-700 rounded-full text-slate-300 hover:border-indigo-500 hover:text-indigo-400 transition-all"
              >
                <Mail className="w-5 h-5" />
                Ask My AI Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      <AIChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </section>
  );
};
