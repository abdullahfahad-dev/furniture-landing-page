import React from "react";
import { Link } from "react-router-dom";
import { X, Trash2, Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function WishlistDrawer() {
  const {
    isWishlistDrawerOpen,
    setIsWishlistDrawerOpen,
    populatedWishlist,
    removeFromWishlist,
    addToCart,
  } = useShop();

  if (!isWishlistDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div
        onClick={() => setIsWishlistDrawerOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <aside className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slide-left text-left">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-gray-900">
                Your Wishlist
              </h3>
              <p className="text-xs text-gray-500">
                {populatedWishlist.length} {populatedWishlist.length === 1 ? "saved item" : "saved items"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsWishlistDrawerOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-gray-100">
          {populatedWishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#ECE7DC] flex items-center justify-center text-gray-400">
                <Heart className="w-7 h-7 stroke-[1.5]" />
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-gray-900 text-sm">
                  Your wishlist is empty
                </p>
                <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                  Save the items you love to review them anytime.
                </p>
              </div>
              <Link
                to="/shop"
                onClick={() => setIsWishlistDrawerOpen(false)}
                className="inline-flex items-center gap-2 h-10 px-6 bg-[#244234] hover:bg-[#1a3328] text-white text-xs font-semibold rounded-full uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                <span>Browse Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            populatedWishlist.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover bg-gray-50 border border-gray-100 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#C58940] font-medium mt-0.5">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="inline-flex items-center gap-1.5 h-8 px-3.5 bg-[#244234] hover:bg-[#1a3328] active:scale-95 text-white text-xs font-semibold rounded-lg transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}
