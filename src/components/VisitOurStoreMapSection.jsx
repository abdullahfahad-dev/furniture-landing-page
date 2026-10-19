import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowRight } from "lucide-react";
import { contactData } from "../data/contactData";

const customPinIcon = L.divIcon({
  className: "custom-leaflet-marker",
  html: `
    <div style="background-color: #244234; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.25); border: 2px solid #FFFFFF;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -34],
});

export default function VisitOurStoreMapSection() {
  const { map, info } = contactData.visitStoreSection;

  return (
    <section className="w-full py-6 sm:py-10 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1232px] mx-auto bg-[#FAF8F5] border border-[#ECE7DC] rounded-2xl shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[420px] bg-[#EBF0E9] overflow-hidden z-0">
          <MapContainer
            center={map.center}
            zoom={map.zoom}
            scrollWheelZoom={false}
            className="w-full h-full min-h-[350px] sm:min-h-[420px] z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={map.center} icon={customPinIcon}>
              <Popup className="font-['Plus_Jakarta_Sans']">
                <div className="text-left py-1">
                  <p className="font-bold text-xs text-[#171717]">{map.pin.title}</p>
                  <p className="text-[11px] text-gray-600 mt-0.5">{map.pin.location}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="lg:col-span-5 relative bg-[#F6F3EC] p-8 sm:p-12 flex flex-col justify-center text-left overflow-hidden">
          <img
            src={info.plantImage}
            alt="Tree decor"
            className="absolute right-0 bottom-0 w-36 sm:w-48 h-auto object-contain pointer-events-none select-none z-0"
          />

          <div className="relative z-10 max-w-[380px] space-y-3">
            <span className="block font-['Plus_Jakarta_Sans'] font-bold text-[11px] leading-4 tracking-[2.2px] uppercase text-[#737373]">
              {info.eyebrow}
            </span>

            <div>
              <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-[36px] leading-[40px] font-normal text-[#171717] tracking-[-0.9px]">
                {info.heading}
              </h2>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] font-light text-sm leading-[23px] text-[#525252] pt-1">
              {info.description}
            </p>

            <div className="pt-4">
              <a
                href={info.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-6 bg-[#244234] hover:bg-[#1a3328] active:scale-95 text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs tracking-[0.6px] uppercase rounded-full shadow-xs transition-all cursor-pointer"
              >
                <span>{info.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
