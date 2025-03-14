import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Header } from "@/components/Header/Header";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";

interface CartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: 1,
      title: "Product 1",
      price: 299,
      image: "/placeholder.svg",
      quantity: 2,
    },
    {
      id: 2,
      title: "Product 2",
      price: 199,
      image: "/placeholder.svg",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Shopping Cart ({totalItems} items)</h1>
          {cartItems.length > 0 && (
            <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-600">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button asChild>
              <a href="/shop">Continue Shopping</a>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
            <div className="lg:w-80">
              <CartSummary subtotal={subtotal} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
