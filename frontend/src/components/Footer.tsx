import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { Icon: Github, url: "https://github.com/AsthaPitambarwale" },
  { Icon: Linkedin, url: "https://www.linkedin.com/in/astha-pitambarwale-a32028316/" },
  { Icon: Twitter, url: "https://twitter.com/Astha_Pitambarwale" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">
              Frontend & Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-slate-500">
              © 2026 Made with <span className="text-indigo-400">❤</span> by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-medium">
                Astha Pitambarwale
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};