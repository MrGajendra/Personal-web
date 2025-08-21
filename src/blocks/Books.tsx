// app/components/Books.tsx
import Image from "next/image";

export default function Books() {
  return (
    <section id="books" className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[85vh]">
        {/* Left Side: Book Mockup / Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-64 h-96 md:w-80 md:h-[500px] shadow-xl rounded-2xl overflow-hidden ">
            <img
              src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/1659009279-1-1.png?w=1200&ssl=1" // replace with your book cover
              alt="Upcoming Book"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:pl-12">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Upcoming <span className="text-blue-600">Books</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
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
          <p className="text-gray-600">
            Get early access to chapters, behind-the-scenes updates, and release
            alerts by joining my community of readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              📩 Notify Me
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl shadow-sm hover:bg-blue-50 transition">
              📖 Preview Chapter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
