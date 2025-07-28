import React from "react";

const CallToAction = () => {
  return (
    <section className="px-0 sm:px-4 py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-2xl font-semibold md:text-2xl">
          আরও কোন জিজ্ঞাসা আছে?
        </h2>
        <a
          href={`tel:${16910}`}
          aria-label={`Call ${16910} for inquiries`}
          className="flex w-full max-w-[300px] items-center justify-center rounded border border-gray-200 py-3 hover:border-green-500 md:rounded-lg md:px-6 md:py-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 29 28"
            className="mr-2 h-6 w-6"
            aria-hidden="true"
          >
            <path
              stroke="#1CAB55"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.223"
              d="M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083"
            />
            <path
              stroke="#1CAB55"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.223"
              d="M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-medium text-green-500 md:text-lg">
            কল করুন 16910 নম্বরে
          </span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
