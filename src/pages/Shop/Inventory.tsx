import { useState } from "react";
import { Search, Filter, Plus, Edit, AlertTriangle } from "lucide-react";
import { products } from "@/assets/data";
import { Badge } from "@/src/components/ui/badge";
import DashboardLayout from "@/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Table } from "@/src/components/ui/table";

const ShopInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = ["all", ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getStockStatus = (stock: number) => {
    if (stock <= 0) {
      return <Badge variant="destructive">Out of stock</Badge>;
    } else if (stock < 10) {
      return (
        <Badge variant="outline" className="text-amber-500 border-amber-500">
          Low stock
        </Badge>
      );
    } else {
      return (
        <Badge variant="outline" className="text-green-500 border-green-500">
          In stock
        </Badge>
      );
    }
  };

  return (
    <DashboardLayout role="shop">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Inventory Management</h1>
            <p className="text-muted-foreground">Add, update, and track your product inventory</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <select
                className="pl-10 h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none pr-8"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Button variant="outline">Export</Button>
          </div>
        </div>

        {/* Products Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <thead className="bg-muted/50">
              <tr>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">SKU</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Stock</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">SKU-{product.id}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{product.category}</Badge>
                  </td>
                  <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {product.stock < 10 && (
                        <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                      )}
                      {product.stock}
                    </div>
                  </td>
                  <td className="py-3 px-4">{getStockStatus(product.stock)}</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Update
                    </Button>
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

export default ShopInventory;
