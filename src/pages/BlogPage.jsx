import React from "react";
import BlogHeroSection from "../components/BlogHeroSection";
import BlogMainContentSection from "../components/BlogMainContentSection";
import BlogNewsletterBanner from "../components/BlogNewsletterBanner";

export default function BlogPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      <BlogHeroSection />
      <BlogMainContentSection />
      <BlogNewsletterBanner />
    </div>
  );
}

