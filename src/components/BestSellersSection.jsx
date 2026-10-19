import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { bestSellersData } from "../data/bestSellersData";
import { useShop } from "../context/ShopContext";

export default function BestSellersSection() {
  const { eyebrow, heading, viewAll, products } = bestSellersData;
  const { toggleWishlist, isWishlisted, addToCart } = useShop();
  const [addedIds, setAddedIds] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section
      id="products"
      className="w-full bg-[#F8F7F4] border-y border-[#E5E1DA]/60 py-16 sm:py-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div className="flex flex-col gap-1.5 text-left">
            <span className="text-[11px] font-bold tracking-[2.2px] uppercase text-[#6B7280]">
              {eyebrow}
            </span>
            <h2 className="font-serif-heading text-[28px] sm:text-[30px] leading-tight font-medium text-[#111827]">
              {heading}
            </h2>
          </div>

          <Link
            to={viewAll.href}
            className="group inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.6px] uppercase text-[#1F2937] hover:text-[#C58940] transition-colors self-start sm:self-end"
          >
            <span>{viewAll.text}</span>
            <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const wishActive = isWishlisted(product.id);
            const isAdded = !!addedIds[product.id];

            return (
              <article
                key={product.id}
                className="bg-white rounded-[16px] cursor-pointer border border-[#E5E1DA]/60 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-3 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative w-full h-[224px] bg-[#F3F4F6] rounded-[12px] overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {product.discount && (
                      <span className="absolute top-2.5 left-2.5 bg-[#2D3B36] text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full z-10">
                        {product.discount}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      aria-label="Add to Wishlist"
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          wishActive
                            ? "text-red-500 fill-red-500"
                            : "text-[#374151] hover:text-red-500"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="text-left flex flex-col gap-1.5 pt-1">
                    <h3 className="text-[14px] font-semibold text-[#111827] line-clamp-1">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5 text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-[#9CA3AF]">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-0.5">
                      <span className="text-[16px] font-bold text-[#111827]">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[12px] font-normal text-[#9CA3AF] line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className={`mt-4 w-full h-9 active:scale-[0.98] text-white text-[12px] font-semibold rounded-[8px] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow ${
                    isAdded
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-[#2D3B36] hover:bg-[#1E2621]"
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
