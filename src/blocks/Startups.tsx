// app/components/Startup.tsx
export default function Startups() {
  return (
    <section
      id="startup"
      className="w-full bg-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          🚀 Looking for Startups
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          I’m passionate about collaborating with entrepreneurs and visionaries
          to build <span className="font-semibold">innovative businesses</span>.
          Whether it’s tech, SaaS, or community-driven ideas, I’m always open to
          exploring opportunities that can create real impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Pitch Your Idea
          </button>
          <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
