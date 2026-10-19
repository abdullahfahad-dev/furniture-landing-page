import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { blogData } from "../data/blogData";

export default function BlogHeroSection() {
  const { hero } = blogData;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[488px] bg-[#0C1A16] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,27,23,0.85)] via-[rgba(20,32,28,0.70)] to-[rgba(20,32,28,0.20)]" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-28 flex flex-col justify-center">
        <div className="w-full max-w-[672px] flex flex-col items-start gap-3 sm:gap-4">
          <span className="text-xs font-bold text-[#B3C7BD] tracking-[3px] uppercase">
            {hero.eyebrow}
          </span>

          <h1 className="font-['Playfair_Display'] font-semibold text-3xl sm:text-4xl lg:text-[48px] text-white leading-tight sm:leading-[52px] tracking-[-1.2px]">
            {hero.heading}
          </h1>

          <p className="w-full max-w-[576px] font-light text-sm sm:text-base text-gray-200/90 leading-relaxed sm:leading-[24px]">
            {hero.description}
          </p>

          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-[448px] pt-4"
          >
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={hero.searchPlaceholder}
                className="w-full h-12 pl-6 pr-14 rounded-full bg-white text-sm text-gray-800 placeholder-gray-400 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#244337] transition-all"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="absolute right-1.5 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-[#244337] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={hero.cta.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("articles");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-[#C58940] hover:bg-[#b07833] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{hero.cta.text}</span>
            </a>
            <Link
              to={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 h-10 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20 backdrop-blur-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{hero.secondaryCta.text}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

