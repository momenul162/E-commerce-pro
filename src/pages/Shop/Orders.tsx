import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import DashboardLayout from "@/layout/DashboardLayout";
import { Badge } from "@/src/components/ui/badge";
import { Table } from "@/src/components/ui/table";
import { Package, Clock, CheckCircle, XCircle, TruckIcon, Search } from "lucide-react";

const ShopOrders = () => {
  // Sample data for demonstration
  const orders = [
    {
      id: "ORD-1234",
      customer: "John Doe",
      date: "2023-08-15",
      status: "completed",
      total: 129.99,
      items: 3,
      payment: "Credit Card",
    },
    {
      id: "ORD-2345",
      customer: "Jane Smith",
      date: "2023-08-14",
      status: "processing",
      total: 79.5,
      items: 2,
      payment: "PayPal",
    },
    {
      id: "ORD-3456",
      customer: "Mike Johnson",
      date: "2023-08-13",
      status: "pending",
      total: 199.99,
      items: 4,
      payment: "Credit Card",
    },
    {
      id: "ORD-4567",
      customer: "Sarah Williams",
      date: "2023-08-12",
      status: "cancelled",
      total: 59.99,
      items: 1,
      payment: "Cash on Delivery",
    },
    {
      id: "ORD-5678",
      customer: "David Brown",
      date: "2023-08-11",
      status: "completed",
      total: 149.5,
      items: 2,
      payment: "Credit Card",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "processing":
        return <TruckIcon className="h-4 w-4 text-blue-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "processing":
        return <Badge className="bg-blue-500">Processing</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <DashboardLayout role="shop">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Order Management</h1>
          <p className="text-muted-foreground">View and manage all shop orders</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <input
            type="text"
            placeholder="Search orders by ID, customer name, or status..."
            className="pl-10 w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Order Tabs */}
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="border rounded-lg overflow-hidden mt-0">
            <Table>
              <thead className="bg-muted/50">
                <tr>
                  <th className="py-3 px-4 text-left">Order ID</th>
                  <th className="py-3 px-4 text-left">Customer</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">Payment</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        {getStatusBadge(order.status)}
                      </div>
                    </td>
                    <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                    <td className="py-3 px-4">{order.payment}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Package className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                        {order.status === "pending" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            Process
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TabsContent>

          {/* Other tabs would show filtered content */}
          <TabsContent value="pending" className="border rounded-lg overflow-hidden mt-0">
            {/* Similar table with filtered orders */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ShopOrders;
