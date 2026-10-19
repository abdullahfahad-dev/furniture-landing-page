import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactData } from "../data/contactData";

export default function QuickContactCardsSection() {
  const { quickContactCards } = contactData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-[#244234]" />;
      case "Phone":
        return <Phone className="w-5 h-5 text-[#244234]" />;
      case "Mail":
        return <Mail className="w-5 h-5 text-[#244234]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#244234]" />;
      default:
        return <MapPin className="w-5 h-5 text-[#244234]" />;
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1232px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickContactCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl border border-[#ECE7DC] p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#EAF0EC] flex items-center justify-center shrink-0">
              {renderIcon(card.iconName)}
            </div>

            <div className="space-y-1.5 text-left">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-[#171717]">
                {card.title}
              </h3>
              <div className="font-['Plus_Jakarta_Sans'] text-xs sm:text-[13px] leading-relaxed text-[#525252]">
                <p className="font-medium text-[#171717]">{card.line1}</p>
                <p className="text-gray-500">{card.line2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

