import React, { useState } from "react";
import { Mail } from "lucide-react";
import { newsletterData } from "../data/newsletterData";

export default function NewsletterSection() {
  const { heading, description, placeholder, buttonText } = newsletterData;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="relative w-full bg-[#0D1310] border-b border-white/10 py-16 sm:py-20 px-5 sm:px-8 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #2D3B36 0%, rgba(45, 59, 54, 0) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[576px] mx-auto flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D1D5DB] mb-4">
          <Mail className="w-4 h-4 stroke-[1.8]" />
        </div>

        <h2 className="font-serif-heading text-[28px] sm:text-[32px] md:text-[34px] font-medium text-white leading-tight">
          {heading}
        </h2>

        <p className="text-[13px] sm:text-[14px] text-[#9CA3AF] font-light max-w-[420px] mt-2 mb-6 sm:mb-8">
          {description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[448px] bg-white rounded-full p-1 sm:p-1.5 flex items-center shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#526859]/50"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={placeholder}
            className="w-full bg-transparent px-4 py-2 text-[13px] sm:text-[14px] text-gray-800 placeholder-[#9CA3AF] focus:outline-none rounded-l-full"
          />

          <button
            type="submit"
            className="shrink-0 h-9 sm:h-10 px-5 sm:px-6 bg-[#526859] hover:bg-[#435549] text-white text-[12px] font-semibold tracking-[0.5px] rounded-full transition-all duration-300 shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
          >
            {buttonText}
          </button>
        </form>

        {subscribed && (
          <p className="text-emerald-400 text-xs sm:text-sm mt-3 animate-fadeIn">
            Thank you for subscribing to our newsletter!
          </p>
        )}
      </div>
    </section>
  );
}
