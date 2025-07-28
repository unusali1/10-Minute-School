import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";

const data = [
  {
    id: 2,
    title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },
  {
    id: 3,
    title: "Academic Reading",
    subTitles: [
      {
        id: 1,
        text: "Video: Reading: Reading Format",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
      {
        id: 2,
        text: "Reading - General Idea, Format, Question Types",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
      {
        id: 3,
        text: "Video: Reading: Paragraph Headings",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
      {
        id: 4,
        text: "Reading - Matching Headings",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
      {
        id: 5,
        text: "Video: Reading: Multiple Choice Questions",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
      {
        id: 6,
        text: "Reading - Multiple Choice",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
      {
        id: 7,
        text: "Video: Reading: True/False/Not Given",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },
  {
    id: 4,
    title: "Academic Reading Mock Test",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 5,
    title: "Listening",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 6,
    title: "Academic Writing",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 7,
    title: "Speaking",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 8,
    title: "General Training Reading",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 9,
    title: "General Reading Mock Test",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 10,
    title: "General Training Writing",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 11,
    title: "ZOOM Live Class",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 12,
    title: "IELTS Paper Based Templates",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },

  {
    id: 13,
    title: "IELTS Mock Test (PDF Questions)",
    subTitles: [
      {
        id: 1,
        text: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        icon: (
          <Icon
            icon="iconamoon:check-fill"
            className="text-2xl text-blue-600 mt-1"
          />
        ),
        btn: null,
      },
    ],
  },
];

const ContentPreview = ({ sections, loading }) => {
  const [accordionData, setAccordionData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const previews = sections?.find(
    (section) => section.type === "content_preview"
  );

  useEffect(() => {
    setAccordionData(data.slice(0, 5));
  }, []);

  const handleShowMore = () => {
    setAccordionData(data);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setAccordionData(data.slice(0, 5));
    setIsExpanded(false);
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-[450px]" />
      </div>
    );
  }

  if (!previews) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-gray-500">No content found</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:text-left">
          {previews?.name}
        </h2>
        <div className="sm:border relative rounded-lg p-2 sm:p-6 transition-all duration-300">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem
              value="item-1"
              className="border-b-2 border-dotted border-gray-300 last:border-b-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Introduction
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="icon-park-solid:play"
                        className="text-2xl text-[#1DAA55]"
                      />
                      <p className="text-gray-700 dark:text-gray-300">
                        Video: IELTS: Introduction
                      </p>
                    </div>
                    <p className="text-[#1DAA55] font-medium">ফ্রি দেখুন</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="icon-park-solid:play"
                        className="text-2xl text-[#1DAA55]"
                      />
                      <p className="text-gray-700 dark:text-gray-300">
                        Video: IELTS: Overview
                      </p>
                    </div>
                    <p className="text-[#1DAA55] font-medium">ফ্রি দেখুন</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="icon-park-solid:play"
                        className="text-2xl text-[#1DAA55]"
                      />
                      <p className="text-gray-700 dark:text-gray-300">
                        Video: How to Prepare for IELTS?
                      </p>
                    </div>
                    <p className="text-[#1DAA55] font-medium">ফ্রি দেখুন</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="icon-park-solid:play"
                        className="text-2xl text-[#1DAA55]"
                      />
                      <p className="text-gray-700 dark:text-gray-300">
                        Video: Making a Daily Routine
                      </p>
                    </div>
                    <p className="text-[#1DAA55] font-medium">ফ্রি দেখুন</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="icon-park-solid:play"
                        className="text-2xl text-[#9BA3AF]"
                      />
                      <p className="text-gray-700 dark:text-gray-300">
                        Video: Different Sentence Structures to Improve Writing
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border-b-2 border-dotted border-gray-300 last:border-b-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {item.subTitles.map((sub) => (
                    <div key={sub.id} className="flex items-center gap-2">
                      {sub.icon}
                      <p className="text-gray-700 dark:text-gray-300">
                        {sub.text}
                      </p>
                      {sub.btn && (
                        <p className="text-blue-600 font-medium">{sub.btn}</p>
                      )}
                    </div>
                  ))}
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
                <span className="mt-[2px]"> কম দেখুন</span>
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
                <span className="mt-[2px]"> সকল কন্টেন্ট </span>
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

export default ContentPreview;
