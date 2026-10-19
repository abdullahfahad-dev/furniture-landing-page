import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutData } from "../data/aboutData";

export default function CTABannerSection() {
  const { ctaBanner } = aboutData;

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1216px] mx-auto relative rounded-3xl overflow-hidden bg-[#1B2B24] border border-[#44403C]/40 shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${ctaBanner.bgImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#172620] via-[#172620]/90 to-transparent" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-10 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-semibold text-[#6EE7B7] tracking-[2.75px] uppercase">
              {ctaBanner.eyebrow}
            </span>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-[-0.9px] leading-tight">
              {ctaBanner.heading}
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#D6D3D1] leading-relaxed">
              {ctaBanner.description}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to={ctaBanner.buttonHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B2B24] font-semibold text-sm hover:bg-[#EEF3EE] hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <span>{ctaBanner.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

