import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft, Headphones } from "lucide-react";
import { unauthorizedData } from "../data/unauthorizedData";

export default function UnauthorizedPage() {
  const { code, badge, heading, description, primaryCta, secondaryCta } =
    unauthorizedData;

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-5 sm:px-8 pt-32 pb-20 bg-[#FAF8F5]">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5">
          <ShieldAlert className="w-8 h-8 stroke-[1.8]" />
        </div>

        <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full mb-3">
          {badge} • {code}
        </span>

        <h1 className="font-serif-heading text-3xl sm:text-4xl font-medium text-gray-900 leading-tight">
          {heading}
        </h1>

        <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed mt-3 mb-8 max-w-sm">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            to={primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-7 bg-[#244337] hover:bg-[#1a3329] active:scale-95 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
            <span>{primaryCta.text}</span>
          </Link>

          <Link
            to={secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-7 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 text-sm font-semibold rounded-full transition-all duration-300"
          >
            <Headphones className="w-4 h-4 stroke-[1.8]" />
            <span>{secondaryCta.text}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

