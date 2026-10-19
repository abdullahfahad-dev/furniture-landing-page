import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categoriesData } from "../data/categoriesData";

export default function CategoriesSection() {
  const { eyebrow, heading, description, viewAll, categories } = categoriesData;

  return (
    <section
      id="categories"
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-2 max-w-xl text-left">
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#6B7280]">
              {eyebrow}
            </span>
            <h2 className="font-serif-heading text-[32px] sm:text-[38px] md:text-[42px] leading-tight font-medium text-[#1E2621]">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed mt-1">
              {description}
            </p>
          </div>

          <Link
            to={viewAll.href}
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#2D3B36] hover:text-[#C58940] transition-colors self-start md:self-end pb-1"
          >
            <span>{viewAll.text}</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group flex flex-col bg-[#EFECE6] rounded-[12px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left"
            >
              <div className="w-full h-36 sm:h-40 rounded-[12px] overflow-hidden bg-white/60">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between pt-3.5 px-3 pb-3">
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-semibold text-[#1E2621] group-hover:text-[#2D3B36] transition-colors leading-tight">
                    {category.title}
                  </h3>
                  <span className="text-[11px] text-[#71717A] font-normal mt-0.5">
                    {category.subtitle}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#1C2822] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C58940]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
