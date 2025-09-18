// app/components/Newsletter.tsx
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="w-full  min-h-[500px] flex items-center justify-center px-6 py-16"
    >
      <div className=" flex flex-col max-w-3xl w-full text-center  shadow-lg rounded-2xl p-10 bg-white/10 backdrop-blur-3xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Our{" "}
          <span className="text-blue-300">Newsletter</span>
        </h2>

        <iframe
          src="https://gajendraa.substack.com/embed"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
