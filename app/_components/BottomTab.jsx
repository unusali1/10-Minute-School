import React, { useEffect, useState } from "react";

const BottomTab = ({ courses }) => {
  const [headerActive, setHeaderActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHeaderActive(window.scrollY > 630);
      }, 100); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    headerActive && (
      <div className="fixed bottom-0 left-0 right-0 md:hidden container bg-white mx-auto z-50">
        <div className="mt-8 px-4 flex gap-4 items-center">
          <p className="text-black text-2xl font-bold">৳3850</p>
          <del className="text-base font-normal text-black md:text-xl">
            ৳5000
          </del>
          <div className="flex items-center">
            <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[14px] border-r-orange-400 relative">
              <div className="w-2 h-2 bg-white rounded-full absolute left-[-12px] top-1/2 -translate-y-1/2" />
            </div>
            <p className="bg-orange-400 text-white font-bold px-2 py-1 rounded-tr-md rounded-br-md text-sm">
              • 1150 ট ৳ ছাড়
            </p>
          </div>
        </div>

        <div className="px-4 pb-4">
          <button
            className={`mt-4 py-2 flex items-center justify-center bg-green-600 text-white rounded-md w-full hover:bg-green-700 transition`}
            style={{
              boxShadow: isHovered
                ? "none"
                : "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -5px 0px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {courses?.cta_text?.name || "Buy Now"}
          </button>
        </div>
      </div>
    )
  );
};

export default BottomTab;
