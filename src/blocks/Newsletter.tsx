// app/components/Newsletter.tsx
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="w-full  min-h-[500px] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-3xl w-full text-center  shadow-lg rounded-2xl p-10 bg-white/10 backdrop-blur-3xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Our{" "}
          <span className="text-green-500">Newsletter</span>
        </h2>
        <p className=" text-gray-300 text-sm mb-8 max-w-2xl mx-auto">
          Subscribe to get the latest updates, tips, and exclusive content
          directly in your inbox. No spam, we promise!
        </p>

        {/* Input & Button */}
        <form className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Join Now
          </button>
        </form>

        {/* Small text */}
        <p className="text-sm text-gray-500 mt-6">
          By subscribing, you agree to receive our emails. You can unsubscribe
          anytime.
        </p>
      </div>
    </section>
  );
}
