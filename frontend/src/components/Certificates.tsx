import { useRef } from "react";
import { Download } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";

interface Certificate {
  title: string;
  organisation: string;
  file: string;
  gradient: string;
}

const certificates: Certificate[] = [
  {
    title: "Fundamentals of Python",
    organisation: "Infosys",
    file: "cert1",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "HTML, CSS & JavaScript",
    organisation: "Hunorho",
    file: "cert2",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    title: "Guide Campus Interviews",
    organisation: "NPTEL",
    file: "cert3",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "FullStack Development",
    organisation: "CodeAlpha",
    file: "cert4",
    gradient: "from-red-500 to-purple-700",
  },
  {
    title: "AI Agent Architecture",
    organisation: "IBM",
    file: "cert5",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    title: "FullStack Web Development",
    organisation: "Edureka",
    file: "cert6",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Aptitude Test",
    organisation: "CipherByte Technologies",
    file: "cert7",
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    title: "IOT-4U Webinar Certificate",
    organisation: "College Webinar",
    file: "cert8",
    gradient: "from-amber-400 to-orange-600",
  },
];

export const Certificates = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 0.2;

  // Infinite auto scroll
  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return;

    const width = containerRef.current.scrollWidth / 2;
    let newX = x.get() - speed * delta;

    if (Math.abs(newX) >= width) {
      newX = 0;
    }

    x.set(newX);
  });

  return (
    <section id="certificates" className="py-20 bg-slate-950">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
        My Certificates & Achievements
      </h2>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          dragElastic={0.1} // smoother dragging
          className="flex gap-8 w-max cursor-grab active:cursor-grabbing px-6"
        >
          {/* Duplicate certificates for infinite scroll */}
          {[...certificates, ...certificates].map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${cert.gradient} relative`}>
                <FaReact className="absolute top-6 left-6 text-white/20 text-3xl animate-pulse" />
                <FaHtml5 className="absolute bottom-6 left-10 text-white/20 text-2xl animate-bounce" />
                <FaCss3Alt className="absolute top-5 right-8 text-white/20 text-3xl animate-pulse" />
                <FaNodeJs className="absolute bottom-5 right-10 text-white/20 text-2xl animate-bounce" />
                <FaJsSquare className="absolute top-10 left-1/2 -translate-x-1/2 text-white/20 text-2xl animate-pulse" />

                <div className="absolute left-1/2 -bottom-10 -translate-x-1/2">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Download className="w-8 h-8 text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[40px]">
                  {cert.title}
                </h3>

                <h4 className="text-lg text-gray-800 mb-2 min-h-[40px]">
                  {cert.organisation}
                </h4>

                <a
                  href={`/assets/certificates/${cert.file}.pdf`}
                  download
                  className={`block w-full py-2 rounded-full text-white font-medium bg-gradient-to-r ${cert.gradient} hover:opacity-90 transition`}
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
