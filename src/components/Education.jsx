import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Forensic Science",
      institution: "Geeta University",
      location: "Panipat",
      duration: "2024 – 2027",
    },
    {
      degree: "Higher Secondary – Science (PCB)",
      institution: "St. R.C. Convent School",
      location: "Shamli",
      duration: "2023 – 2024",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-50 px-5 py-24 lg:px-8"
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
            Academic Background
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Education
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            My academic journey in forensic science and science education.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
            >
              {/* Decorative element */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-50 transition-transform duration-300 group-hover:scale-150" />

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <GraduationCap size={28} />
              </div>

              {/* Degree */}
              <h3 className="relative text-xl font-bold leading-7 text-slate-900">
                {item.degree}
              </h3>

              {/* Institution */}
              <p className="relative mt-3 text-lg font-semibold text-teal-600">
                {item.institution}
              </p>

              {/* Details */}
              <div className="relative mt-6 space-y-3 text-sm text-slate-500">

                <div className="flex items-center gap-3">
                  <CalendarDays size={17} className="text-teal-600" />
                  <span>{item.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={17} className="text-teal-600" />
                  <span>{item.location}</span>
                </div>

              </div>

              {/* Bottom line */}
              <div className="relative mt-7 h-1 w-12 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;