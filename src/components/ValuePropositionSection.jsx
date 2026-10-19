import React from "react";
import { ShieldCheck, Truck, Headphones, ArrowRight } from "lucide-react";
import { valuePropData } from "../data/valuePropData";

export default function ValuePropositionSection() {
  const { leftBanner, rightContent } = valuePropData;

  const renderIcon = (icon) => {
    switch (icon) {
      case "shield":
        return <ShieldCheck className="w-4 h-4 text-[#2D3B36]" />;
      case "truck":
        return <Truck className="w-4 h-4 text-[#2D3B36]" />;
      case "headset":
        return <Headphones className="w-4 h-4 text-[#2D3B36]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] py-10 sm:py-14 md:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="w-full flex flex-col lg:flex-row items-stretch rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#F0EBE3]">
          <div className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[400px] relative overflow-hidden bg-[#171717] flex items-center justify-center">
            <img
              src={leftBanner.image}
              alt={leftBanner.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 md:p-12 lg:px-14">
            <div className="w-full max-w-[560px] flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-[2.42px] uppercase text-[#4B5563]">
                  {rightContent.eyebrow}
                </span>
                <h2 className="font-serif-heading text-[26px] sm:text-[30px] md:text-[34px] leading-tight font-medium text-[#111827]">
                  {rightContent.headline}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#D1D5DB]/60">
                {rightContent.features.map((feature) => (
                  <div key={feature.id} className="flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#2D3B36]/10 text-[#2D3B36] flex items-center justify-center">
                      {renderIcon(feature.icon)}
                    </div>
                    <h4 className="text-[12px] font-bold tracking-[0.6px] uppercase text-[#111827]">
                      {feature.title}
                    </h4>
                    <p className="text-[12px] leading-[18px] text-[#4B5563]">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={rightContent.cta.href}
                  className="inline-flex items-center gap-2 h-9 px-5 bg-[#2D3B36] hover:bg-[#1E2621] text-white text-[12px] font-semibold tracking-[0.3px] rounded-full shadow-sm hover:shadow transition-all duration-300"
                >
                  <span>{rightContent.cta.text}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
