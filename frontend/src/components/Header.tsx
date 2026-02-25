
import { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-5 z-50 bg-slate-950/80 backdrop-blur-m">
      <div
        className={`max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 border border-purple-800 ${isMenuOpen ? "rounded-2xl" : "rounded-full md:rounded-full rounded-2xl"} transition-all duration-300`}>
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-lg">
              Astha's Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="#home"
              className="px-4 py-1.5 text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
            >
              Home
            </a>

            <a
              href="#about"
              className="px-4 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              className="px-4 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="px-4 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#certificates"
              className="px-4 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Certificates
            </a>

            <a
              href="#contact"
              className="px-4 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-indigo-400 transition-colors">
              <Moon className="w-4 h-4" />
            </button>

            <button
              className="md:hidden p-2 text-slate-400 hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              {["home", "about", "skills", "projects", "certificates", "contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-all"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
