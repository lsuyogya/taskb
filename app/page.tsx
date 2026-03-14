import Image from "next/image";
import DragSlider from "./components/DragSlider";
import RotatingWords from "./components/RotatingWords";

export default function Home() {
  const partnerImages = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
  ];
  return (
    <main className="min-h-screen flex justify-center font-primary">
      <div className=" container max-w-360 w-full p-12 flex flex-col gap-20 md:gap-[195px]">
        {/* Top Section */}
        <section className="flex flex-wrap justify-between gap-14 md:gap-20 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6 md:gap-14.5">
            <h2 className="text-2xl/snug md:text-4xl/snug text-gray-800 font-medium max-w-[25ch]">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </h2>

            <button className="bg-primary hover:bg-[#013ecf] text-light-50 px-[20px] py-[14px] rounded-full text-base max-w-max active:outline-6 active:outline-[rgb(184,204,253)]">
              Services
            </button>
          </div>

          {/* Rotating Wrods */}
          <RotatingWords />
        </section>

        {/* Image Section */}
        <DragSlider />

        {/* Partners */}
        <section className="text-center">
          <p className="text-light-900 mb-8 md:mb-12.5 font-bold text-[22px]">
            Our Partners
          </p>

          <div className="flex flex-wrap justify-around items-center gap-14 text-gray-700 font-semibold">
            {partnerImages.map((img, index) => (
              <Image
                src={img}
                height={150}
                width={150}
                className={`h-14 md:h-18.75 w-auto transition-colors ${index === 0 && "logo-filter"} ${index === 3 && "logo-filter"} `}
                key={img}
                alt=""
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
