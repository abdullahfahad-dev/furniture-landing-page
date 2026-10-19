import React from "react";
import { ArrowRight } from "lucide-react";
import { aboutData } from "../data/aboutData";

export default function OurStorySection() {
  const { story } = aboutData;

  return (
    <section className="w-full bg-[#FAF9F5] py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-[1184px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="relative w-full max-w-[448px] shrink-0 flex items-center justify-center">

          <div className="relative z-10 w-full  overflow-hidden">
            <img
              src={story.image}
              alt={story.heading}
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </div>

        <div className="w-full max-w-[544px] flex flex-col items-start gap-4 sm:gap-5">
          <span className="text-xs font-bold text-[#446252] tracking-[3px] uppercase">
            {story.eyebrow}
          </span>

          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#1E3329] leading-tight sm:leading-[52px] lg:leading-[54px] tracking-[-1.2px]">
            {story.heading}
          </h2>

          <div className="space-y-4 pt-1">
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed sm:leading-[24px]">
              {story.paragraph1}
            </p>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed sm:leading-[24px]">
              {story.paragraph2}
            </p>
          </div>

          <div className="pt-3">
            <a
              href={story.cta.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#233831] text-white text-sm font-medium tracking-[0.35px] hover:bg-[#1a2b25] transition-all shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] active:scale-95"
            >
              <span>{story.cta.text}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

