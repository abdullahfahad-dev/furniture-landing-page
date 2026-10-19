import React from "react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { footerData } from "../data/footerData";

export default function Footer() {
  const { brand, columns, contact, bottom } = footerData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#161D19] text-[#D1D5DB] border-t border-white/10 pt-16 sm:pt-20 pb-10">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col gap-14 sm:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 text-left">
          <div className="lg:col-span-2 flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col">
              <span className="font-serif-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {brand.name}
              </span>
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-[#C58940] -mt-0.5">
                {brand.tagline}
              </span>
            </div>

            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#9CA3AF] font-light">
              {brand.description}
            </p>

            <div className="flex flex-col gap-2.5 pt-2 text-xs sm:text-[13px] text-[#D1D5DB]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C58940] shrink-0" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C58940] shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C58940] shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C58940] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C58940] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C58940] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold tracking-[1.5px] uppercase text-white font-sans">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#9CA3AF] hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>{bottom.copyright}</p>

          <div className="flex items-center gap-6">
            {bottom.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C58940] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
