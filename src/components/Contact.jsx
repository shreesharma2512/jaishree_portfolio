import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-500" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Interested in connecting? Feel free to reach out through any
            of the channels below.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10"
          >
            <h3 className="text-2xl font-bold">
              Let's Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              For professional opportunities, collaborations, or
              conversations related to forensic science and digital
              forensics, you can reach me using the information below.
            </p>

            <div className="mt-8 space-y-6">

              {/* Email */}
              <a
                href="mailto:jaishreesharma2934@gmail.com"
                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-slate-200">
                    jaishreesharma2934@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919528862978"
                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    +91 9528862978
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Shamli, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jaishree-sharma-a0b36133b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <span className="text-lg font-bold">
                    in
                  </span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    View LinkedIn Profile
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
              <Send size={26} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Have an opportunity?
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you would like to discuss a professional opportunity,
              collaboration, or simply connect, I'd be happy to hear from you.
            </p>

            <a
              href="mailto:jaishreesharma2934@gmail.com"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Send an Email
              <Mail size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;