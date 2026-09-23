import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Jaishree<span className="text-teal-400">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-400">
              Forensic Investigator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* Email */}
            <a
              href="mailto:jaishreesharma2934@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-teal-500 hover:text-white"
            >
              <Mail size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jaishree-sharma-a0b36133b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-teal-500 hover:text-white"
            >
              <span className="text-sm font-bold">
                in
              </span>
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-teal-500 hover:text-white"
            >
              <ArrowUp size={18} />
            </a>

          </div>

        </div>

        <div className="my-8 h-px bg-slate-800" />

        <div className="text-center text-sm text-slate-500">
          © 2026 Jaishree Sharma. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;