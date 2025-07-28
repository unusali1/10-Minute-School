import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React, { useState } from "react";

const Features = ({ sections, loading }) => {
  const [isHovered, setIsHovered] = useState(false);
  const features = sections?.find((section) => section.type === "features");
  const freePdf = sections?.find(
    (section) => section.type === "group_join_engagement"
  );

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!features && !freePdf) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          No Features Found
        </p>
      </div>
    );
  }

  return (
    <section className="px-2 sm:px-6 lg:px-8">
      {features && (
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:text-left">
            {features.name}
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 bg-[#111827] rounded-sm p-2 sm:p-6 shadow-lg transition-all duration-300">
            {features.values?.map((item) => (
              <div
                key={item?.id}
                className="flex items-start gap-4 p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item?.icon}
                    alt={`${item?.title} icon`}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold text-white">
                    {item?.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item?.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {freePdf?.values?.map((item) => (
        <div
          key={item?.id}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl p-4 sm:p-8 shadow-xl"
          style={{
            backgroundImage: `url(${item?.background?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center space-y-2 sm:space-y-4">
            <Image
              src={item?.top_left_icon_img}
              alt={`${item?.title} icon`}
              width={160}
              height={160}
              className="object-contain"
              loading="lazy"
            />
            <h4 className="text-xl font-bold text-white">{item?.title}</h4>
            <p className="text-gray-200 text-base leading-relaxed max-w-md">
              {item?.description}
            </p>

            <div>
              <button
                className="mt-2 sm:mt-4 py-1 sm:py-3 flex items-center justify-start px-2 sm:justify-center bg-green-600 text-white rounded-md w-52 sm:w-full hover:bg-[#16803C] transition"
                style={{
                  boxShadow: isHovered
                    ? "none"
                    : "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -5px 0px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item?.cta?.text}
              </button>
            </div>
          </div>

          <div className="hidden sm:flex justify-center md:justify-end">
            <Image
              src={item?.thumbnail}
              alt={`${item?.title} thumbnail`}
              width={240}
              height={240}
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
