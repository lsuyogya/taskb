import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-feather";

const page = () => {
  return (
    <main className="p-12 container mx-auto min-h-screen flex flex-col justify-center max-w-350 gap-12 font-tertiary ">
      <div className="grid gap-4">
        <p className="text-2xl text-black-900">
          Explore our classes and master trending skills!
        </p>
        <h2 className="text-[32px] font-secondary font-bold text-base-black">
          Dive Into{" "}
          <span className="text-primary-500">What&apos;s Hot Right Now!</span>{" "}
          🔥
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Total Courses Card */}
        <a href="#" className="contents">
          <div className="md:col-span-2 bg-secondary-500 text-secondary-50 rounded-4xl p-6 xl:p-10 flex flex-col justify-between relative gap-15 group">
            <div className="flex justify-end">
              <p className="text-lg font-semibold flex items-center gap-1 font-tertiary">
                View all Courses{" "}
                <span className="text-lg arrow group-hover:animate-sway">
                  <ArrowRight size={20}></ArrowRight>
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4">
              {/* <Image src="/Course1.svg" height="75" width="75" alt=""></Image>
            <Image src="/Course2.svg" height="75" width="75" alt=""></Image>
            <Image src="/Course3.svg" height="75" width="75" alt=""></Image>
            <Image src="/Course4.svg" height="75" width="75" alt=""></Image> */}
              <Image
                src="/Courses.svg"
                height="1000"
                width="1000"
                alt=""
                className="w-full h-auto mx-auto max-w-115"
              ></Image>
            </div>

            {/* Count */}
            <div className="mt-auto w-full h-auto mx-auto max-w-115 text-center justify-around flex flex-wrap md:flex-nowrap gap-1">
              <div className="flex items-end gap-2">
                <span className="text-[150px] font-extrabold font-secondary leading-none">
                  23<sup className="text-white text-[64px] -top-[85px]">+</sup>
                </span>
              </div>
              <div className="contentWrapper flex flex-col gap-3 text-start content-center">
                <span className="font-bold  text-[32px]">All Courses</span>
                <p className=" text-lg max-w-[40ch]">
                  courses you&apos;re powering through right now.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Upcoming Courses Card */}
        <div className="col-span-1 bg-[#f9e8e8] rounded-3xl p-6 xl:p-10 flex flex-col justify-between min-h-[300px] group">
          <div className="flex m-auto ">
            <h3 className="font-bold text-secondary-500 text-[32px] leading-none [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
              Upcoming
              <br />
              Courses
            </h3>
            <p className="text-secondary-500 text-lg [writing-mode:vertical-rl] rotate-180 ">
              exciting new courses waiting <br /> to boost your skills.
            </p>
          </div>
          <div className="clear-both mt-4 flex items-end gap-1 mx-auto">
            <span className="text-[150px] font-bold text-secondary-500 leading-[120%]">
              05
              <sup className="text-[64px] font-bold text-secondary-500 leading-[120%] -top-[90px] group-hover:-top-[80px] transition-all">
                +
              </sup>
            </span>
          </div>
        </div>

        {/* Ongoing Courses Card */}
        <div className="group col-span-1 bg-[#f9e8e8] rounded-3xl p-6 xl:p-10 flex flex-col justify-between min-h-[300px]">
          <div className="flex m-auto ">
            <h3 className="font-bold text-secondary-500 text-[32px] leading-none [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
              Ongoing
              <br />
              Courses
            </h3>
            <p className="text-secondary-500 text-lg [writing-mode:vertical-rl] rotate-180 ">
              currently happening—don&apos;t <br /> miss out on the action!
            </p>
          </div>
          <div className="clear-both mt-4 flex items-end gap-1 mx-auto">
            <span className="text-[150px] font-bold text-secondary-500 leading-[120%]">
              10
              <sup className="text-[64px] font-bold text-secondary-500 leading-[120%] -top-[90px] group-hover:-top-[80px] transition-all">
                +
              </sup>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
