import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";

const FreeWithCourse = ({ sections, loading }) => {
  const freeCourse = sections?.find((section) => section.type === "free_items");

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!freeCourse) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          No free course found
        </p>
      </div>
    );
  }
  return (
    <section className="px-4 sm:px-6 lg:px-8 ">
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
        {freeCourse?.name}
      </h2>

      <div className="relative w-full overflow-hidden rounded-2xl bg-cover bg-center bg-[url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')]">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 lg:p-10">
          <div className="flex-1 space-y-4 text-white">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
            </h3>
            <ul
              className="space-y-2 text-sm sm:text-base"
              aria-label="Course features"
            >
              {[
                { text: "360 পৃষ্ঠা" },
                { text: "প্রিমিয়াম হার্ডকপি" },
                { text: "ফ্রি ডেলিভারি" },
                {
                  text: "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Icon
                    icon="bi:dot"
                    className="text-xl text-gray-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
            <Image
              src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png"
              alt="IELTS Preparation Book"
              width={140}
              height={180}
              className="object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeWithCourse;
