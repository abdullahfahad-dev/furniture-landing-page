import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Grid, List, ChevronDown, Filter, X } from "lucide-react";
import { shopData } from "../data/shopData";
import ShopFilterSidebar from "./ShopFilterSidebar";
import ShopProductCard from "./ShopProductCard";
import ShopPagination from "./ShopPagination";

export default function ShopCatalogSection() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [priceRange, setPriceRange] = useState(1500);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setCurrentPage(1);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (searchParam) {
      setCurrentPage(1);
    }
  }, [searchParam]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState({});

  const itemsPerPage = 6;

  const categories = useMemo(() => {
    return shopData.categories.map((cat) => ({
      ...cat,
      count:
        cat.id === "all"
          ? shopData.products.length
          : shopData.products.filter((p) => p.categorySlug === cat.id).length,
    }));
  }, []);

  const colors = useMemo(() => {
    return shopData.colors.map((c) => ({
      ...c,
      count: shopData.products.filter((p) => p.colors?.includes(c.hex)).length,
    }));
  }, []);

  const materials = useMemo(() => {
    return shopData.materials.map((m) => ({
      ...m,
      count: shopData.products.filter((p) => p.material === m.id).length,
    }));
  }, []);

  const brands = useMemo(() => {
    return shopData.brands.map((b) => ({
      ...b,
      count: shopData.products.filter((p) => p.brand === b.id).length,
    }));
  }, []);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleColor = (hex) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex]
    );
    setCurrentPage(1);
  };

  const handleToggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
    setCurrentPage(1);
  };

  const handleToggleBrand = (id) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
    setCurrentPage(1);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePriceChange = (price) => {
    setPriceRange(price);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setPriceRange(1500);
    setSelectedColors([]);
    setSelectedMaterials([]);
    setSelectedBrands([]);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let list = [...shopData.products];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    if (searchParam) {
      const q = searchParam.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    list = list.filter((p) => p.price <= priceRange);

    if (selectedColors.length > 0) {
      list = list.filter((p) =>
        p.colors?.some((hex) => selectedColors.includes(hex))
      );
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedBrands.length > 0) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }

    if (sortBy === "price_asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [
    selectedCategory,
    searchParam,
    priceRange,
    selectedColors,
    selectedMaterials,
    selectedBrands,
    sortBy,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <section id="products" className="bg-gray-50/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto space-y-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-gray-500"
        >
          <Link to="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold text-gray-900">Shop</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <h1 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              {shopData.header.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Showing {displayedProducts.length} of {filteredProducts.length}{" "}
              filtered products
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto w-full md:w-auto justify-between md:justify-end">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-xs hover:bg-gray-50"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2 pr-8 text-xs font-medium text-gray-700 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#244337]"
                >
                  {shopData.header.sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#244337] text-white"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-[#244337] text-white"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {searchParam && (
          <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 text-left text-xs">
            <span className="text-gray-500">Searching for:</span>
            <span className="font-semibold text-[#244337] bg-[#EBF0E9] px-2.5 py-1 rounded-md">
              "{searchParam}"
            </span>
            <Link
              to="/shop"
              className="ml-auto inline-flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Search</span>
            </Link>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="hidden lg:block">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <ShopFilterSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                colors={colors}
                selectedColors={selectedColors}
                onToggleColor={handleToggleColor}
                materials={materials}
                selectedMaterials={selectedMaterials}
                onToggleMaterial={handleToggleMaterial}
                brands={brands}
                selectedBrands={selectedBrands}
                onToggleBrand={handleToggleBrand}
                onResetFilters={handleResetFilters}
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <p className="font-['Playfair_Display'] text-xl font-bold text-gray-800">
                  No products found
                </p>
                <p className="text-xs text-gray-500 mt-1 mb-4">
                  Try adjusting your filter settings or resetting filters.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-[#244337] text-white text-xs font-semibold rounded-full hover:bg-emerald-950"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "space-y-4"
                }
              >
                {displayedProducts.map((product) => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}

            <ShopPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                <h3 className="font-['Playfair_Display'] font-bold text-lg text-gray-900">
                  Filter Catalog
                </h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ShopFilterSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                colors={colors}
                selectedColors={selectedColors}
                onToggleColor={handleToggleColor}
                materials={materials}
                selectedMaterials={selectedMaterials}
                onToggleMaterial={handleToggleMaterial}
                brands={brands}
                selectedBrands={selectedBrands}
                onToggleBrand={handleToggleBrand}
                onResetFilters={handleResetFilters}
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="mt-6 w-full py-3 bg-[#244337] text-white text-xs font-semibold rounded-full hover:bg-emerald-950 transition-colors shadow-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


