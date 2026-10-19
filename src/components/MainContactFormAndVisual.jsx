import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { contactData } from "../data/contactData";

export default function MainContactFormAndVisual() {
  const { visual, form } = contactData.mainContactSection;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact-form" className="w-full py-8 sm:py-12 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1232px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-[580px] flex flex-col justify-end p-5 sm:p-7 shadow-xs">
          <img
            src={visual.image}
            alt="Dining visual"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          <div className="relative z-10 w-full bg-[#244234]/95 backdrop-blur-[2px] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl text-left">
            <div className="w-6 h-0.5 bg-[#D4D4D4] mb-3" />
            <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-[28px] leading-tight font-medium text-white tracking-[-0.6px] whitespace-pre-line mb-3">
              {visual.tagline}
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] font-light text-xs sm:text-[13px] leading-relaxed text-[#E5E5E5] mb-5">
              {visual.description}
            </p>
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white transition-transform hover:scale-110">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#ECE7DC] rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col justify-center text-left">
          <div className="mb-8">
            <span className="block font-['Plus_Jakarta_Sans'] font-bold text-[11px] leading-4 tracking-[2.2px] uppercase text-[#A3A3A3] mb-2">
              {form.eyebrow}
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl leading-tight font-normal text-[#171717] tracking-[-0.9px] mb-2">
              {form.heading}
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] font-light text-sm leading-relaxed text-[#737373]">
              {form.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-['Plus_Jakarta_Sans'] font-semibold text-xs text-[#404040] tracking-[0.3px]">
                  Full Name <span className="text-[#C58940]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full h-[46px] px-4 bg-white border border-[#6B7280] rounded-lg text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#244234] focus:ring-1 focus:ring-[#244234] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Plus_Jakarta_Sans'] font-semibold text-xs text-[#404040] tracking-[0.3px]">
                  Email Address <span className="text-[#C58940]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full h-[46px] px-4 bg-white border border-[#6B7280] rounded-lg text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#244234] focus:ring-1 focus:ring-[#244234] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-['Plus_Jakarta_Sans'] font-semibold text-xs text-[#404040] tracking-[0.3px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1234 567890"
                  className="w-full h-[46px] px-4 bg-white border border-[#6B7280] rounded-lg text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#244234] focus:ring-1 focus:ring-[#244234] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Plus_Jakarta_Sans'] font-semibold text-xs text-[#404040] tracking-[0.3px]">
                  Subject <span className="text-[#C58940]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-[46px] pl-4 pr-10 bg-[#F7F5EE] border border-[#E5E1D5] rounded-lg text-sm text-[#404040] focus:outline-none focus:border-[#244234] focus:ring-1 focus:ring-[#244234] appearance-none cursor-pointer"
                  >
                    {form.subjects.map((subj, idx) => (
                      <option key={idx} value={idx === 0 ? "" : subj} disabled={idx === 0}>
                        {subj}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-['Plus_Jakarta_Sans'] font-semibold text-xs text-[#404040] tracking-[0.3px]">
                Message <span className="text-[#C58940]">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-4 bg-[#F7F5EE] border border-[#E5E1D5] rounded-lg text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#244234] focus:ring-1 focus:ring-[#244234] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#244234] hover:bg-[#1a3328] active:scale-[0.99] text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs tracking-[0.6px] uppercase rounded-lg shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{form.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {isSubmitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg text-center animate-fade-in">
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

