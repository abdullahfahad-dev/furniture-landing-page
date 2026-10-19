import React from "react";
import { Sparkles, Truck, ShieldCheck, Heart, Leaf } from "lucide-react";
import { aboutData } from "../data/aboutData";

export default function WhyChooseUsSection() {
  const { whyChooseUs } = aboutData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#244337]" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-[#244337]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#244337]" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-[#244337]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#244337]" />;
    }
  };

  return (
    <section className="w-full bg-[#F4F2EA]/60 border-y border-[#E7E5E4]/60 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12">
      <div className="max-w-[1184px] mx-auto space-y-12 sm:space-y-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          <div className="w-full max-w-[576px] space-y-2">
            <span className="text-xs font-bold text-[#446252] tracking-[3px] uppercase">
              {whyChooseUs.eyebrow}
            </span>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#1E3329] leading-tight">
              {whyChooseUs.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed pt-1">
              {whyChooseUs.description}
            </p>
          </div>

          <div className="self-end md:self-auto flex items-center gap-3 pr-2 select-none">
            <div className="text-right font-handwritten text-2xl sm:text-[30px] font-semibold text-[#395345] leading-tight -rotate-3">
              <p>{whyChooseUs.badgeMotto.line1}</p>
              <p>{whyChooseUs.badgeMotto.line2}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#244337]/10 flex items-center justify-center -rotate-12">
              <Leaf className="w-5 h-5 text-[#244337]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUs.features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-7 rounded-2xl border border-[#E7E5E4]/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#EEF3EE] flex items-center justify-center  transition-colors">
                {renderIcon(feature.iconName)}
              </div>

              <h3 className="font-sans font-semibold text-base text-[#1E3329] pt-2">
                {feature.title}
              </h3>

              <p className="font-sans text-sm text-[#78716C] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
