import { useState } from "react";
import {
  LayoutGrid,
  Package,
  Users,
  ShoppingCart,
  Settings,
  LogOut,
  DollarSign,
  TrendingUp,
  BarChart,
  Search,
  Plus,
} from "lucide-react";
import { products, users } from "@/assets/data";
import Footer from "@/components/Footer/Footer";

const AdminDashboard = () => {
  // const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  let user = users[1];

  // Mock stats for the dashboard
  const stats = {
    sales: 12580,
    orders: 156,
    customers: 78,
    products: products.length,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
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
        );

      case "products":
        return (
          <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold">Product Management</h3>

              <div className="flex gap-3">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-9 pr-4 py-2 text-sm rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button className="neo-button bg-primary text-primary-foreground px-4 py-2 flex items-center gap-1">
                  <Plus size={16} />
                  Add Product
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Category</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Price</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Stock</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-right p-3 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(0, 5).map((product) => (
                      <tr key={product.id} className="border-b border-border">
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 rounded-md object-cover"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="p-3">{product.category}</td>
                        <td className="p-3">${product.price.toFixed(2)}</td>
                        <td className="p-3">{product.stock}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              product.stock > 10
                                ? "bg-green-100 text-green-800"
                                : product.stock > 0
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.stock > 10
                              ? "In Stock"
                              : product.stock > 0
                              ? "Low Stock"
                              : "Out of Stock"}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 rounded-md text-blue-500 hover:bg-blue-50 transition-colors">
                              Edit
                            </button>
                            <button className="p-1.5 rounded-md text-red-500 hover:bg-red-50 transition-colors">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "customers":
        return (
          <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold">Customer Management</h3>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground">
                Customer management dashboard would appear here
              </p>
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold">Order Management</h3>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground">Order management dashboard would appear here</p>
            </div>
          </div>
        );

      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}

      <main className="flex-1 pt-24 pb-20 px-6 md:px-10 bg-background">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Manage products, orders, customers, and more
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="p-4 flex items-center gap-3 border-b border-border">
                  <img
                    src={user?.avatar || "https://randomuser.me/api/portraits/women/2.jpg"}
                    alt={user?.name || "Admin"}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{user?.name || "Jane Smith"}</h3>
                    <p className="text-xs text-muted-foreground">
                      {user?.email || "jane@example.com"}
                    </p>
                  </div>
                </div>

                <nav className="p-2">
                  <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => setActiveTab("overview")}
                        className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                          activeTab === "overview"
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <LayoutGrid size={18} />
                        <span>Overview</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("products")}
                        className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                          activeTab === "products"
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <Package size={18} />
                        <span>Products</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("orders")}
                        className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                          activeTab === "orders"
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <ShoppingCart size={18} />
                        <span>Orders</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("customers")}
                        className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                          activeTab === "customers"
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <Users size={18} />
                        <span>Customers</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("settings")}
                        className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                          activeTab === "settings"
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <Settings size={18} />
                        <span>Settings</span>
                      </button>
                    </li>
                    <li className="pt-2 mt-2 border-t border-border">
                      <button
                        // onClick={logout}
                        className="w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">{renderContent()}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
