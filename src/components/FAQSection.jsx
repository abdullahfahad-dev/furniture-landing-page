import React, { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { contactData } from "../data/contactData";

export default function FAQSection() {
  const { eyebrow, heading, viewAllText, viewAllHref, faqs } = contactData.faqSection;
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-10 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1232px] mx-auto flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-left">
          <div>
            <span className="block font-['Plus_Jakarta_Sans'] font-bold text-[11px] leading-4 tracking-[2.2px] uppercase text-[#737373] mb-1">
              {eyebrow}
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-[36px] leading-[40px] font-normal text-[#171717] tracking-[-0.9px]">
              {heading}
            </h2>
          </div>

          <a
            href={viewAllHref}
            className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] font-semibold text-xs tracking-[0.6px] uppercase text-[#404040] hover:text-[#244234] transition-all duration-300 cursor-pointer group pb-1"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-xl overflow-hidden text-left transition-all duration-300 ${
                  isOpen
                    ? "border-[#244234]/40 shadow-sm"
                    : "border-[#ECE7DC] hover:border-[#D1C9BA] hover:shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors duration-200 hover:bg-black/[0.01]"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-['Plus_Jakarta_Sans'] font-medium text-sm transition-colors duration-200 ${
                      isOpen ? "text-[#244234]" : "text-[#171717]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#244234] text-white rotate-45"
                        : "bg-[#F5F5F5] text-[#737373] hover:bg-gray-200/80"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 transition-transform duration-300" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] leading-relaxed text-[#737373] font-['Plus_Jakarta_Sans'] border-t border-[#ECE7DC]/40">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
