// app/components/Services.tsx
import { Code, Palette, Rocket } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-gray-50 min-h-[70vh] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          🚀 Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-lg text-gray-600  mx-auto mb-12">
          We provide cutting-edge solutions tailored to your needs. From design
          to development, we help you bring your ideas to life.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition ">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6 ">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Web Development
            </h3>
            <p className="text-gray-600">
              Custom websites and applications built with modern frameworks,
              scalable architecture, and pixel-perfect design.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mx-auto mb-6">
              <Palette className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Beautiful, user-friendly, and intuitive designs to give your
              product a modern, professional look.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
              <Rocket className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Startup Solutions
            </h3>
            <p className="text-gray-600">
              End-to-end solutions for startups: branding, MVP development, and
              scaling strategies to launch your ideas faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
