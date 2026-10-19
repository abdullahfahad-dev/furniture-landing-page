import React from "react";
import ContactHeroSection from "../components/ContactHeroSection";
import QuickContactCardsSection from "../components/QuickContactCardsSection";
import MainContactFormAndVisual from "../components/MainContactFormAndVisual";
import VisitOurStoreMapSection from "../components/VisitOurStoreMapSection";
import FAQSection from "../components/FAQSection";
import ContactNewsletterBanner from "../components/ContactNewsletterBanner";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      <ContactHeroSection />
      <QuickContactCardsSection />
      <MainContactFormAndVisual />
      <VisitOurStoreMapSection />
      <FAQSection />
      <ContactNewsletterBanner />
    </div>
  );
}
