import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProductCard } from "../product-card/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const [displayCount, setDisplayCount] = useState(9);
  const hasMoreProducts = displayCount < products.length;

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 9, products.length));
  };

  const displayedProducts = products.slice(0, displayCount);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        {displayedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {hasMoreProducts && (
        <div className="flex justify-center py-6">
          <Button onClick={handleLoadMore} variant="outline" className="px-8">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
