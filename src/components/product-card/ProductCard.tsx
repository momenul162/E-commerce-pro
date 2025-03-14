import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface ProductCardProps {
  id?: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, title, price, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the Add to Cart button
    // Get existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    // Check if item already exists in cart
    const existingItemIndex = existingCartItems.findIndex((item: any) => item.id === id);

    if (existingItemIndex !== -1) {
      // If item exists, increment quantity
      existingCartItems[existingItemIndex].quantity += 1;
    } else {
      // If item doesn't exist, add it with quantity 1
      existingCartItems.push({
        id,
        title,
        price,
        image,
        quantity: 1,
      });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    toast.success(`${title} has been added to your cart`);

    // Navigate to cart page
    navigate("/cart");
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.error(`${title} has been ${isFavorite ? "removed from" : "added to"} your wishlist`);
  };

  return (
    <motion.div
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* Sale badge */}
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            SALE
          </div>
          {/* Rating */}
          <div className="absolute bottom-2 left-2 flex items-center bg-black/50 text-white px-2 py-1 rounded-md">
            <Star className="w-3 h-3 fill-current text-yellow-400" />
            <span className="ml-1 text-xs">4.5</span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <span className="text-xs text-gray-500 uppercase tracking-wider">{category}</span>
        <Link to={`/product/${id}`}>
          <h3 className="mt-1 text-lg font-medium text-gray-900 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-lg font-semibold">${price.toFixed(2)}</span>
            <div className="text-sm text-gray-500">
              <span className="line-through">${(price * 1.2).toFixed(2)}</span>
              <span className="ml-2 text-red-500">20% OFF</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleToggleFavorite}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"}`}
              />
            </button>
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick view overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-2">
          <Link
            to={`/product/${id}`}
            className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Quick View
          </Link>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};
