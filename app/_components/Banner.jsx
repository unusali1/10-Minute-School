import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import heroBanner from "../../public/assets/heroBanner.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";

const Banner = ({ courses, loading }) => {
  const [headerActive, setHeaderActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 930 && scrollY < 5030) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  return (
    <div
      className="relative h-full sm:h-[350px] mt-8 sm:mt-4"
      style={{
        backgroundImage: `url(${heroBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="container mx-auto pt-20 sm:pt-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 text-white space-y-6 px-2 sm:px-12 py-2 sm:py-16">
            <div>
              <h1 className="text-4xl md:text-3xl lg:text-3xl font-bold leading-tight">
                {courses?.title}
              </h1>
              <div className="flex space-x-2 mt-2 ">
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="tabler:star-filled"
                      className="text-md sm:text-xl text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-lg text-gray-200">
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </p>
              </div>
            </div>

            {courses?.description && (
              <div
                className="text-[#A3A3A3] text-justify leading-relaxed text-base md:text-lg max-w-2xl"
                dangerouslySetInnerHTML={{ __html: courses.description }}
              />
            )}
          </div>

          <div
            className={`w-full md:max-w-[330px] lg:max-w-[400px] ${
              headerActive
                ? "block sm:fixed sm:md:top-[90px] sm:right-36 "
                : "block sm:absolute sm:right-16 sm:md:top-[90px]"
            }`}
          >
            <div className="w-full md:border-[1px] md:border-[#DBE1EB]  order-2 bg-none sm:bg-white overflow-hidden">
              <div className="pt-2">
                <div
                  className={`relative
                    ${headerActive ? "hidden" : "block"}`}
                  ref={emblaRef}
                  role="region"
                  aria-label="Course media carousel"
                >
                  <div className="flex touch-pan-y">
                    {courses?.media?.map((item, index) => (
                      <div className="flex-[0_0_100%] px-2" key={index}>
                        <Image
                          src={item?.thumbnail_url || item?.resource_value}
                          alt={`Course Media ${index + 1}`}
                          width={480}
                          height={300}
                          className="object-cover w-full h-[200px] md:h-[250px] "
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollPrev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 z-10"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 z-10"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div
                  className={`flex px-2 gap-2 justify-center mt-4
                  ${headerActive ? "hidden" : "block"}`}
                >
                  {courses?.media?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`w-16 h-10 p-[1px] rounded-md overflow-hidden border-2 transition-all duration-300 ${
                        index === selectedIndex
                          ? "border-[#1DAA55] scale-105"
                          : "border-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <Image
                        src={item?.thumbnail_url || item?.resource_value}
                        alt={`Thumbnail ${index + 1}`}
                        width={64}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-8 px-4 hidden sm:flex gap-4">
                  <p className="text-black text-2xl font-bold ">৳3850</p>
                  <del className="text-base font-normal text-black md:text-xl">
                    ৳5000
                  </del>
                  <div className="flex items-center">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[14px] border-r-orange-400 relative">
                      <div className="w-2 h-2 bg-white rounded-full absolute left-[-12px] top-[50%] translate-y-[-50%]"></div>
                    </div>

                    <p className="bg-orange-400 text-white font-bold px-1 py-1 rounded-tr-md rounded-br-md text-sm">
                      • 1150 ট ৳ ছাড়
                    </p>
                  </div>
                </div>

                <div className="px-4 hidden sm:block">
                  <button
                    className="mt-4 py-3 flex items-center justify-center bg-green-600 text-white rounded-md w-full hover:bg-green-700 transition"
                    style={{
                      boxShadow: isHovered
                        ? "none"
                        : "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -5px 0px rgba(0, 0, 0, 0.2)",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {courses?.cta_text?.name}
                  </button>
                </div>

                <p className="text-black font-bold text-2xl mt-4 px-4 hidden sm:block">
                  এই কোর্সে যা থাকছে
                </p>

                <div className="px-4 mb-2 mt-2 hidden sm:block">
                  <ul className="list-disc list-inside text-black">
                    {courses?.checklist?.map((item) => (
                      <li
                        key={item?.id}
                        className="text-md text-decoration-none flex items-center gap-4 py-1"
                      >
                        <Image
                          src={item?.icon}
                          alt={item?.text}
                          width={20}
                          height={20}
                        />
                        {item?.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 hidden sm:flex justify-between px-1 text-gray-800">
              <p className="text-sm font-medium">
                কোর্সটি সম্পর্কে বিস্তারিত জানতে
              </p>
              <div className="flex space-x-1">
                <Icon
                  icon="ic:baseline-call"
                  className="text-xl text-[#1DAA55] "
                />
                <p className="text-sm font-medium  border-b-[1px] border-[#1DAA55] text-[#1DAA55]">
                  ফোন করুন (16910)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
