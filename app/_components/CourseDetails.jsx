import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

const CourseDetails = ({ sections, loading }) => {
  const about = sections?.find((section) => section.type === "about");

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!about) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-gray-500">No Cousrse Details found</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:text-left">
          {about?.name}
        </h2>
        <div className="sm:border relative rounded-lg p-0 sm:p-6 transition-all duration-300">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={`item-${about?.values?.[0]?.id}`}
          >
            {about?.values.map((item) => (
              <AccordionItem
                key={item?.id}
                value={`item-${item.id}`}
                className="border-b-2 border-dotted border-gray-300 last:border-b-0"
              >
                <AccordionTrigger>
                  <div
                    className="text-black leading-relaxed text-base md:text-lg max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div
                    className="text-black leading-relaxed text-base md:text-lg max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
