import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { contactData } from "../data/contactData";

export default function ContactHeroSection() {
  const { hero } = contactData;

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[575px] bg-[#EFECE5] border-b border-[#E6E1D3] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(22,17,14,0.92)] via-[rgba(35,29,24,0.72)] to-[rgba(45,38,31,0.30)]" />

      <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-[rgba(43,35,29,0.85)] via-[rgba(53,43,36,0.65)] to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(80.47%_179.43%_at_75%_35%,rgba(255,244,228,0.22)_0%,rgba(255,244,228,0)_60%)] pointer-events-none" />

      <div className="hidden lg:flex absolute right-16 xl:right-28 top-16 z-20 flex-col items-end select-none pointer-events-none">
        <div className="font-handwritten text-3xl xl:text-4xl text-white/90 leading-tight text-right -rotate-6 drop-shadow-md">
          {hero.scriptLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-28 flex flex-col justify-center">
        <div className="w-full max-w-[576px] flex flex-col items-start gap-4">
          <span className="text-xs font-semibold text-[#D8C7B0] tracking-[3px] uppercase">
            {hero.eyebrow}
          </span>

          <h1 className="font-serif-heading font-normal text-4xl sm:text-5xl lg:text-[72px] text-white leading-tight lg:leading-[72px] tracking-[-1.8px] drop-shadow-sm">
            {hero.heading}
          </h1>

          <p className="w-full max-w-[448px] font-light text-sm sm:text-base text-gray-200/90 leading-relaxed pt-1">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={hero.buttonHref}
              onClick={handleScrollToForm}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#244234] text-white text-xs font-semibold uppercase tracking-[0.6px] hover:bg-[#1a3327] transition-all shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-4px_rgba(0,0,0,0.2)] active:scale-95 cursor-pointer"
            >
              <span>{hero.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              to={hero.secondaryButtonHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.6px] border border-white/20 backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>{hero.secondaryButtonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

