import hsc from "../../public/assets/class/hsc.png";
import ten from "../../public/assets/class/ten.png";
import nine from "../../public/assets/class/nine.png";
import eight from "../../public/assets/class/eight.png";
import seven from "../../public/assets/class/seven.png";
import six from "../../public/assets/class/six.png";

import allCourses from "../../public/assets/skills/allCourses.png";
import Bundle from "../../public/assets/skills/Bundle.png";
import Career from "../../public/assets/skills/Career.png";
import Design from "../../public/assets/skills/Design.png";
import Free from "../../public/assets/skills/Free.png";
import Freelancing from "../../public/assets/skills/Freelancing.png";
import Kids from "../../public/assets/skills/Kids.png";
import languageLearning from "../../public/assets/skills/language.png";
import Professional from "../../public/assets/skills/Professional.png";
import SkillsIt from "../../public/assets/skills/SkillsIt.png";

import allPrograms from "../../public/assets/English_centre/allPrograms.png";
import englishFoundation from "../../public/assets/English_centre/englishFoundation.png";
import ielts from "../../public/assets/English_centre/ielts.png";
import kidsEnglish from "../../public/assets/English_centre/kidsEnglish.png";
import spokenEnglish from "../../public/assets/English_centre/spokenEnglish.png";

export const useDropdowns = (language = "en") => {
   const t = (en, bn) => (language === "bn" ? bn : en);
  return [
    {
      id: "class",
      title: t("Class 6-12", "ক্লাস ৬-১২"),
      items: [
        { label: t("HSC", "এইচএসসি"), icon: hsc, href: "#" },
        { label: t("Class Ten", "দশম শ্রেণি"), icon: ten, href: "#" },
        { label: t("Class Nine", "নবম শ্রেণি"), icon: nine, href: "#" },
        { label: t("Class Eight", "অষ্টম শ্রেণি"), icon: eight, href: "#" },
        { label: t("Class Seven", "অষ্টম শ্রেণি"), icon: seven, href: "#" },
        { label: t("Class Six", "ষষ্ঠ শ্রেণি"), icon: six, href: "#" },
      ],
    },
    {
      id: "skills",
      title: t("Skills", "স্কিলস"),
      items: [
        { label: t("All Courses", "সকল কোর্সসমূহ"), icon: allCourses, href: "#" },
        { label: t("Language Learning", "ভাষা শিক্ষা"), icon: languageLearning, href: "#" },
        { label: t("Freelancing", "ফ্রিল্যান্সিং"), icon: Freelancing, href: "#" },
        { label: t("Bundle", "বান্ডেল"), icon: Bundle, href: "#" },
        { label: t("Skills & IT", "স্কিলস এন্ড আইটি"), icon: SkillsIt, href: "#" },
        { label: t("Design & Creative", "ডিজাইন এন্ড ক্রিয়েটিভ"), icon: Design, href: "#" },
        { label: t("Career Readiness", "ক্যারিয়ার রেডিনেস"), icon: Career, href: "#" },
        { label: t("Kids (Age 7-14)", "কিডস কোর্সসমূহ"), icon: Kids, href: "#" },
        { label: t("Professional", "প্রফেশনাল কোর্সসমূহ"), icon: Professional, href: "#" },
        { label: t("Free", "ফ্রি কোর্সসমূহ"), icon: Free, href: "#" },
      ],
    },
    {
      id: "online-batch",
      title: t("Online Batch", "অনলাইন ব্যাচ"),
      items: [
        { label: t("Online Batch (Class 6-10)", "অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণি)"), href: "#" },
        { label: t("HSC", "এইচএসসি"), href: "#" },
      ],
    },
    {
      id: "english-centre",
      title: t("English Centre", "ইংলিশ সেন্টার"),
      items: [
        { label: t("All Programmes", "সকল প্রোগ্রামসমূহ"), icon: allPrograms, href: "#" },
        { label: t("IELTS Programme", "IELTS প্রোগ্রাম"), icon: ielts, href: "#" },
        { label: t("Spoken English (Junior)", "স্পোকেন ইংলিশ (জুনিয়র)"), icon: spokenEnglish, href: "#" },
        { label: t("English Foundation Programme", "ইংলিশ ফাউন্ডেশন প্রোগ্রাম"), icon: englishFoundation, href: "#" },
        { label: t("Kids' English", "কিডস ইংলিশ"), icon: kidsEnglish, href: "#" },
      ],
    },
    {
      id: "more",
      title: t("More", "আরো"),
      items: [
        { label: t("Job Preparation Courses", "চাকরি প্রস্তুতি কোর্সসমূহ"), href: "#" },
        { label: t("Blog", "ব্লগ"), href: "#" },
        { label: t("Book Store", "বুক স্টোর"), href: "#" },
        { label: t("Free Notes & Guides", "ফ্রি নোটস ও গাইড"), href: "#" },
        { label: t("Academic Digital Content", "একাডেমিক ডিজিটাল কন্টেন্ট"), href: "#" },
        { label: t("Verify Certificate", "সার্টিফিকেট ভেরিফাই করুন"), href: "#" },
        { label: t("Career / Recruitment", "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি"), href: "#" },
        { label: t("Join as a Teacher", "শিক্ষক হিসাবে যোগ দিন"), href: "#" },
        { label: t("Join as an Affiliate", "অ্যাফিলিয়েট হিসাবে যোগ দিন"), href: "#" },
      ],
    },
  ];
};
