import React from "react";
import AboutUsBannerSection from "../components/AboutUsBannerSection";
import OurStorySection from "../components/OurStorySection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TeamAndStatsSection from "../components/TeamAndStatsSection";
import TestimonialsCarouselSection from "../components/TestimonialsCarouselSection";
import CTABannerSection from "../components/CTABannerSection";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      <AboutUsBannerSection />
      <OurStorySection />
      <WhyChooseUsSection />
      <TeamAndStatsSection />
      <TestimonialsCarouselSection />
      <CTABannerSection />
    </div>
  );
}
