import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  ShoppingCart,
  Heart,
  User,
  Package,
  Users,
  ShoppingBag,
  LogOut,
  Store,
} from "lucide-react";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface SidebarItem {
  title: string;
  icon: ReactNode;
  href: string;
}

interface DashboardLayoutProps {
  children: ReactNode;
  role: "customer" | "admin" | "shop";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const location = useLocation();

  const roleTitle = {
    customer: "Customer",
    admin: "Admin",
    shop: "Shop",
  }[role];

  const links: Record<string, SidebarItem[]> = {
    customer: [
      { title: "Dashboard", icon: <Home size={20} />, href: "/customer/dashboard" },
      { title: "Orders", icon: <ShoppingCart size={20} />, href: "/customer/orders" },
      { title: "Wishlist", icon: <Heart size={20} />, href: "/customer/wishlist" },
      { title: "Profile", icon: <User size={20} />, href: "/customer/profile" },
    ],
    admin: [
      { title: "Dashboard", icon: <Home size={20} />, href: "/admin/dashboard" },
      { title: "Products", icon: <Package size={20} />, href: "/admin/products" },
      { title: "Orders", icon: <ShoppingBag size={20} />, href: "/admin/orders" },
      { title: "Customers", icon: <Users size={20} />, href: "/admin/customers" },
    ],
    shop: [
      { title: "Dashboard", icon: <Home size={20} />, href: "/shop/dashboard" },
      { title: "Inventory", icon: <Package size={20} />, href: "/shop/inventory" },
      { title: "Orders", icon: <ShoppingBag size={20} />, href: "/shop/orders" },
      { title: "POS", icon: <Store size={20} />, href: "/shop/pos" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 mt-16">
        {/* Sidebar */}
        <aside className="w-64 hidden md:flex flex-col border-r border-border bg-white">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold">{roleTitle} Dashboard</h2>
          </div>
          <nav className="flex-1 py-6">
            <ul className="space-y-1 px-3">
              {links[role].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 text-foreground/70 hover:text-foreground rounded-md transition-colors"
            >
              <LogOut size={20} />
              Back to Home
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Mobile Header */}
          <div className="block md:hidden p-4 border-b border-border sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">{roleTitle} Dashboard</h1>
              <button className="text-foreground p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
