import { products } from "@/assets/data";
import DashboardLayout from "@/layout/DashboardLayout";
import { Heart, ShoppingCart, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CustomerWishlist = () => {
  // For demo purposes, let's assume these are the wishlist items
  const initialWishlist = [1, 5, 7]; // Product IDs
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (productId: number) => {
    setWishlist(wishlist.filter((id) => id !== productId));
    toast.success("The item has been removed from your wishlist");
  };

  const handleAddToCart = (productId: number) => {
    toast.success("The item has been added to your cart");
  };

  const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <DashboardLayout role="customer">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Wishlist</h1>
          <p className="text-muted-foreground">Save items for later and track price changes</p>
        </div>

        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
              >
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="p-2 rounded-full bg-white/90 text-destructive shadow-sm hover:bg-white transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-sm mb-1.5 text-muted-foreground">
                    <span>{product.category}</span>
                  </div>
                  <h3 className="font-medium mb-1.5">{product.name}</h3>
                  <div className="mt-auto flex items-center">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" />
            <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-6">
              Save items you love to your wishlist and find them all in one place.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CustomerWishlist;
