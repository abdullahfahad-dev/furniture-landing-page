import React, { useState } from "react";
import { Star, Heart, ShoppingBag, Check } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function ShopProductCard({
  product,
  viewMode = "grid",
}) {
  const { isWishlisted, toggleWishlist, addToCart } = useShop();
  const [isAdded, setIsAdded] = useState(false);

  const isFavorite = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center group text-left">
        <div className="relative w-full sm:w-56 h-56 bg-gray-50 rounded-xl overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full ${
                product.badge === "NEW"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-red-500 text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-label="Wishlist"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between w-full">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
                {product.category}
              </span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium text-gray-800">
                  {product.rating}
                </span>
                <span className="text-xs text-gray-400">
                  ({product.reviewsCount})
                </span>
              </div>
            </div>

            <h3 className="font-['Playfair_Display'] font-bold text-lg text-gray-900 group-hover:text-emerald-900 transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-1.5 mt-3">
              {product.colors.map((hex, idx) => (
                <span
                  key={idx}
                  className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-xl text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs line-through text-gray-400">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold transition-all shadow-sm cursor-pointer ${
                isAdded
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-[#244337] hover:bg-emerald-950 active:scale-95"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group text-left">
      <div className="relative w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full ${
              product.badge === "NEW"
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-red-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label="Wishlist"
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </button>

        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
          {product.colors.map((hex, idx) => (
            <span
              key={idx}
              className="w-2.5 h-2.5 rounded-full border border-white/60"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[11px] font-semibold text-emerald-800 tracking-wider uppercase">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-gray-800">
                {product.rating}
              </span>
              <span className="text-[11px] text-gray-400">
                ({product.reviewsCount})
              </span>
            </div>
          </div>

          <h3 className="font-['Playfair_Display'] font-bold text-base sm:text-lg text-gray-900 group-hover:text-emerald-900 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-base sm:text-lg text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-gray-400">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold transition-all shadow-xs cursor-pointer ${
              isAdded
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-[#244337] hover:bg-emerald-950 active:scale-95"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
