// app/components/Community.tsx
export default function Community() {
  return (
    <section
      id="community"
      className="w-full bg-gray-50 min-h-[70vh] flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/6146822/pexels-photo-6146822.jpeg" // replace with your actual image
            alt="Community illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🌍 Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            We’re building a{" "}
            <span className="font-semibold text-blue-600">community</span> of
            entrepreneurs, developers, and creators — a space to{" "}
            <span className="font-semibold text-purple-600">learn</span>,{" "}
            <span className="font-semibold text-green-600">share</span>, and{" "}
            <span className="font-semibold text-pink-600">grow</span> together.
          </p>

          <div>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
