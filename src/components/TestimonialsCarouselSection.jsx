import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { aboutData } from "../data/aboutData";

export default function TestimonialsCarouselSection() {
  const { testimonials } = aboutData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = testimonials.items.length;

  const changeSlide = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    const prev = currentIndex === 0 ? total - 1 : currentIndex - 1;
    changeSlide(prev);
  };

  const handleNext = () => {
    const next = currentIndex === total - 1 ? 0 : currentIndex + 1;
    changeSlide(next);
  };

  const currentItem = testimonials.items[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const prevItem = testimonials.items[prevIndex];
  const nextItem = testimonials.items[nextIndex];

  return (
    <section className="w-full bg-[#F4F2EA]/50 border-t border-[#E7E5E4]/70 py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#446252] tracking-[3px] uppercase">
            {testimonials.eyebrow}
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#1E3329] leading-tight">
            {testimonials.heading}
          </h2>
        </div>

        <div className="w-full max-w-[1152px] flex items-center justify-center gap-4 sm:gap-6">
          <div className="hidden md:flex relative w-64 lg:w-72 h-52 shrink-0 rounded-2xl border border-[#E7E5E4]/80 overflow-hidden shadow-xs opacity-85 group">
            <img
              src={prevItem.image}
              alt="Previous preview"
              className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
              }`}
            />
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs shadow-md flex items-center justify-center text-[#44403C] hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div
            className={`relative w-full max-w-[520px] bg-white rounded-2xl border border-[#E7E5E4]/80 p-6 sm:p-9 shadow-md flex flex-col justify-between min-h-[260px] sm:min-h-[270px] transition-all duration-300 ease-in-out ${
              isAnimating
                ? "opacity-0 translate-y-2 scale-[0.98]"
                : "opacity-100 translate-y-0 scale-100"
            }`}
          >
            <div>
              <Quote className="w-8 h-8 text-[#244337] fill-[#244337] opacity-80 mb-3" />
              <p className="font-sans italic text-sm sm:text-base text-[#44403C] leading-relaxed">
                {currentItem.quote}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#F5F5F4]">
              <div className="flex items-center gap-3">
                <img
                  src={currentItem.avatar}
                  alt={currentItem.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#233831]/10"
                />
                <div className="flex flex-col">
                  <h4 className="font-sans font-bold text-sm text-[#1E3329]">
                    {currentItem.name}
                  </h4>
                  <span className="font-sans text-xs text-[#78716C]">
                    {currentItem.location}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-8 h-8 rounded-full bg-[#F5F5F4] hover:bg-[#EEF3EE] flex items-center justify-center text-[#57534E] hover:text-[#1E3329] hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex relative w-64 lg:w-72 h-52 shrink-0 rounded-2xl border border-[#E7E5E4]/80 overflow-hidden shadow-xs opacity-85 group">
            <img
              src={nextItem.image}
              alt="Next preview"
              className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
              }`}
            />
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next preview slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs shadow-md flex items-center justify-center text-[#44403C] hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          {testimonials.items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => changeSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-6 bg-[#233831]"
                  : "w-2 bg-[#D6D3D1] hover:bg-[#A8A29E]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
