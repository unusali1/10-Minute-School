import React from "react";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";

const Pointers = ({ sections, loading }) => {
  const pointers = sections?.find((section) => section.type === "pointers");

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!pointers) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-muted-foreground">No content found</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {pointers && (
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-6 md:text-left">
            {pointers.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:border rounded-lg p-1 sm:p-6  transition-all duration-300">
            {pointers.values?.map((item) => (
              <div
                key={item?.id}
                className="flex space-x-1 sm:space-x-4 p-2 sm:p-4 rounded-lg duration-200"
              >
                <div className="flex-shrink-0">
                  <Icon
                    icon="iconamoon:check-fill"
                    className="text-2xl text-blue-600 mt-1"
                  />
                </div>
                <div className="flex">
                  <p className="text-black text-md leading-relaxed ">
                    {item?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pointers;
