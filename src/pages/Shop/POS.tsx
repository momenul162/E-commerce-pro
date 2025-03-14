import { useState } from "react";
import { Minus, Package, Plus, Printer, Search, ShoppingCart, X } from "lucide-react";
import { products } from "@/assets/data";
import { toast } from "sonner";
import DashboardLayout from "@/layout/DashboardLayout";

interface CartItem {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ShopPOS = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: (typeof products)[0]) => {
    const existingItem = cart.find((item) => item.product_id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product_id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          product_id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.product_id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCart(
      cart.map((item) =>
        item.product_id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.07; // Assuming 7% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Please add items to the cart before checkout");
      return;
    }

    toast.success(`Receipt printed for ${customerName || "customer"}`);

    // Reset cart and form
    setCart([]);
    setCustomerName("");
    setPaymentMethod("cash");
  };

  return (
    <DashboardLayout role="shop">
      <div className="h-full flex flex-col lg:flex-row gap-6">
        {/* Product Selection */}
        <div className="lg:w-2/3 space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Point of Sale</h1>
            <p className="text-muted-foreground">Process transactions and print receipts</p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-border overflow-hidden cursor-pointer transition-all hover:shadow-md"
                onClick={() => addToCart(product)}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
                    <span className="text-xs text-muted-foreground">Stock: {product.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart and Checkout */}
        <div className="lg:w-1/3 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart size={20} className="mr-2" />
              <h2 className="font-semibold">Current Sale</h2>
            </div>
            {cart.length > 0 && (
              <button
                className="text-sm text-muted-foreground hover:text-destructive"
                onClick={() => setCart([])}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Cart Items */}
          <div className="h-[calc(100vh-24rem)] overflow-y-auto p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-center">
                <Package size={40} className="text-muted-foreground/40 mb-2" />
                <p className="text-muted-foreground">No items in cart</p>
                <p className="text-xs text-muted-foreground">Click on products to add them</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product_id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.name}</h3>
                    <div className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1 rounded-md hover:bg-muted text-muted-foreground"
                      onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm w-6 text-center">{item.quantity}</span>
                    <button
                      className="p-1 rounded-md hover:bg-muted text-muted-foreground"
                      onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                    <button
                      className="p-1 rounded-md hover:bg-red-50 hover:text-red-500 text-muted-foreground ml-1"
                      onClick={() => removeFromCart(item.product_id)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout */}
          <div className="border-t border-border p-4">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (7%)</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-border">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Customer Name</label>
                <input
                  type="text"
                  className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-1">Payment Method</label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="cash">Cash</option>
                  <option value="card">Credit Card</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
            </div>

            <button
              className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              onClick={handleCheckout}
            >
              <Printer size={18} />
              Complete Sale & Print Receipt
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ShopPOS;
