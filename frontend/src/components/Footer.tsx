import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Instagram,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Github,
    url: "https://github.com/AsthaPitambarwale",
    label: "GitHub",
  },
  {
    Icon: Linkedin,
    url: "https://www.linkedin.com/in/astha-pitambarwale-a32028316/",
    label: "LinkedIn",
  },
  {
    Icon: Instagram,
    url: "https://www.instagram.com/pitamberwale.astha",
    label: "Instagram",
  },
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
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[250px] bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Astha Pitambarwale
            </span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-7">
            Full Stack Developer passionate about building scalable web
            applications, AI-powered products, and exceptional digital
            experiences.
          </p>

          {/* Email */}
          <a
            href="mailto:your.email@gmail.com"
            className="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:text-purple-400 transition"
          >
            <Mail className="w-5 h-5" />
            asthapitambarwale@gmail.com
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-indigo-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-10">
          {socialLinks.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                w-11 h-11
                rounded-xl
                border border-slate-800
                bg-slate-900
                flex items-center justify-center
                text-slate-400
                hover:text-white
                hover:border-indigo-500
                hover:bg-indigo-600
                hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Astha Pitambarwale. All rights
            reserved.
          </p>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with
            <span className="text-red-500 text-base">❤</span>
            using React & Tailwind CSS
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="
              w-11 h-11
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              flex items-center justify-center
              hover:scale-110
              hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]
              transition-all duration-300
            "
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};
