import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const ExclusiveFeature = ({ sections, loading }) => {
  const feature = sections?.find(
    (section) => section.type === "feature_explanations"
  );

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!feature) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-gray-500">No Exclusive feature found</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6  md:text-left">
          {feature?.name}
        </h2>
        <div className="flex flex-col border relative rounded-lg p-2 sm:p-6 transition-all duration-300">
          {feature?.values.length === 2 ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:gap-6 items-center">
                <div className="flex-1 p-6">
                  <p className="text-lg font-semibold">
                    {feature.values[0].title}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.values[0].checklist.map((list, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon
                          icon="iconamoon:check-light"
                          className="text-2xl text-blue-500"
                        />
                        <span>{list}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/3">
                  <Image
                    src={feature.values[0]?.file_url}
                    width={220}
                    height={220}
                    alt={feature.values[0].title}
                    className="mx-auto"
                  />
                </div>
              </div>

              <Separator className="bg-gray-300" />

              <div className="flex flex-col md:flex-row md:gap-6 items-center">
                <div className="flex-1 p-6">
                  <p className="text-lg font-semibold">
                    {feature.values[1].title}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.values[1].checklist.map((list, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon
                          icon="iconamoon:check-light"
                          className="text-2xl text-blue-500"
                        />
                        <span>{list}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/3">
                  <Image
                    src={feature.values[1]?.file_url}
                    width={220}
                    height={220}
                    alt={feature.values[1].title}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          ) : (
            feature?.values.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:gap-6 items-center p-6"
              >
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <ul className="mt-4 space-y-2">
                    {item.checklist.map((list, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon
                          icon="iconamoon:check-light"
                          className="text-2xl text-blue-500"
                        />
                        <span>{list}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/3">
                  <Image
                    src={item?.file_url}
                    width={220}
                    height={220}
                    alt={item.title}
                    className="mx-auto"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveFeature;
