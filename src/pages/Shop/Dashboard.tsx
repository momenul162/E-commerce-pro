import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  ShoppingCart,
  Package,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import DashboardLayout from "@/layout/DashboardLayout";

const ShopDashboard = () => {
  // Sample data for demonstration
  const salesData = [
    { name: "Mon", thisWeek: 1200, lastWeek: 1000 },
    { name: "Tue", thisWeek: 1900, lastWeek: 1700 },
    { name: "Wed", thisWeek: 1500, lastWeek: 1400 },
    { name: "Thu", thisWeek: 2200, lastWeek: 1800 },
    { name: "Fri", thisWeek: 1800, lastWeek: 1600 },
    { name: "Sat", thisWeek: 2500, lastWeek: 2200 },
    { name: "Sun", thisWeek: 2100, lastWeek: 1900 },
  ];

  // Sales overview stats
  const statsData = [
    {
      title: "Total Sales",
      value: "$15,240.50",
      change: "+12.5%",
      trend: "up",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Orders",
      value: "368",
      change: "+8.2%",
      trend: "up",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Average Order",
      value: "$41.41",
      change: "+3.1%",
      trend: "up",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Conversion",
      value: "3.2%",
      change: "-0.4%",
      trend: "down",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <DashboardLayout role="shop">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Shop Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your shop overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="p-2 bg-primary/10 rounded-full">{stat.icon}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={
                      stat.trend === "up" ? "text-green-500 text-sm" : "text-red-500 text-sm"
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">vs last week</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="thisWeek" name="This Week" fill="rgba(99, 102, 241, 0.8)" />
                  <Bar dataKey="lastWeek" name="Last Week" fill="rgba(99, 102, 241, 0.2)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Package className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Order #ORD-{1234 + item}</p>
                      <p className="text-sm text-muted-foreground">New order placed by John Doe</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item} hour{item !== 1 ? "s" : ""} ago
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ShopDashboard;
