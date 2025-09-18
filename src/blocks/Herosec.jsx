// app/components/Hero.tsx
import Image from "next/image";
import Popup from "./Popup";
import Link from "next/link";

export default function Herosec() {
  return (
    <section className="flex justify-center  text-white p-3 pt-8  sm:flex ">
      <Popup />
      {/* Container */}
      <div className="flex flex-col-reverse  sm:flex-row gap-5  ">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-4 sm:justify-center">
          <h1 className="text-xl sm:text-2xl">
            Hey, I am{" "}
            <span className=" font-bold sm:text-left ">Gajendra Kumar K.</span>
          </h1>
          <p className=" max-w-2xl text-wrap text-center text-md sm:text-left">
            A <span className="">developer</span> building modern, user-friendly
            web applications. I turn ideas into reality with{" "}
            <span className="">clean code</span> and{" "}
            <span className="">creative solutions</span>.
          </p>

          <div className="flex gap-3 ">
            <Link href={"#contact"}>
              <button className="border p-3 rounded-4xl cursor-pointer">
                {" "}
                Get in Touch
              </button>
            </Link>

            <Link href={"#products"}>
              <button className="border p-3 rounded-4xl cursor-pointer">
                {" "}
                My Products
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <Image
            className="rounded-2xl grayscale sm:rounded-full"
            src="/my-image.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}
