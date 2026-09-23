import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-5 pt-24 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Jaishree
            <span className="block text-teal-400">
              Sharma
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Forensic Investigator
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Aspiring forensic professional with experience in crime scene
            investigation, digital forensics, and evidence analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Explore My Experience
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-teal-400 hover:text-teal-400"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            <div className="absolute inset-0 scale-110 rounded-full border border-teal-400/20" />

            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-teal-400/30 shadow-2xl sm:h-80 sm:w-80">
              <img
                src="/profile.jpg"
                alt="Jaishree Sharma"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;