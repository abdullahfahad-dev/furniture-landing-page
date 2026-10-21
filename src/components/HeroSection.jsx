import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { heroData } from "../data/heroData";

export default function HeroSection() {
  const { eyebrow, headline, description, primaryCta, secondaryCta, carousel } =
    heroData;

  return (
    <section className="relative w-full min-h-[580px] md:min-h-[620px] lg:h-[560px] xl:h-[540px] flex items-center overflow-hidden bg-[#1E2621]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100"
        style={{
          backgroundImage: `url(/heroBanner.png)`,
        }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(16, 21, 18, 0.88) 0%, rgba(16, 21, 18, 0.65) 45%, rgba(16, 21, 18, 0.25) 100%)",
        }}
      />

      <div className="relative z-[2] w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-28 lg:pb-12 flex flex-col justify-center">
        <div className="w-full max-w-[672px] flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#D1D5DB]" />
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[2.64px] uppercase text-[#D1D5DB]">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif-heading text-[38px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1.08] sm:leading-[1.05] tracking-[-1.5px] font-medium text-white whitespace-pre-line">
            {headline}
          </h1>

          <p className="max-w-[512px] text-sm sm:text-base leading-[24px] font-light text-[#D1D5DB] pt-1">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 sm:pt-6">
            <Link
              to={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 sm:px-8 bg-[#C58940] hover:bg-[#b07833] text-white text-[14px] font-medium rounded-full shadow-[0px_10px_15px_-3px_rgba(197,137,64,0.35),0px_4px_6px_-4px_rgba(197,137,64,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{primaryCta.text}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>

            <Link
              to={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[54px] px-6 sm:px-7 text-white backdrop-blur-sm text-[14px] font-medium rounded-full border border-white/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-4 sm:right-8 md:right-12 bottom-6 sm:bottom-8 z-[3] flex items-center gap-3 px-4 py-2 bg-black/30 border border-white/15 backdrop-blur-md rounded-full text-white/90">
        <span className="text-[12px] font-semibold tracking-[0.6px]">
          {carousel.current}
        </span>
        <div className="relative w-10 h-[2px] bg-white/40 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-white rounded-full"
            style={{ width: `${carousel.progressPercent}%` }}
          />
        </div>
        <span className="text-[12px] font-semibold tracking-[0.6px]">
          {carousel.total}
        </span>

        <div className="pl-2 border-l border-white/20 flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous slide"
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer text-white/70 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer text-white/70 hover:text-white"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
