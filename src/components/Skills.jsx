import { motion } from "framer-motion";
import {
  Search,
  Flame,
  Fingerprint,
  Microscope,
  Laptop,
  BarChart3,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      title: "Crime Scene Investigation",
      description:
        "Understanding of crime scene investigation procedures and forensic case analysis.",
      icon: Search,
    },
    {
      title: "Fire & Arson",
      description:
        "Exposure to fire and arson investigations, including forensic sample collection.",
      icon: Flame,
    },
    {
      title: "Fingerprint Analysis",
      description:
        "Knowledge of fingerprint examination as part of forensic investigation.",
      icon: Fingerprint,
    },
    {
      title: "Microscopy Techniques",
      description:
        "Knowledge of microscopy techniques used in forensic examination.",
      icon: Microscope,
    },
    {
      title: "Digital Forensic Tools",
      description:
        "Practical exposure to FTK Imager and Autopsy for digital evidence acquisition and analysis.",
      icon: Laptop,
    },
    {
      title: "Data Analytics in Python",
      description:
        "Knowledge of using Python for data analytics and analytical problem-solving.",
      icon: BarChart3,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-50 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Skills & Expertise
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            A combination of forensic investigation knowledge, practical
            exposure, digital forensic tools, and analytical skills.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {skill.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;