
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CartSummaryProps {
  subtotal: number;
}

export const CartSummary = ({ subtotal }: CartSummaryProps) => {
  const shipping = 40;
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + shipping + tax;

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (18%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button className="w-full">
        Proceed to Checkout
      </Button>
    </Card>
  );
};
