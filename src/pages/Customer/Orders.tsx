import { useState } from "react";
import { Eye, FileText, X } from "lucide-react";
import { orders } from "@/assets/data";
import DashboardLayout from "@/layout/DashboardLayout";
import { toast } from "sonner";

const CustomerOrders = () => {
  const [filter, setFilter] = useState<string>("all");

  const handleCancel = (orderId: number) => {
    toast.success(`Your request to cancel order #${orderId} has been received.`);
  };

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    return order.status === filter;
  });

  return (
    <DashboardLayout role="customer">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Orders</h1>
          <p className="text-muted-foreground">View and manage your orders</p>
        </div>

        {/* Filter Tabs */}
        <div className="border-b border-border">
          <div className="flex space-x-8">
            <button
              onClick={() => setFilter("all")}
              className={`pb-4 px-2 font-medium text-sm relative ${
                filter === "all" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              All Orders
              {filter === "all" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`pb-4 px-2 font-medium text-sm relative ${
                filter === "pending" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Pending
              {filter === "pending" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              onClick={() => setFilter("processing")}
              className={`pb-4 px-2 font-medium text-sm relative ${
                filter === "processing" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Processing
              {filter === "processing" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              onClick={() => setFilter("shipped")}
              className={`pb-4 px-2 font-medium text-sm relative ${
                filter === "shipped" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Shipped
              {filter === "shipped" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              onClick={() => setFilter("delivered")}
              className={`pb-4 px-2 font-medium text-sm relative ${
                filter === "delivered" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Delivered
              {filter === "delivered" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                  <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full capitalize ${
                      order.status === "delivered"
                        ? "bg-green-50 text-green-600"
                        : order.status === "shipped"
                        ? "bg-blue-50 text-blue-600"
                        : order.status === "processing"
                        ? "bg-purple-50 text-purple-600"
                        : order.status === "pending"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {order.products.map((item) => (
                    <div key={item.product_id} className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                      <div className="flex-1">
                        <h3 className="font-medium">Product #{item.product_id}</h3>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4 justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">
                      Total: <span className="text-lg">${order.total.toFixed(2)}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">Paid via {order.payment_method}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm hover:bg-muted transition-colors">
                      <Eye size={16} />
                      Track Order
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm hover:bg-muted transition-colors">
                      <FileText size={16} />
                      View Invoice
                    </button>
                    {(order.status === "pending" || order.status === "processing") && (
                      <button
                        onClick={() => handleCancel(order.id)}
                        className="flex items-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-md text-sm hover:bg-destructive/10 transition-colors"
                      >
                        <X size={16} />
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No orders found</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerOrders;
