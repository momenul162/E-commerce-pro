import DashboardLayout from "@/layout/DashboardLayout";
import { Clock, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-muted-foreground">
            Track your orders, manage your profile, and continue shopping.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600">
                <ShoppingBag size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <h3 className="text-2xl font-semibold">12</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-50 text-green-600">
                <Package size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Orders</p>
                <h3 className="text-2xl font-semibold">3</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <h3 className="text-2xl font-semibold">$1,248</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-amber-50 text-amber-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Wishlist Items</p>
                <h3 className="text-2xl font-semibold">8</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Total</th>
                  <th className="pb-3 font-medium sr-only">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4">#ORD-123456</td>
                  <td className="py-3 pr-4">June 15, 2023</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-600">
                      Delivered
                    </span>
                  </td>
                  <td className="py-3 pr-4">$149.99</td>
                  <td className="py-3 text-right">
                    <Link to="/customer/orders" className="text-sm text-primary hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">#ORD-789012</td>
                  <td className="py-3 pr-4">May 28, 2023</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-50 text-amber-600">
                      Shipped
                    </span>
                  </td>
                  <td className="py-3 pr-4">$249.99</td>
                  <td className="py-3 text-right">
                    <Link to="/customer/orders" className="text-sm text-primary hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">#ORD-345678</td>
                  <td className="py-3 pr-4">May 12, 2023</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-600">
                      Delivered
                    </span>
                  </td>
                  <td className="py-3 pr-4">$99.99</td>
                  <td className="py-3 text-right">
                    <Link to="/customer/orders" className="text-sm text-primary hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <Link to="/customer/orders" className="text-sm text-primary hover:underline">
                View all orders →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
