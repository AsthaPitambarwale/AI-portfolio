import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            Let’s discuss your next project or AI idea.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2">

          {/* Left - Character */}
          <div className="flex-1 flex justify-center md:justify-center items-center">
            <img
              src="../assets/Contact.png"
              alt="Contact Character"
              className="w-[85%] md:w-[85%] lg:w-[95%] max-w-[450px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right - Form */}
          <div className="flex-1 w-full max-w-lg">
            <form className="space-y-5 bg-slate-950/70 backdrop-blur-md p-8 rounded-2xl border border-slate-800">

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-900/30"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
