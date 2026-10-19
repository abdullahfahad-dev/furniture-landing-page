import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { navData } from "../data/navData";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 50;
    }
    return false;
  });

  const { logo, navLinks } = navData;
  const {
    cartCount,
    wishlistCount,
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    setIsSearchOpen,
    setIsCartDrawerOpen,
    setIsWishlistDrawerOpen,
  } = useShop();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[#1E2621]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-20 flex items-center justify-between">
        <Link to={logo.href} className="flex flex-col text-left group">
          <span className="font-serif-heading text-2xl font-semibold tracking-tight text-white group-hover:text-[#C58940] transition-colors">
            {logo.brandName}
          </span>
          <span className="text-[9px] font-bold tracking-[2.5px] uppercase text-[#D1D5DB]/80 -mt-0.5">
            {logo.tagline}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#C58940] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#C58940] after:w-full"
                    : "text-[#D1D5DB] hover:text-white after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#D1D5DB] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {isSearchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 top-12 w-72 bg-white rounded-xl shadow-xl p-2 border border-gray-100 flex items-center gap-2 z-50 animate-fadeIn"
              >
                <input
                  type="text"
                  autoFocus
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 px-3 py-2 text-xs text-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#244234]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#244234] text-white rounded-lg text-xs font-semibold hover:bg-[#1a3328] cursor-pointer"
                >
                  Go
                </button>
              </form>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsWishlistDrawerOpen(true)}
            aria-label="Wishlist"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#D1D5DB] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Heart className="w-5 h-5 stroke-[1.8]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-4 h-4 px-1 bg-[#C58940] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsCartDrawerOpen(true)}
            aria-label="Shopping Cart"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#D1D5DB] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-4 h-4 px-1 bg-[#C58940] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2]" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#161D19] px-6 py-5 flex flex-col gap-4 animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              placeholder="Search furniture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C58940]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#C58940] text-white rounded-lg text-sm font-semibold hover:bg-[#b07a38] cursor-pointer"
            >
              Search
            </button>
          </form>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                `text-base font-medium py-1.5 transition-colors ${
                  isActive ? "text-[#C58940]" : "text-[#D1D5DB] hover:text-[#C58940]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
