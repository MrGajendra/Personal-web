// app/components/About.tsx
export default function About() {
  return (
    <section id="about" className="w-full  py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg"
            alt="About us"
            className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are passionate about helping businesses and individuals thrive in
            the digital age. Our mission is to provide simple, impactful, and
            scalable solutions that empower people to achieve their goals.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            With a focus on technology, design, and strategy, we bring together
            innovation and creativity to make a real difference.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
