import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const courses = [
  {
    href: "/product/ielts-live-batch/?ref=ielts-live-batch&type=recommendation",
    title: "IELTS LIVE Batch",
    instructors:
      "Zawad Hasan Adib, Saraf Samantha Khan, Salsabil Haque, Uttam Deb, Sharlin Ulfatt Bhuiyan",
    price: "৳ 8500",
    originalPrice: "৳10000",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg",
  },
  {
    href: "/product/ghore-boshe-spoken-english/?ref=ghore-boshe-spoken-english&type=recommendation",
    title: "ঘরে বসে Spoken English",
    instructors: "Munzereen Shahid",
    price: "৳ 1950",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg",
  },
  {
    href: "/product/email-marketing-course/?ref=email-marketing-course&type=recommendation",
    title: "Email Marketing করে Freelancing",
    instructors: "Tisat Fatema Tia",
    price: "৳ 1950",
    image:
      "https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg",
  },
  {
    href: "/product/english-grammar-course/?ref=english-grammar-course&type=recommendation",
    title: "Complete English Grammar Course",
    instructors: "Munzereen Shahid",
    price: "৳ 1950",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg",
  },
  {
    href: "/product/youtube-marketing-course/?ref=youtube-marketing-course&type=recommendation",
    title: "YouTube Marketing করে Freelancing",
    instructors: "Md. Sabbir Hossain",
    price: "৳ 2500",
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg",
  },
];

const SomeCourses = () => {
  return (
    <div className="container mx-auto px-4 sm:px-12 py-4 sm:py-10 md:py-16">
      <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
        আপনার জন্য আরও কিছু কোর্স
      </h2>
      <div className="relative">
        <div className="flex justify-end gap-2 mb-4">
          <button
            className="p-2 rounded-full bg-[#7F7F7F]"
            onClick={() =>
              document
                .getElementById("carousel")
                .scrollBy({ left: -300, behavior: "smooth" })
            }
          >
            <Icon icon="lsicon:left-outline" className="text-2xl text-white " />
          </button>
          <button
            className="p-2 rounded-full bg-[#7F7F7F]"
            onClick={() =>
              document
                .getElementById("carousel")
                .scrollBy({ left: 300, behavior: "smooth" })
            }
          >
            <Icon
              icon="lsicon:right-outline"
              className="text-2xl text-white "
            />
          </button>
        </div>
        <div
          id="carousel"
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {courses.map((course, index) => (
            <Link key={index} href={course.href} className="flex-shrink-0">
              <div className="w-[200px] md:w-[272px] h-full flex flex-col border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-green-500 hover:shadow-lg">
                <div className="relative w-full h-[112px] md:h-[152px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 200px, 272px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="flex-1 flex flex-collar justify-between p-4">
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold line-clamp-2 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                      {course.instructors}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-collar justify-between p-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm md:text-lg font-semibold text-green-600">
                      {course.price}
                    </p>
                    {course.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">
                        {course.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SomeCourses;
