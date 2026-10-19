import React, { useState } from "react";
import { contactData } from "../data/contactData";

export default function ContactNewsletterBanner() {
  const { eyebrow, heading, description, placeholder, buttonText } =
    contactData.newsletterBanner;
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="w-full py-6 sm:py-10 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1232px] mx-auto relative rounded-2xl bg-[#1C3328] overflow-hidden shadow-lg border border-[#244234] px-6 sm:px-10 lg:px-14 py-8 sm:py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C3328] via-[#1C3328]/95 to-[#1C3328]/40 pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="flex flex-col items-start text-left max-w-xl">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] sm:text-[11px] leading-4 tracking-[2.5px] uppercase text-[#C3B7A5] mb-1">
              {eyebrow}
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-[36px] leading-[40px] font-normal text-white tracking-[-0.9px] mb-2">
              {heading}
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] font-light text-xs sm:text-[13px] leading-5 text-[#D4D4D4]">
              {description}
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end">
            <form
              onSubmit={handleSubmit}
              className="w-full sm:w-[448px] max-w-full bg-white rounded-full p-1.5 flex items-center shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#C3B7A5]/50"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent px-4 sm:px-5 py-2 text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 h-9 sm:h-10 px-5 sm:px-6 bg-[#244234] hover:bg-[#1a3328] active:scale-95 text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs tracking-[0.6px] uppercase rounded-full shadow-xs transition-all cursor-pointer"
              >
                {buttonText}
              </button>
            </form>

            {isSubscribed && (
              <p className="text-emerald-300 text-xs mt-2 self-center lg:self-end animate-fade-in font-['Plus_Jakarta_Sans']">
                Thank you for subscribing to our newsletter!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

