// app/components/Services.tsx
import { Code, Palette, Rocket } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full  min-h-[70vh] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-purple-500 mb-4">
          My <span className="text-purple-500">Services</span>
        </h2>
        <p className="text-lg text-white  mx-auto mb-12 text-sm">
          We provide cutting-edge solutions tailored to your needs. From design
          to development, we help you bring your ideas to life.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card */}
          <div className=" shadow-lg rounded-2xl p-8 hover:shadow-xl transition ">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6 ">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Web Development
            </h3>
            <p className="text-white">
              Custom websites and applications built with modern frameworks,
              scalable architecture, and pixel-perfect design.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-8 hover:shadow-xl transition ">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6 ">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Web Development
            </h3>
            <p className="text-white">
              Custom websites and applications built with modern frameworks,
              scalable architecture, and pixel-perfect design.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-8 hover:shadow-xl transition ">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6 ">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Web Development
            </h3>
            <p className="text-white">
              Custom websites and applications built with modern frameworks,
              scalable architecture, and pixel-perfect design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
