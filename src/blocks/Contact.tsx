// app/components/Contact.tsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-white min-h-[70vh] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg" // replace with your actual contact illustration
            alt="Contact illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            📬 Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Have a project idea, collaboration, or just want to say hello? We’d
            love to{" "}
            <span className="text-blue-600 font-semibold">hear from you</span>.
            Drop us a message and let’s build something amazing together.
          </p>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
