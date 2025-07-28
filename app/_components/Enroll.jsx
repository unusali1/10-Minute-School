import React, { useState } from "react";
import Image from "next/image";

const Enroll = ({ courses }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="block md:hidden container mx-auto sm:pt-12">
      <div className="flex flex-col-reverse gap-8 items-center">
        <div
          className="w-full bg-white z-20">
          <div className="w-full bg-white overflow-hidden">
            <div className="pt-2">
              <div className="mt-8 px-4 flex gap-4">
                <p className="text-black text-2xl font-bold">৳3850</p>
                <del className="text-base font-normal text-black md:text-xl">
                  ৳5000
                </del>
                <div className="flex items-center">
                  <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[14px] border-r-orange-400 relative">
                    <div className="w-2 h-2 bg-white rounded-full absolute left-[-10px] top-[50%] translate-y-[-50%]"></div>
                  </div>
                  <p className="bg-orange-400 text-white font-bold py-1 rounded-tr-md rounded-br-md text-sm">
                    • 1150 ট ৳ ছাড়
                  </p>
                </div>
              </div>

              <div className="px-4">
                <button
                  className="mt-4 py-2 flex items-center justify-center bg-green-600 text-white rounded-md w-full hover:bg-green-700 transition"
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

              <p
                className="text-black font-bold text-2xl mt-4 px-4">
                এই কোর্সে যা থাকছে
              </p>

              <div
                className="px-4 mb-2 mt-2">
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
        </div>
      </div>
    </div>
  );
};

export default Enroll;
