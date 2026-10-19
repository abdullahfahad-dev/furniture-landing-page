import React from "react";
import { RotateCcw } from "lucide-react";

export default function ShopFilterSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  colors,
  selectedColors,
  onToggleColor,
  materials,
  selectedMaterials,
  onToggleMaterial,
  brands,
  selectedBrands,
  onToggleBrand,
  onResetFilters,
}) {
  const minPrice = 100;
  const maxPrice = 1500;
  const fillPercentage = ((priceRange - minPrice) / (maxPrice - minPrice)) * 100;

  return (
    <aside className="w-full lg:w-[280px] shrink-0 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <h3 className="font-['Playfair_Display'] font-bold text-lg text-gray-900">
          Filters
        </h3>
        <button
          type="button"
          onClick={onResetFilters}
          className="flex items-center gap-1.5 text-xs font-medium text-emerald-800 hover:text-emerald-950 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All</span>
        </button>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-bold tracking-wider uppercase text-gray-700">
          Categories
        </h4>
        <div className="space-y-1.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full flex items-center justify-between py-1.5 px-2.5 rounded-lg text-sm text-left transition-all ${
                  isActive
                    ? "bg-[#244337] text-white font-medium shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold tracking-wider uppercase text-gray-700">
            Price Range
          </h4>
          <span className="text-xs font-bold text-[#244337] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shadow-2xs">
            ${minPrice} - ${priceRange}
          </span>
        </div>
        <div className="space-y-2 pt-2">
          <div className="relative flex items-center">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step={25}
              value={priceRange}
              onChange={(e) => onPriceChange(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#244337] focus:outline-none"
              style={{
                background: `linear-gradient(to right, #244337 0%, #244337 ${fillPercentage}%, #E5E7EB ${fillPercentage}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between items-center text-xs font-semibold text-gray-400">
            <span>${minPrice}</span>
            <span>$750</span>
            <span>${maxPrice}+</span>
          </div>
        </div>
      </div>

      {colors.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-bold tracking-wider uppercase text-gray-700">
            Color
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color) => {
              const isSelected = selectedColors.includes(color.hex);
              return (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => onToggleColor(color.hex)}
                  title={`${color.name} (${color.count})`}
                  aria-label={`${color.name} (${color.count})`}
                  className={`relative w-7 h-7 rounded-full border transition-all transform hover:scale-110 ${
                    isSelected
                      ? "ring-2 ring-offset-2 ring-[#244337] border-white scale-105"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              );
            })}
          </div>
        </div>
      )}

      {materials.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-bold tracking-wider uppercase text-gray-700">
            Material
          </h4>
          <div className="space-y-2">
            {materials.map((mat) => {
              const isChecked = selectedMaterials.includes(mat.id);
              return (
                <label
                  key={mat.id}
                  className="flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:text-gray-900 group"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleMaterial(mat.id)}
                      className="w-4 h-4 rounded text-[#244337] focus:ring-[#244337] border-gray-300"
                    />
                    <span>{mat.label}</span>
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-500">
                    ({mat.count})
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {brands.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-bold tracking-wider uppercase text-gray-700">
            Brand
          </h4>
          <div className="space-y-2">
            {brands.map((brand) => {
              const isChecked = selectedBrands.includes(brand.id);
              return (
                <label
                  key={brand.id}
                  className="flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:text-gray-900 group"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleBrand(brand.id)}
                      className="w-4 h-4 rounded text-[#244337] focus:ring-[#244337] border-gray-300"
                    />
                    <span>{brand.label}</span>
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-500">
                    ({brand.count})
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
