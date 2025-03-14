import { useState } from "react";
import { products, categories } from "@/data/products";
import { Header } from "@/components/Header/Header";
import { ProductList } from "@/components/shop/ProductList";
import { FilterSidebar } from "@/components/shop/FilterSlidebar";
import Footer from "@/components/Footer/Footer";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setPriceRange([0, 1000]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 pt-24">
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
            onResetFilters={handleResetFilters}
          />
          <div className="flex-1">
            <ProductList products={sortedProducts} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
