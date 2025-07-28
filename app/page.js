"use client";
import { useEffect, useRef, useState } from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import { GET_COURESES } from "@/services/api";
import { Icon } from "@iconify/react";
import Instructors from "./_components/Instructors";
import Features from "./_components/Features";
import Pointers from "./_components/Pointers";
import ContentPreview from "./_components/ContentPreview";
import CourseDetails from "./_components/CourseDetails";
import ExclusiveFeature from "./_components/ExclusiveFeature";
import Footer from "./_components/Footer";
import FreeWithCourse from "./_components/FreeWithCourse";
import Testimonials from "./_components/Testimonials";
import FrequentlyAskQuestions from "./_components/FrequentlyAskQuestions";
import SomeCourses from "./_components/SomeCourses";
import CallToAction from "./_components/CallToAction";
import { Separator } from "@/components/ui/separator";
import BottomTab from "./_components/BottomTab";
import Enroll from "./_components/Enroll";
import Head from "next/head";

const page = () => {
  const [courses, setCourses] = useState({});
  const [language, setLanguage] = useState("en");
  const [sectionActive, setSectionActive] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const scrollContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang");
      if (savedLang === "en" || savedLang === "bn") {
        setLanguage(savedLang);
      } else {
        localStorage.setItem("lang", "en");
      }
    }
  }, []);

  const toggleLanguage = (data) => {
    setLanguage(data);
    localStorage.setItem("lang", data);
  };

  useEffect(() => {
    setLoading(true);
    if (language) {
      const fetchCourses = async () => {
        try {
          const res = await GET_COURESES(language);
          setCourses(res?.data?.data || {});
          setLoading(false);
        } catch (err) {
          console.error("Error fetching courses:", err);
          setLoading(false);
        }
      };

      fetchCourses();
    }
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 310 && scrollY < 4830) {
        setSectionActive(true);
      } else {
        setSectionActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "course-instructor",
      title: language === "bn" ? "কোর্স ইন্সট্রাক্টর" : "Course instructor",
    },
    {
      id: "course-layout",
      title:
        language === "bn"
          ? "কোর্সটি যেভাবে সাজানো হয়েছে"
          : "How the course is laid out",
    },
    {
      id: "course-learn",
      title:
        language === "bn"
          ? "কোর্সটি করে যা শিখবেন"
          : "What you will learn by doing the course",
    },
    {
      id: "course-details",
      title: language === "bn" ? "কোর্স সম্পর্কে বিস্তারিত" : "Course details",
    },
    {
      id: "course-features",
      title:
        language === "bn"
          ? "কোর্স এক্সক্লুসিভ ফিচার"
          : "Course Exclusive Feature",
    },
    {
      id: "free-items",
      title:
        language === "bn"
          ? "এই কোর্সের সাথে ফ্রি পাচ্ছেন–"
          : "Free items with this products-",
    },
    {
      id: "students-opinion",
      title: language === "bn" ? "শিক্ষার্থীরা যা বলছে" : "Students opinion",
    },
    {
      id: "faq",
      title: language === "bn" ? "সচরাচর জিজ্ঞাসা" : "Frequently Ask Questions",
    },
  ];

  return (
    <>
      <Head>
        {courses?.seo?.title && <title>{courses.seo.title}</title>}
        {courses?.seo?.description && (
          <meta name="description" content={courses.seo.description} />
        )}
        {courses?.seo?.keywords?.length > 0 && (
          <meta name="keywords" content={courses.seo.keywords.join(", ")} />
        )}
        {courses?.seo?.defaultMeta?.map((meta, index) => {
          const isProperty = meta.type === "property";
          const key = isProperty ? "property" : "name";
          return (
            <meta
              key={index}
              {...{ [key]: meta.value }}
              content={meta.content}
            />
          );
        })}
        {courses?.seo?.schema?.map(
          (item, index) =>
            item.meta_value && (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: item.meta_value }}
              />
            )
        )}
      </Head>

      <Header language={language} toggleLanguage={toggleLanguage} />
      <Banner courses={courses} loading={loading} />
      <BottomTab courses={courses} />
      <Enroll courses={courses} />
      <div className="container sm:w-3/5 w-full sm:pl-24 pl-2 sm:pr-6 pr-2 py-4 relative">
        <div
          className={`sm:flex items-center gap-2 bg-white hidden ${
            sectionActive
              ? "fixed top-16 container w-1/2 z-20"
              : "relative pr-6"
          }`}
        >
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            aria-label="Scroll left"
          >
            <Icon icon="lsicon:left-outline" className="text-xl" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex relative overflow-x-auto scrollbar-hide gap-2 py-2"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 whitespace-nowrap transition-colors duration-200
                   ${
                     activeSection === section.id
                       ? "text-orange-400 border-b-2 border-orange-400"
                       : " text-black"
                   }
                     `}
              >
                {section.title}
              </button>
            ))}

            <Separator className="absolute bottom-0" />
          </div>

          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            aria-label="Scroll right"
          >
            <Icon icon="lsicon:right-outline" className="text-xl" />
          </button>
        </div>

        <div className="mt-8 space-y-8">
          <div id="course-instructor">
            <Instructors sections={courses?.sections} loading={loading} />
          </div>

          <div id="course-layout">
            <Features sections={courses?.sections} loading={loading} />
          </div>

          <div id="course-learn">
            <Pointers sections={courses?.sections} loading={loading} />
            <ContentPreview sections={courses?.sections} loading={loading} />
          </div>

          <div id="course-details">
            <CourseDetails sections={courses?.sections} loading={loading} />
          </div>

          <div id="course-features">
            <ExclusiveFeature sections={courses?.sections} loading={loading} />
          </div>

          <div id="free-items">
            <FreeWithCourse sections={courses?.sections} loading={loading} />
          </div>

          <div id="students-opinion">
            <Testimonials sections={courses?.sections} loading={loading} />
          </div>

          <div id="faq">
            <FrequentlyAskQuestions
              sections={courses?.sections}
              language={language}
              loading={loading}
            />
          </div>
        </div>

        <CallToAction />
      </div>

      <SomeCourses />
      <Footer language={language} />
    </>
  );
};

export default page;
