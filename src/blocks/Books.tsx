// app/components/Books.tsx
import Image from "next/image";

export default function Books() {
  return (
    <section id="books" className="w-full  pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[500px]">
        {/* Left Side: Book Mockup / Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="">
            <Image
              src="/book-03.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:pl-12">
          <h2 className="text-2xl font-extrabold text-white">
            Upcoming <span className="text-purple-600">Book</span>
          </h2>
          <p className="text-md text-gray-300 leading-relaxed">
            I’m working on{" "}
            <span className="font-semibold text-blue-700">
              insightful books
            </span>
            that explore{" "}
            <span className="font-semibold text-purple-700">
              startups, entrepreneurship, and technology
            </span>
            . These books will share my experiences, practical frameworks, and
            stories from building businesses and software.
          </p>
          <p className="text-gray-100 text-sm">
            Get early access to chapters, behind-the-scenes updates, and release
            alerts by joining my community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-500 text-white px-8 py-3 rounded-xl ">
              Available Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
