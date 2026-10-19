import React from "react";
import { ArrowRight } from "lucide-react";
import { collectionBannerData } from "../data/collectionBannerData";

export default function CollectionBannerSection() {
  const { eyebrow, heading, description, cta, backgroundImage } =
    collectionBannerData;

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden bg-[#1E2621]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#101512]/92 via-[#101512]/75 to-[#101512]/35 pointer-events-none" />

      <div className="relative z-[2] w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 pt-28 pb-14 md:pt-32 md:pb-16 flex flex-col justify-center">
        <div className="w-full max-w-[576px] flex flex-col gap-3 text-left">
          <span className="text-[11px] font-bold tracking-[2.75px] uppercase text-white/80">
            {eyebrow}
          </span>

          <h1 className="font-serif-heading text-[32px] sm:text-[40px] md:text-[48px] leading-[1.08] tracking-[-1.2px] font-bold text-white">
            {heading}
          </h1>

          <p className="max-w-[448px] text-[15px] sm:text-[16px] leading-[24px] font-normal text-[#E5E7EB] pt-1">
            {description}
          </p>

          <div className="pt-3">
            <a
              href={cta.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-[#244337] hover:bg-[#1a3329] active:scale-95 text-white text-[12px] font-semibold rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
            >
              <span>{cta.text}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
