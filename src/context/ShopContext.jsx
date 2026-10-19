import React, { createContext, useContext, useState, useEffect } from "react";
import { shopData } from "../data/shopData";
import { bestSellersData } from "../data/bestSellersData";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("aurevian_cart");
      return saved
        ? JSON.parse(saved)
        : [
            { id: "prod-1", quantity: 1 },
            { id: "prod-2", quantity: 1 },
          ];
    } catch {
      return [
        { id: "prod-1", quantity: 1 },
        { id: "prod-2", quantity: 1 },
      ];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem("aurevian_wishlist");
      return saved ? JSON.parse(saved) : ["prod-1", "prod-2"];
    } catch {
      return ["prod-1", "prod-2"];
    }
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("aurevian_cart", JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem("aurevian_wishlist", JSON.stringify(wishlistItems));
    } catch {
      // ignore
    }
  }, [wishlistItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: product.id, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item !== id));
  };

  const isWishlisted = (id) => wishlistItems.includes(id);

  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const wishlistCount = wishlistItems.length;

  const allKnownProducts = [
    ...shopData.products,
    ...bestSellersData.products.filter(
      (bp) => !shopData.products.some((sp) => sp.id === bp.id)
    ),
  ];

  const populatedCart = cartItems
    .map((item) => {
      const prod =
        allKnownProducts.find((p) => p.id === item.id) || item.product;
      if (!prod) return null;
      return {
        ...prod,
        name: prod.name || prod.title,
        quantity: item.quantity,
      };
    })
    .filter(Boolean);

  const populatedWishlist = wishlistItems
    .map((id) => allKnownProducts.find((p) => p.id === id))
    .filter(Boolean)
    .map((prod) => ({
      ...prod,
      name: prod.name || prod.title,
    }));

  const cartSubtotal = populatedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        populatedCart,
        cartSubtotal,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        wishlistItems,
        populatedWishlist,
        wishlistCount,
        toggleWishlist,
        removeFromWishlist,
        isWishlisted,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        products: shopData.products,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
