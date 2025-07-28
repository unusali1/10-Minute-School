import React from "react";
import { Icon } from "@iconify/react";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";

const Footer = ({ language }) => {
  return (
    <footer className="container mx-auto bg-white text-gray-800 px-4 md:px-12 py-12 mb-24 md:mb-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center items-center md:items-start">
          <Image
            src={logo}
            alt="10 Minute School"
            className="h-12 mb-4  w-32"
          />
          <p className="font-semibold text-md mb-3">
            {language === "bn"
              ? "ডাউনলোড করুন আমাদের মোবাইল অ্যাপ"
              : "Download Our Mobile App"}
          </p>
          <div className="flex gap-3">
            <a href="https://play.google.com/store" target="_blank">
              <img
                src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <img
                src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-between space-x-4 md:space-x-10">
          <div>
            <h3 className="font-bold text-2xl mb-4">
              {language === "bn" ? "কোম্পানি" : "Company"}
            </h3>
            <ul className="space-y-2 text-gray-600 font-semibold">
              <li>
                {" "}
                {language === "bn"
                  ? "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি"
                  : "Career / Recruitment"}
              </li>
              <li>
                {language === "bn"
                  ? "শিক্ষক হিসাবে যোগ দিন"
                  : "Join as a Teacher"}
              </li>
              <li>
                {language === "bn"
                  ? "অ্যাফিলিয়েট হিসাবে যোগ দিন"
                  : "Join as an Affiliate"}
              </li>
              <li>
                {language === "bn" ? "প্রাইভেসি পলিসি" : "Privacy policy"}
              </li>
              <li>{language === "bn" ? "রিফান্ড পলিসি" : "Refund policy"}</li>
              <li>
                {language === "bn"
                  ? "ব্যবহারকারীর শর্তাবলি"
                  : "Terms & Conditions"}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-4">
              {language === "bn" ? "অন্যান্য" : "Others"}
            </h3>
            <ul className="space-y-2 text-gray-600 font-semibold">
              <li>{language === "bn" ? "ব্লগ" : "Blog"}</li>
              <li>{language === "bn" ? "বুক স্টোর" : "Book Store"}</li>
              <li>
                {language === "bn" ? "ফ্রি নোটস ও গাইড" : "Free Notes & Guides"}
              </li>
              <li>
                {language === "bn"
                  ? "চাকরি প্রস্তুতি কোর্সসমূহ"
                  : "Job Preparation Courses"}
              </li>
              <li>
                {language === "bn"
                  ? "সার্টিফিকেট ভেরিফাই করুন"
                  : "Verify Certificate"}
              </li>
              <li>{language === "bn" ? "ফ্রি ডাউনলোড" : "Free Download"}</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="hidden sm:block font-bold text-2xl mb-4">
            {language === "bn" ? "আমাদের যোগাযোগ মাধ্যম" : "Keep up with us at"}
          </h3>
          <hr className="mb-2 block md:hidden " />
          <div className="text-gray-700 space-y-4 text-sm hidden sm:block">
            <p>
              <strong className="font-semibold">
                {language === "bn" ? "কল করুন" : "Call Us"}:
              </strong>{" "}
              <span className="text-green-600 font-semibold">16910</span> (24×7)
            </p>
            <p>
              <strong>
                {language === "bn" ? "হোয়াটসঅ্যাপ" : "whatsapp"}:
              </strong>{" "}
              <span className="text-green-600 font-semibold">
                +8801896016252
              </span>{" "}
              (24×7)
            </p>
            <p>
              <strong>
                {language === "bn" ? "দেশের বাহির থেকে" : "Outside Bangladesh"}:
              </strong>{" "}
              <span className="text-green-600 font-semibold">
                +880 9610916910
              </span>
            </p>
            <p>
              <strong>{language === "bn" ? "ইমেইল" : "Email Us"}:</strong>{" "}
              <a
                href="mailto:support@10minuteschool.com"
                className="text-green-600"
              >
                support@10minuteschool.com
              </a>
            </p>
          </div>

          <div className="flex gap-3 mt-4 justify-center md:justify-start items-center">
            <a href="#" className="bg-[#111827] p-2 rounded text-white">
              <Icon icon="mdi:facebook" width={20} height={20} />
            </a>
            <a href="#" className="bg-[#111827] p-2 rounded text-white">
              <Icon icon="mdi:instagram" width={20} height={20} />
            </a>
            <a href="#" className="bg-[#111827] p-2 rounded text-white">
              <Icon icon="ri:linkedin-fill" width={20} height={20} />
            </a>
            <a href="#" className="bg-[#111827] p-2 rounded text-white">
              <Icon icon="mdi:youtube" width={20} height={20} />
            </a>
            <a href="#" className="bg-[#111827] p-2 rounded text-white">
              <Icon icon="line-md:tiktok" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center font-medium text-[10px] sm:text-sm text-gray-500 mt-2 sm:mt-12">
        {language === "bn"
          ? "স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত"
          : "2015 - 2025 Copyright © 10 Minute School. All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
