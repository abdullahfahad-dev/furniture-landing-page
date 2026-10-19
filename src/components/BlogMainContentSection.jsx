import React, { useState, useMemo } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogData } from "../data/blogData";
import BlogArticleCard from "./BlogArticleCard";
import BlogSidebar from "./BlogSidebar";

export default function BlogMainContentSection() {
  const { main } = blogData;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const categoriesWithCounts = useMemo(() => {
    return main.categories.map((cat) => ({
      ...cat,
      count:
        cat.id === "all"
          ? main.articles.length
          : main.articles.filter((art) => art.categorySlug === cat.id).length,
    }));
  }, [main.categories, main.articles]);

  const filteredArticles = useMemo(() => {
    let list = [...main.articles];

    if (selectedCategory !== "all") {
      list = list.filter((art) => art.categorySlug === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.description.toLowerCase().includes(q) ||
          art.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [main.articles, selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));

  const displayedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, currentPage, itemsPerPage]);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <section id="articles" className="w-full bg-[#FAF8F5] py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E9E6DD]">
            <div className="space-y-1 max-w-lg">
              <span className="text-[11px] font-bold text-[#77807A] tracking-[1.1px] uppercase">
                {main.header.eyebrow}
              </span>
              <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#0C1A16]">
                {main.header.heading}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                {main.header.description}
              </p>
            </div>

            <a
              href={main.header.viewAllHref}
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B382F] hover:text-[#244337] transition-colors shrink-0 cursor-pointer self-start sm:self-end"
            >
              <span>{main.header.viewAllText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {displayedArticles.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#EDE9E1]">
              <p className="font-['Playfair_Display'] text-xl font-bold text-gray-800">
                No articles found
              </p>
              <p className="text-xs text-gray-500 mt-1 mb-4">
                Try searching with different keywords or choosing another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-[#244337] text-white text-xs font-semibold rounded-full hover:bg-emerald-950 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedArticles.map((article) => (
                <BlogArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous Page"
              className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
                  currentPage === pageNum
                    ? "bg-[#152B24] text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next Page"
              className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 w-full">
          <BlogSidebar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            categories={categoriesWithCounts}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            recentPosts={main.recentPosts}
          />
        </div>
      </div>
    </section>
  );
}

