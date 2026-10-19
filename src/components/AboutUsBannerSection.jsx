import React from "react";
import { Link } from "react-router-dom";
import { aboutData } from "../data/aboutData";

export default function AboutUsBannerSection() {
  const { banner } = aboutData;

  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[520px] bg-[#2E3731] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner.bgImage})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,10,9,0.88)] via-[rgba(28,25,23,0.68)] to-[rgba(0,0,0,0.25)]" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-28 flex flex-col justify-center">
        <div className="w-full max-w-[672px] flex flex-col items-start gap-4 sm:gap-5">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-[#D6D3D1] tracking-[0.35px]"
          >
            <Link
              to={banner.breadcrumb[0].href}
              className="text-[#D6D3D1] hover:text-white transition-colors"
            >
              {banner.breadcrumb[0].label}
            </Link>
            <span className="text-[#A8A29E]">›</span>
            <span className="font-medium text-[#F5F5F4]">
              {banner.breadcrumb[1].label}
            </span>
          </nav>

          <h1 className="font-serif-heading font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-tight tracking-[-1.5px]">
            {banner.title}
          </h1>

          <p className="w-full max-w-[576px] font-light text-base sm:text-[18px] text-[#E7E5E4]/90 leading-relaxed sm:leading-[28px]">
            {banner.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to={banner.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 h-11 px-7 bg-[#C58940] hover:bg-[#b07833] text-white text-sm font-medium rounded-full shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{banner.primaryCta.text}</span>
            </Link>
            <Link
              to={banner.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-white/15 hover:bg-white/25 text-white text-sm font-medium rounded-full border border-white/20 backdrop-blur-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{banner.secondaryCta.text}</span>
            </Link>
          </div>

          <div className="w-16 h-[2.5px] bg-white/75 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}

