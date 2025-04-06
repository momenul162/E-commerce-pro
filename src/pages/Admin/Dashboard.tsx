import { useState } from "react";
import { Package, Users, ShoppingCart, BarChart, TrendingUp, DollarSign } from "lucide-react";
import DashboardLayout from "@/layout/DashboardLayout";
import { products, users } from "@/assets/data";

const Dashboard = () => {
  const [user, setUser] = useState<any>({});

  const stats = {
    sales: 12580,
    orders: 156,
    customers: 78,
    products: products.length,
  };

  return (
    <DashboardLayout role="admin">
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
            <p className="text-muted-foreground">Manage products, orders, customers, and more</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Total Sales</p>
                      <h3 className="text-2xl font-bold mt-1">${stats.sales.toLocaleString()}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-green-50 text-green-500">
                      <DollarSign size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs text-green-500">
                    <TrendingUp size={14} className="mr-1" />
                    <span>12% increase</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Total Orders</p>
                      <h3 className="text-2xl font-bold mt-1">{stats.orders}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <ShoppingCart size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs text-green-500">
                    <TrendingUp size={14} className="mr-1" />
                    <span>8% increase</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Customers</p>
                      <h3 className="text-2xl font-bold mt-1">{stats.customers}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-blue-50 text-blue-500">
                      <Users size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs text-green-500">
                    <TrendingUp size={14} className="mr-1" />
                    <span>5% increase</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Products</p>
                      <h3 className="text-2xl font-bold mt-1">{stats.products}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-purple-50 text-purple-500">
                      <Package size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs text-amber-500">
                    <span>2 low stock</span>
                    <span className="text-muted-foreground ml-1">items</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-border flex justify-between items-center">
                    <h3 className="font-semibold">Sales Analytics</h3>
                    <select className="text-sm border border-border rounded-md px-2 py-1">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                  </div>

                  <div className="p-6 h-80 flex items-center justify-center">
                    <BarChart size={36} className="text-muted-foreground/50" />
                    <p className="ml-4 text-muted-foreground">
                      Sales chart visualization would appear here
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h3 className="font-semibold">Recent Customers</h3>
                  </div>

                  <div className="divide-y divide-border">
                    {users
                      .filter((u) => u.role === "customer")
                      .slice(0, 5)
                      .map((customer) => (
                        <div key={customer.id} className="p-4 flex items-center">
                          <img
                            src={customer.avatar}
                            alt={customer.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">{customer.email}</p>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="p-4 border-t border-border bg-muted/50">
                    <button className="text-sm text-primary hover:underline">
                      View All Customers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
