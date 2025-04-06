import { Table } from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Printer, X, Check, Package } from "lucide-react";
import DashboardLayout from "@/layout/DashboardLayout";

const AdminOrders = () => {
  // Sample data for demonstration
  const orders = [
    {
      id: "ORD-1234",
      customer: "John Doe",
      date: "2023-08-15",
      status: "completed",
      total: 129.99,
      items: 3,
    },
    {
      id: "ORD-2345",
      customer: "Jane Smith",
      date: "2023-08-14",
      status: "processing",
      total: 79.5,
      items: 2,
    },
    {
      id: "ORD-3456",
      customer: "Mike Johnson",
      date: "2023-08-13",
      status: "pending",
      total: 199.99,
      items: 4,
    },
    {
      id: "ORD-4567",
      customer: "Sarah Williams",
      date: "2023-08-12",
      status: "cancelled",
      total: 59.99,
      items: 1,
    },
  ];

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
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Manage Orders</h1>
            <p className="text-muted-foreground">View and manage customer orders</p>
          </div>
          <Button>
            <Printer className="mr-2 h-4 w-4" />
            Print Summary
          </Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <thead className="bg-muted/50">
              <tr>
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-left">Items</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4">{getStatusBadge(order.status)}</td>
                  <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4">{order.items}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Package className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      {order.status === "pending" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminOrders;
