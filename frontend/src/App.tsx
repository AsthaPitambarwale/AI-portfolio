import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import MySkills from "./components/MySkills";
import { MyProjects } from './components/MyProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Certificates } from './components/Certificates';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Subtle Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}