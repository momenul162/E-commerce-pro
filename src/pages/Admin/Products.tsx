import { useState } from "react";
import { Edit, Plus, Search, Trash } from "lucide-react";
import { products } from "@/assets/data";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import DashboardLayout from "@/layout/DashboardLayout";

const AdminProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleEdit = (productId: number) => {
    toast.success(`You're now editing product #${productId}`);
  };

  const handleDelete = (productId: number) => {
    toast.warning(`Are you sure you want to delete product #${productId}?`);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">Manage your product inventory</p>
          </div>
          <Link
            to="/admin/products/add"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            <Plus size={16} />
            Add Product
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
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
          <select className="h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-sm font-medium">Product</th>
                  <th className="px-6 py-3 text-sm font-medium">Price</th>
                  <th className="px-6 py-3 text-sm font-medium">Category</th>
                  <th className="px-6 py-3 text-sm font-medium">Stock</th>
                  <th className="px-6 py-3 text-sm font-medium">Rating</th>
                  <th className="px-6 py-3 text-sm font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/30">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-muted">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`${
                          product.stock > 10
                            ? "text-green-600"
                            : product.stock > 0
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-amber-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <Edit size={16} className="text-muted-foreground" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          <Trash size={16} className="text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No products found</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminProducts;
