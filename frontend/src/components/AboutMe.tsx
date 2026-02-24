import { useState } from "react";

export const AboutMe = () => {
  const [showInfo, setShowInfo] = useState(false); // ✅ State for toggle

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left - Character Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="../assets/About.png"
              alt="About Character"
              className="w-[70%] md:w-[80%] lg:w-[90%] max-w-[420px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
              About Me
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl">
              I'm a passionate full-stack developer focused on building
              modern, scalable, and AI-powered web applications. I love
              crafting smooth user experiences with clean architecture
              and powerful backend systems.
            </p>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-10 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-xs text-slate-500 mt-1">Education</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-xs text-slate-500 mt-1">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:opacity-90 transition shadow-lg shadow-indigo-900/40"
            >
              {showInfo ? "Hide Details" : "Learn More"}
            </button>

            {/* Info Section */}
            {showInfo && (
              <div className="box-container mt-6">
                <div className="box  text-slate-500 p-6 rounded-lg shadow-md inline-block text-left">
                  <p><span className="text-purple-600 font-semibold">Birthday:</span> 6 April 2004</p>
                  <p><span className="text-purple-600 font-semibold">Age:</span> 21</p>
                  <p><span className="text-purple-600 font-semibold">Degree:</span> B.Tech in Computer</p>
                  <p><span className="text-purple-600 font-semibold">Phone:</span> +91 9588431009</p>
                  <p><span className="text-purple-600 font-semibold">Email:</span> asthapitambarwale21@gmail.com</p>
                  <p><span className="text-purple-600 font-semibold">Place:</span> Ahmednagar, Maharashtra, India</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
