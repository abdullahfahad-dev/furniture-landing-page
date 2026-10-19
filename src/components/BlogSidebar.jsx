import React from "react";
import { Search, ChevronRight } from "lucide-react";

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
  recentPosts,
}) {
  return (
    <aside className="w-full space-y-8">
      <div className="bg-[#F7F5F0] border border-[#ECE8DE] rounded-2xl p-6 space-y-3.5">
        <h3 className="font-['Playfair_Display'] font-bold text-base text-[#0C1A16]">
          Search
        </h3>
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles..."
            className="w-full h-11 pl-4 pr-10 rounded-lg bg-white border border-[#DFDBD0] text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#244337] transition-all"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
        </div>
      </div>

      <div className="bg-[#F7F5F0] border border-[#ECE8DE] rounded-2xl p-6 space-y-4">
        <h3 className="font-['Playfair_Display'] font-bold text-base text-[#0C1A16]">
          Categories
        </h3>
        <div className="space-y-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full flex items-center justify-between py-2 px-2.5 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                  isActive
                    ? "bg-[#244337] text-white font-medium"
                    : "text-gray-700 hover:bg-white hover:text-[#0C1A16]"
                }`}
              >
                <span>{cat.label}</span>
                <div className="flex items-center gap-1 opacity-70">
                  <span>{cat.count}</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-[#F7F5F0] border border-[#ECE8DE] rounded-2xl p-6 space-y-4">
        <h3 className="font-['Playfair_Display'] font-bold text-base text-[#0C1A16]">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="flex items-start gap-3.5 group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-14 h-14 rounded-lg object-cover shrink-0 group-hover:opacity-90 transition-opacity"
              />
              <div className="flex flex-col justify-between h-14 py-0.5">
                <h4 className="font-sans font-semibold text-xs text-gray-800 line-clamp-2 group-hover:text-[#244337] transition-colors leading-snug">
                  {post.title}
                </h4>
                <span className="text-[10px] text-gray-400 font-medium">
                  {post.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

