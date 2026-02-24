import { Instagram, Github, Linkedin, Youtube, Download, Mail } from "lucide-react";
import { useState } from "react";
import AIChat from "./AIChat";

export const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const socialLinks = [
    { Icon: Instagram, url: "https://www.instagram.com/pitamberwale.astha" },
    { Icon: Github, url: "https://github.com/AsthaPitambarwale" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/astha-pitambarwale-a32028316/" },
    { Icon: Youtube, url: "https://www.youtube.com/channel/yourchannel" },
  ];

  return (
    <section
      id="home"
      className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3 mb-8">
              {socialLinks.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Astha Pitambarwale
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Full Stack Developer specializing in React, TypeScript, Tailwindcss, Python, Node.js and AI integrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* Primary Button */}
              <a
                href="https://drive.google.com/file/d/14q4tdw2I_XqQ5RlfU1nzPEEY7VKhwypW/view?usp=drive_link"
                download="Astha_Pitambarwale_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-lg shadow-indigo-900/30"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              {/* Secondary Button */}
              <button
                onClick={() => setChatOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 text-sm font-medium rounded-full hover:border-indigo-500 hover:text-indigo-400 transition-all"
              >
                <Mail className="w-4 h-4" />
                Ask My AI Agent
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <div className="relative w-full flex justify-center md:justify-start">
              <img
                src="../assets/Hero.png"
                alt="3D Developer Character"
                className="w-[75%] md:w-[85%] lg:w-[95%] max-w-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  );
};
