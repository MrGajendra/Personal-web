// app/components/SocialContent.tsx

import Image from "next/image";

export default function SocialContent() {
  const socials = [
    {
      name: "YouTube",
      icon: "/yt-icon.png",
      desc: "Cinematic videos on tech, business, and productivity.",
      link: "#",
    },
    {
      name: "Twitter",
      icon: "/x-logo.png",
      desc: "Quick insights, threads, and real-time thoughts on startups & IT.",
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.png",
      desc: "Professional posts, case studies, and networking opportunities.",
      link: "#",
    },
  ];

  return (
    <section
      id="social"
      className="w-full  py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2 text-white">Social Presence</h2>
        <p className="text-md text-gray-300 mb-12 py-5 mx-auto">
          I regularly share content on technology, business, and IT services.
          Follow me on these platforms for insights, updates, and engaging
          discussions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center ">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              className=" border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 w-full sm:w-72 flex flex-col items-center text-center"
            >
              <Image
                src={`${s.icon}`}
                alt="Picture of the author"
                width={100}
                height={100}
              />

              <p className="text-gray-300 text-sm mt-4">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
