import React, { useState } from "react";
import { blogData } from "../data/blogData";

export default function BlogNewsletterBanner() {
  const { newsletter } = blogData;
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="relative w-full min-h-[308px] bg-[#0C1A16] py-14 sm:py-16 px-6 sm:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${newsletter.bgImage})` }}
      />

      <div className="absolute inset-0 bg-[#0C1A16]/55" />

      <div className="relative z-10 w-full max-w-[896px] mx-auto flex flex-col items-center text-center gap-2">
        <span className="text-[11px] font-bold text-[#A1B5AB] tracking-[2.2px] uppercase">
          {newsletter.eyebrow}
        </span>

        <h2 className="font-['Playfair_Display'] font-semibold text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight">
          {newsletter.heading}
        </h2>

        <p className="w-full max-w-[448px] font-light text-xs sm:text-sm text-[#D1D5DB] leading-relaxed pb-4 pt-1">
          {newsletter.description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[576px] bg-white rounded-full p-1.5 flex items-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={newsletter.placeholder}
            className="flex-1 h-10 px-5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="h-10 px-6 sm:px-8 bg-[#24473C] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#1a342c] transition-colors cursor-pointer shrink-0 shadow-sm active:scale-95"
          >
            {newsletter.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

