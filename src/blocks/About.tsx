// app/components/About.tsx

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="p-3 text-white py-16">
      <div className=" sm:flex sm:justify-center sm:mx-auto ">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            className="rounded-2xl grayscale"
            src="/my-image.png"
            width={250}
            height={250}
            alt="Picture of the author"
          />
        </div>

        {/* Right: Text */}
        <div className=" flex flex-col gap-4 pt-5 p-5 sm:max-w-2xl">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="">
            We are passionate about helping businesses and individuals thrive in
            the digital age. Our mission is to provide simple, impactful, and
            scalable solutions that empower people to achieve their goals.
          </p>
          <p className="">
            With a focus on technology, design, and strategy, we bring together
            innovation and creativity to make a real difference.
          </p>
          <button className="p-3 border rounded-4xl max-w-[200px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
