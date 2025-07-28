import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";

const FrequentlyAskQuestions = ({ sections, language, loading }) => {
  const [accordionData, setAccordionData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const questions = sections?.find((section) => section.type === "faq");

  useEffect(() => {
    setAccordionData(questions?.values?.slice(0, 5));
  }, [questions]);

  const handleShowMore = () => {
    setAccordionData(questions?.values);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setAccordionData(questions?.values.slice(0, 5));
    setIsExpanded(false);
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!questions) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-gray-500">No Questions found</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:text-left">
          {questions?.name}
        </h2>
        <div className="border relative rounded-lg p-2 sm:p-6 transition-all duration-300">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={`item-${questions?.values?.[0]?.id}`}
          >
            {accordionData?.map((item) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border-b-2 border-dotted border-gray-300 last:border-b-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {item?.answer && (
                    <div
                      className="text-black leading-relaxed text-base md:text-lg max-w-2xl"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="absolute left-1/2  bg-white hover:bg-gray-50 -translate-x-1/2 -bottom-3 flex justify-center items-center border rounded-2xl px-4 py-1 shadow-md">
            {isExpanded ? (
              <button
                onClick={handleShowLess}
                className="flex space-x-1 text-sm font-medium  text-gray-500  hover:bg-gray-50 hover:text-gray-700 transition"
              >
                <span className="mt-[2px]">
                  {language === "bn" ? "কম দেখুন" : "See less"}
                </span>
                <Icon
                  icon="lsicon:up-outline"
                  className="text-2xl text-gray-500 hover:text-gray-700"
                />
              </button>
            ) : (
              <button
                onClick={handleShowMore}
                className="flex space-x-1 text-sm font-medium  text-gray-500  hover:bg-gray-50 hover:text-gray-700 transition"
              >
                <span className="mt-[2px]">
                  {language === "bn" ? "সকল কন্টেন্ট " : "See more"}
                </span>
                <Icon
                  icon="lsicon:down-outline"
                  className="text-2xl text-gray-500 hover:text-gray-700"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskQuestions;
