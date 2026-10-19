import React from "react";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import BestSellersSection from "../components/BestSellersSection";
import ValuePropositionSection from "../components/ValuePropositionSection";
import NewsletterSection from "../components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <ValuePropositionSection />
      <NewsletterSection />
    </>
  );
}

