import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlogArticleCard({ article }) {
  return (
    <article className="bg-white rounded-2xl border border-[#EDE9E1] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative w-full aspect-[382/208] bg-gray-100 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#1E3B32] text-white text-[11px] font-medium rounded-full shadow-xs tracking-wide">
          {article.category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#0C1A16] group-hover:text-[#244337] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>
          <p className="font-sans text-xs text-gray-600 line-clamp-3 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F2EEE7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-sans font-medium text-xs text-gray-900 leading-tight">
                {article.author.name}
              </span>
              <span className="font-sans text-[10px] text-gray-400">
                {article.date}
              </span>
            </div>
          </div>

          <a
            href={article.readMoreHref}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B382F] hover:text-[#244337] transition-colors group/link cursor-pointer"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
}

