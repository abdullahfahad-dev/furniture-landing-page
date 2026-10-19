import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { ShopProvider } from "../context/ShopContext";

import CartDrawer from "../components/CartDrawer";
import WishlistDrawer from "../components/WishlistDrawer";

export default function MainLayout() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <WishlistDrawer />
      </div>
    </ShopProvider>
  );
}

