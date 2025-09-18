// app/components/Projects.tsx
export default function Projects() {
  return (
    <section>
      <div className="p-3  text-center mt-14 ">
        <h3 className="text-white text-2xl font-bold py-7">My Products</h3>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="text-white  bg-white/10 backdrop-blur-3xl rounded-md ">
            <p className="text-xl p-2">Menu System</p>
            <p className="text-md p-2 max-w-2xl">
              It is an online digital menu for showcasing you restaurents menu,
              it's under beta phase but still useable, it comes with instant QR
              generation, link analytics and and much more. currently working on
              its Port for Wordpress Plugin so that it can be used as a
              standalone piece for restaurents websites using wordpress{" "}
            </p>

            <button className="border p-3 m-2 rounded-4xl cursor-pointer">
              {" "}
              Early Access Available
            </button>
          </div>

          <div className="text-white  bg-white/10 backdrop-blur-3xl rounded-md ">
            <p className="text-xl p-2">Community Plus</p>
            <p className="text-md p-2 max-w-2xl">
              It is going to be an online community plateform an extenstion of
              my community, It will be used for organising events, workshops,
              mentoring activities a place where people can signup for events
            </p>

            <button className="border p-3 m-2 rounded-4xl cursor-pointer">
              {" "}
              Under Development
            </button>
          </div>

          <div className="text-white  bg-white/10 backdrop-blur-3xl rounded-md ">
            <p className="text-xl p-2">FormType</p>
            <p className="text-md p-2 max-w-2xl">
              Interactive form with analytic specially designed for institutes
              who wants give there students a better experience for submitting
              data
            </p>

            <button className="border p-3 m-2 rounded-4xl cursor-pointer">
              {" "}
              Under Development
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
