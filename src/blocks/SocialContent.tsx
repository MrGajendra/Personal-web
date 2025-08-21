// app/components/SocialContent.tsx
export default function SocialContent() {
  const socials = [
    {
      name: "YouTube",
      icon: "🎥",
      desc: "Cinematic videos on tech, business, and productivity.",
      link: "#",
    },
    {
      name: "Twitter",
      icon: "🐦",
      desc: "Quick insights, threads, and real-time thoughts on startups & IT.",
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      desc: "Professional posts, case studies, and networking opportunities.",
      link: "#",
    },
  ];

  return (
    <section
      id="social"
      className="w-full bg-white py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Social Presence
        </h2>
        <p className="text-lg text-gray-600 mb-12 py-5 mx-auto">
          I regularly share content on technology, business, and IT services.
          Follow me on these platforms for insights, updates, and engaging
          discussions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 w-full sm:w-72 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {s.name}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
