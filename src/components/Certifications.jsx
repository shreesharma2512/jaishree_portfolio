import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

function Certifications() {
  const certification = {
    title: "Prompt Engineering for Everyone",
    organization: "IBM Skills Network",
    date: "March 2026",
    description:
      "Certified in Prompt Engineering, focused on designing effective AI prompts for better outputs.",
  };

  return (
    <section
      id="certifications"
      className="bg-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            Certifications
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Certifications & Achievements
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />
        </motion.div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl sm:p-10"
        >
          {/* Decorative circle */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-100/60 transition-transform duration-500 group-hover:scale-125" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center">

            {/* Certificate Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg">
              <Award size={40} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  {certification.title}
                </h3>

                <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                  <CheckCircle2 size={14} />
                  Certified
                </span>
              </div>

              <p className="mt-3 text-lg font-semibold text-teal-600">
                {certification.organization}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={17} className="text-teal-600" />
                {certification.date}
              </div>

              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                {certification.description}
              </p>
            </div>

            {/* Certificate Button */}
            <div className="shrink-0">
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-400"
                title="Certificate link not provided in resume"
              >
                Certificate
                <ExternalLink size={16} />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Note */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Certificate verification link can be added when available.
        </p>

      </div>
    </section>
  );
}

export default Certifications;