import { Button } from "@/components/ui/button";
import DashboardLayout from "@/layout/DashboardLayout";
import { Badge } from "@/src/components/ui/badge";
import { Table } from "@/src/components/ui/table";
import { Search, UserCog, Ban, CheckCircle } from "lucide-react";

const AdminCustomers = () => {
  // Sample data for demonstration
  const customers = [
    {
      id: "CUST-1234",
      name: "John Doe",
      email: "john.doe@example.com",
      orders: 7,
      spent: 499.95,
      status: "active",
      joined: "2023-01-15",
    },
    {
      id: "CUST-2345",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      orders: 12,
      spent: 899.5,
      status: "active",
      joined: "2022-11-23",
    },
    {
      id: "CUST-3456",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      orders: 3,
      spent: 149.97,
      status: "blocked",
      joined: "2023-03-05",
    },
    {
      id: "CUST-4567",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      orders: 21,
      spent: 1299.75,
      status: "active",
      joined: "2022-06-18",
    },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">Manage your customer accounts</p>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search customers..."
              className="pl-10 w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Export</Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <thead className="bg-muted/50">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Orders</th>
                <th className="py-3 px-4 text-left">Spent</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Joined</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="py-3 px-4 font-medium">{customer.id}</td>
                  <td className="py-3 px-4">{customer.name}</td>
                  <td className="py-3 px-4">{customer.email}</td>
                  <td className="py-3 px-4">{customer.orders}</td>
                  <td className="py-3 px-4">${customer.spent.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    {customer.status === "active" ? (
                      <Badge className="bg-green-500">Active</Badge>
                    ) : (
                      <Badge className="bg-red-500">Blocked</Badge>
                    )}
                  </td>
                  <td className="py-3 px-4">{customer.joined}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <UserCog className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      {customer.status === "active" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Ban className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      //{" "}
    </DashboardLayout>
  );
};

export default AdminCustomers;
