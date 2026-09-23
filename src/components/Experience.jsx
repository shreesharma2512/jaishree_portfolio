import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  CalendarDays,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "Digital Forensics Intern",
      company: "RJ Forsec Solution",
      location: "Gurgaon",
      duration: "June 2026 – July 2026",
      description: [
        "Conducted digital evidence acquisition and analysis using FTK Imager and Autopsy.",
        "Assisted in data recovery, forensic examination, and evidence preservation.",
      ],
    },
    {
      role: "Crime Scene Investigator Trainee",
      company: "Tathya Forensic Wing Federation",
      location: "Noida",
      duration: "June 2025 – July 2025",
      description: [
        "Assisted in forensic case analysis and evidence handling.",
        "Contributed to fire and arson investigations, including sample collection.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            Professional Journey
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Experience
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Practical exposure gained through forensic investigation and
            digital forensics internships.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 sm:left-1/2 sm:block sm:-translate-x-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative mb-12 flex ${
                index % 2 === 0
                  ? "sm:justify-start"
                  : "sm:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-teal-500 text-white shadow-md sm:left-1/2 sm:flex">
                <Briefcase size={17} />
              </div>

              {/* Card */}
              <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:w-[45%]">

                <h3 className="text-xl font-bold text-slate-900">
                  {experience.role}
                </h3>

                <p className="mt-2 font-semibold text-teal-600">
                  {experience.company}
                </p>

                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {experience.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {experience.location}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {experience.description.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;