// app/components/Hero.tsx
import Image from "next/image";
import Popup from "./Popup";

export default function Herosec() {
  return (
    <section className="flex justify-center  text-white p-3 pt-8">
      <Popup />
      {/* Container */}
      <div className="flex flex-col-reverse  sm:flex-row gap-5">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl">
            Hey, I am <span className=" font-bold ">Gajendra Kumar K.</span>
          </h1>
          <p className=" max-w-2xl text-wrap text-center text-md">
            A <span className="">developer</span> building modern, user-friendly
            web applications. I turn ideas into reality with{" "}
            <span className="">clean code</span> and{" "}
            <span className="">creative solutions</span>.
          </p>

          <div className="flex gap-3">
            <button className="border p-3 rounded-4xl cursor-pointer">
              {" "}
              Get in Touch
            </button>
            <button className="border p-3 rounded-4xl cursor-pointer">
              {" "}
              My Products
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <Image
            className="rounded-2xl grayscale"
            src="/my-image.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}
