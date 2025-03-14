
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  item: CartProduct;
  onUpdateQuantity: (id: number, increment: boolean) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.title}</h3>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <p className="text-gray-600 mt-1">₹{item.price}</p>
        <div className="flex items-center gap-2 mt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateQuantity(item.id, false)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateQuantity(item.id, true)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
