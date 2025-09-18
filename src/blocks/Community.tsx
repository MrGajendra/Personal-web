// app/components/Community.tsx

import Image from "next/image";

export default function Community() {
  return (
    <section
      id="community"
      className="w-full  min-h-[70vh] flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            className="rounded-2xl"
            src="/community.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl font-bold text-white ">My Mission</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            I am building a{" "}
            <span className="font-semibold text-blue-600">community</span> of
            entrepreneurs, developers, and creators — a space to{" "}
            <span className="font-semibold text-purple-600">learn</span>,{" "}
            <span className="font-semibold text-green-600">share</span>, and{" "}
            <span className="font-semibold text-pink-600">grow</span> together.
          </p>

          <div>
            <button className="p-3 text-white border rounded-2xl max-w-[200px]">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
