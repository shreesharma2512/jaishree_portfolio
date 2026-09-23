import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Microscope,
  Brain,
} from "lucide-react";

function About() {
  const highlights = [
    {
      icon: Search,
      title: "Crime Scene Investigation",
      description:
        "Experience in forensic case analysis, evidence handling, and crime scene investigation.",
    },
    {
      icon: ShieldCheck,
      title: "Digital Forensics",
      description:
        "Hands-on exposure to digital evidence acquisition, analysis, recovery, and preservation.",
    },
    {
      icon: Microscope,
      title: "Evidence Analysis",
      description:
        "Knowledge of forensic methodologies, fingerprint analysis, and microscopy techniques.",
    },
    {
      icon: Brain,
      title: "Analytical Approach",
      description:
        "Strong attention to detail, analytical problem-solving, and ethical responsibility.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white px-5 py-24 lg:px-8"
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Behind the Investigation
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Aspiring Forensic Professional
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              I am an aspiring forensic professional with experience in
              crime scene investigation, digital forensics, and evidence
              analysis.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              I have developed practical exposure to forensic methodologies
              and digital investigation tools while working in investigative
              environments. My approach is built around careful evidence
              handling, attention to detail, analytical problem-solving,
              and ethical responsibility.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">
                  Field
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  Forensic Science
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">
                  Focus
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  Digital Forensics
                </p>
              </div>

            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;