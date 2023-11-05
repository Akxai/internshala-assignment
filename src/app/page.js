import Image from "next/image";
import { BsPlusSquare } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";

export default function Home() {
  return (
    <div className="px-16">
      <h1 className="text-center text-[#2d67d3] font-extrabold text-xl my-4">
        Frequently Asked Questions
      </h1>

      {/* Questions Section  */}
      <section id="questions" className="grid grid-cols-2 gap-4">
        <div className="flex justify-between items-center bg-[#e5eeff] p-4 rounded-lg">
          <p className="text-[#333333] font-medium">
            Are the courses valid for lifetime?
          </p>
          <CiSquarePlus className="text-[45px] text-[#2d67d3] cursor-pointer" />
        </div>
        <div className="flex justify-between items-center bg-[#e5eeff] p-4 rounded-lg">
          <p className="text-[#333333] font-medium">
            How it is different from the free resources available on the
            internet?
          </p>
          <CiSquarePlus className="text-[45px] text-[#2d67d3] cursor-pointer" />
        </div>
        <div className="flex justify-between items-center bg-[#e5eeff] p-4 rounded-lg">
          <p className="text-[#333333] font-medium">
            Where can I solve my doubts?
          </p>
          <CiSquarePlus className="text-[45px] text-[#2d67d3] cursor-pointer" />
        </div>
        <div className="flex justify-between items-center bg-[#e5eeff] p-4 rounded-lg">
          <p className="text-[#333333] font-medium">
            What will happen at the end of this course?
          </p>
          <CiSquarePlus className="text-[45px] text-[#2d67d3] cursor-pointer" />
        </div>
        <div className="flex justify-between items-center bg-[#e5eeff] p-4 rounded-lg">
          <p className="text-[#333333] font-medium">
            What should I know before I start?
          </p>
          <CiSquarePlus className="text-[45px] text-[#2d67d3] cursor-pointer" />
        </div>
      </section>
      {/* End of Questions Section  */}

      {/* Video Section  */}
      <section id="video" className="mt-20">
        <div className="bg-[#e5eeff] rounded-lg py-16">
          <h1 className="text-center text-[#2d67d3] font-extrabold text-3xl mt-4 mb-2">
            Live Classes
          </h1>
          <p className="text-center text-gray-500 font-medium">
            Watch gaurav resolves doubts for enrolled users
          </p>
          <iframe
            className="mx-auto rounded-lg mt-4"
            width="640"
            height="360"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            src="https://player.vimeo.com/video/790372246?autoplay=1"
          ></iframe>
        </div>
      </section>
      {/* End of Video Section  */}

      {/* Start Learning Section  */}
      <section
        id="start-learning"
        className="bg-[#2d67d3] my-20 min-h-[350px] rounded-2xl"
      >
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/code.png"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 ml-24">
            <h1 className="text-center font-bold text-[44px] text-white w-[450px]">
              Get InterviewReady Now!
            </h1>
            <button className="bg-white text-[#2d67d3] rounded-3xl px-[70px] py-4 font-bold">
              Start Learning
            </button>
          </div>
          <div>
            <Image
              src="/gk_333.png"
              alt="Picture of the author"
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>
      {/* End of Start Learning Section  */}
    </div>
  );
}
