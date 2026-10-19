import React from "react";
import { ArrowRight, Calendar, Users, Archive, Star } from "lucide-react";
import { aboutData } from "../data/aboutData";

export default function TeamAndStatsSection() {
  const { teamAndStats } = aboutData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar className="w-5 h-5 text-[#244337]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#244337]" />;
      case "Archive":
        return <Archive className="w-5 h-5 text-[#244337]" />;
      case "Award":
        return <Star className="w-5 h-5 text-[#244337]" />;
      default:
        return <Star className="w-5 h-5 text-[#244337]" />;
    }
  };

  return (
    <section className="w-full bg-[#FAF9F5] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12">
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-4 flex flex-col items-start gap-4 sm:gap-5">
          <span className="text-xs font-bold text-[#446252] tracking-[3px] uppercase">
            {teamAndStats.eyebrow}
          </span>

          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#1E3329] leading-tight tracking-[-0.9px]">
            {teamAndStats.heading}
          </h2>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed pt-1">
            {teamAndStats.description}
          </p>

          <div className="pt-2">
            <a
              href={teamAndStats.cta.href}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#233831] text-white text-sm font-medium tracking-[0.35px] hover:bg-[#1a2b25] transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <span>{teamAndStats.cta.text}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 w-full flex items-center justify-center">
          <div className="w-full aspect-[468/320] max-w-[480px] bg-[#F5F5F4] rounded-2xl border border-[#E7E5E4]/80 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
            <img
              src={teamAndStats.image}
              alt={teamAndStats.heading}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col justify-center gap-5 sm:gap-6 w-full">
          {teamAndStats.metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F5F5F4] border border-[#E7E5E4]/80 flex items-center justify-center shrink-0 group-hover:bg-[#EEF3EE] transition-colors">
                {renderIcon(metric.iconName)}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-heading font-bold text-2xl text-[#1E3329] leading-tight">
                    {metric.value}
                  </span>
                  {metric.hasStar && (
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  )}
                </div>
                <span className="text-xs font-medium text-[#78716C] leading-tight mt-0.5">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

