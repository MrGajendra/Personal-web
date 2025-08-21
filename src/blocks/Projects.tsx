// app/components/Projects.tsx
export default function Projects() {
  const projects = [
    {
      title: "Digital Menu SaaS",
      description:
        "A Next.js SaaS platform for restaurants to create and share digital menus with QR codes.",
      tag: "SaaS",
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "POS System",
      description:
        "Point of Sale software for small businesses to manage billing, inventory, and reports.",
      tag: "Business",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Tutor Booking App",
      description:
        "A MERN stack app for online tutor booking with scheduling and payments.",
      tag: "Education",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-white py-20 px-6 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🚀 My Projects
        </h2>
        <p className="text-lg text-gray-600 mb-12 py-3 mx-auto text-center">
          A showcase of ideas, experiments, and products where I combine{" "}
          <span className="font-semibold text-blue-600">business</span>,{" "}
          <span className="font-semibold text-pink-600">technology</span>, and{" "}
          <span className="font-semibold text-green-600">creativity</span>.
        </p>

        {/* Project Cards - only 3 and centered */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white p-[2px] rounded-2xl shadow hover:shadow-xl transition h-full"
            >
              <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-full">
                {/* Tag */}
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full mb-4 bg-gradient-to-r ${project.color}`}
                >
                  {project.tag}
                </span>

                {/* Title + Description */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Link */}
                <a
                  href="#"
                  className="mt-auto text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
