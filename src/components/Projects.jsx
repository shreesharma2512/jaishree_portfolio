import { motion } from "framer-motion";
import {
  Fingerprint,
  Flame,
  HardDrive,
  Microscope,
} from "lucide-react";

function Projects() {
  const areas = [
    {
      title: "Digital Evidence Analysis",
      description:
        "Practical exposure to digital evidence acquisition and analysis using forensic investigation tools.",
      icon: HardDrive,
    },
    {
      title: "Crime Scene Investigation",
      description:
        "Exposure to forensic case analysis and evidence handling in investigative environments.",
      icon: Fingerprint,
    },
    {
      title: "Fire & Arson Investigation",
      description:
        "Experience supporting fire and arson investigations, including forensic sample collection.",
      icon: Flame,
    },
    {
      title: "Forensic Examination",
      description:
        "Knowledge of forensic examination techniques including fingerprint analysis and microscopy.",
      icon: Microscope,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            Practical Exposure
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Areas of Expertise
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Areas of forensic investigation and examination supported by
            academic learning and internship experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-6 text-slate-500">
          These represent areas of practical exposure and forensic experience,
          rather than independent projects.
        </p>

      </div>
    </section>
  );
}

export default Projects;