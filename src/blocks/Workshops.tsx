// app/components/Workshops.tsx
import { Calendar, ArrowRight } from "lucide-react";

// We'll add a 'theme' object to each session to manage colors dynamically.
const sessions = [
  {
    title: "Startup 101",
    date: "Sept 30, 2025",
    desc: "Learn the basics of building, validating, and launching your startup idea from the ground up.",
    theme: {
      iconBg: "bg-indigo-100",
      iconText: "text-indigo-600",
      dateText: "text-indigo-600",
    },
  },
  {
    title: "Tech for Business",
    date: "Oct 15, 2025",
    desc: "Discover how to leverage modern software to scale and automate your small business effectively.",
    theme: {
      iconBg: "bg-rose-100",
      iconText: "text-rose-600",
      dateText: "text-rose-600",
    },
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="w-full bg-white py-24 px-6 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Workshops & Sessions
        </h2>
        <p className="text-lg text-slate-600 py-5 mx-auto mb-16">
          Join our upcoming sessions designed to empower entrepreneurs,
          developers, and business owners with the skills to grow and innovate.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {sessions.map((s, i) => (
            <a
              key={i}
              href="#"
              className="group text-left p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${s.theme.iconBg} ${s.theme.iconText}`}
                >
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className={`text-sm font-semibold ${s.theme.dateText}`}>
                    {s.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">{s.desc}</p>

              {/* Footer Link */}
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold transition-all duration-300">
                Register Now
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
