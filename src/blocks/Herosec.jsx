// app/components/Hero.tsx
export default function Herosec() {
  return (
    <section className="relative w-full bg-gray-50">
      {/* Container */}
      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-24 lg:py-32 gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Hey, I’m{" "}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Gajendra Kumar
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            A <span className="font-semibold text-gray-800">developer</span>{" "}
            building modern, user-friendly web applications. I turn ideas into
            reality with{" "}
            <span className="font-semibold text-gray-900">clean code</span> and{" "}
            <span className="font-semibold text-gray-900">
              creative solutions
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <button className="px-6 md:px-8 py-3 rounded-full bg-gray-900 text-white font-semibold text-base md:text-lg shadow hover:bg-gray-800 transition-colors duration-300">
              🚀 Get in Touch
            </button>
            <button className="px-6 md:px-8 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors duration-300">
              📂 View Projects
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg"
            alt="Gajendra Kumar - Developer"
            width={400}
            height={100}
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
