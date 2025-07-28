import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";

const Testimonials = ({ sections, loading }) => {
  const testimonials = sections?.find(
    (section) => section.type === "testimonials"
  );
  const scrollContainerRef = useRef(null);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [testimonials]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const toggleTestimonial = (id) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!testimonials) {
    return (
      <div className="flex items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
          No testimonials found
        </p>
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:text-left">
          {testimonials?.name}
        </h2>
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className={`hidden sm:absolute -left-14 p-2 rounded-full bg-[#7F7F7F]  z-10 ${
              isAtStart ? "opacity-50" : ""
            }`}
            aria-label="Scroll left"
            disabled={isAtStart}
          >
            <Icon icon="lsicon:left-outline" className="text-2xl text-white" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {testimonials?.values.map((item) => (
              <div
                key={item?.id}
                className={`border relative rounded-xl p-6 flex flex-col min-w-[360px] max-w-[360px] ${
                  expandedTestimonials[item?.id] ? "h-auto" : "h-[350px]"
                }`}
              >
                {item?.thumb ? (
                  <div className="mb-6">
                    <Image
                      src={item?.thumb}
                      alt="thumb"
                      width={288}
                      height={192}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                ) : (
                  <div className="mb-6 mt-4 flex-1">
                    <p className="text-black text-base font-semibold leading-relaxed">
                      {expandedTestimonials[item?.id]
                        ? item?.testimonial
                        : `${item?.testimonial?.slice(0, 200)}${
                            item?.testimonial?.length > 200 ? "..." : ""
                          }`}
                    </p>
                    {item?.testimonial?.length > 200 && (
                      <button
                        onClick={() => toggleTestimonial(item?.id)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-4 transition-colors duration-200"
                      >
                        {expandedTestimonials[item?.id]
                          ? "Show Less"
                          : "Show More"}
                      </button>
                    )}
                  </div>
                )}

                <div className="flex items-center space-x-4 mt-auto">
                  <Avatar className="w-14 h-14 ring-2 ring-blue-100 dark:ring-blue-900/30 hover:ring-blue-300 dark:hover:ring-blue-700/50 transition-all duration-300">
                    <AvatarImage src={item?.profile_image} alt={item?.name} />
                    <AvatarFallback className="text-lg font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {item.name?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item?.name}
                    </h4>
                    <p className="text-sm ml-1 text-gray-500 dark:text-gray-400">
                      {item?.description}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute -top-4 left-8 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                  id="quote"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 20 30"
                    >
                      <path
                        fill="#D33242"
                        d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 20 30"
                    >
                      <path
                        fill="#D33242"
                        d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className={`hidden sm:absolute -right-14 p-2 rounded-full bg-[#7F7F7F]  z-10 ${
              isAtEnd ? "opacity-50" : ""
            }`}
            aria-label="Scroll right"
            disabled={isAtEnd}
          >
            <Icon icon="lsicon:right-outline" className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
