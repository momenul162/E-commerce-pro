import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import NotFound from "./NotFound";
import Cart from "./pages/Carts";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Reviews from "./pages/Reviews";
import Orders from "./pages/Orders";
import PointOfSales from "./pages/Point-of-sales/POS";
import StockReport from "./pages/Point-of-sales/StockReport";
import AttendanceReport from "./pages/Point-of-sales/AttendanceReport";
import BarcodeManagement from "./pages/Point-of-sales/Barcodemanagement";
import BrandTypeSetup from "./pages/Point-of-sales/BrandTypeSetup";
import DamageLostReports from "./pages/Point-of-sales/DamageLostReports";
import ChallanPage from "./pages/Point-of-sales/ChallanPage";
import EmployeeAttendance from "./pages/Point-of-sales/EmployeeAttendance";
import GroupSetup from "./pages/Point-of-sales/GroupSetup";
import HomePage from "./pages/Point-of-sales/HomePage";
import InvoiceReprint from "./pages/Point-of-sales/InvoiceReprint";
import PackageReport from "./pages/Point-of-sales/PackageReport";
import PriceChange from "./pages/Point-of-sales/PriceChange";
import PurchaseOrderReports from "./pages/Point-of-sales/PurchaseOrderReport";
import CustomerDashboard from "./pages/Customer/Dashboard";
import CustomerOrders from "./pages/Customer/Orders";
import CustomerWishlist from "./pages/Customer/Wishlist";
import CustomerProfile from "./pages/Customer/Profile";
import AdminProducts from "./pages/Admin/Products";
import AdminOrders from "./pages/Admin/Orders";
import AdminCustomers from "./pages/Admin/Customers";
import ShopDashboard from "./pages/Shop/Dashboard";
import ShopInventory from "./pages/Shop/Inventory";
import ShopOrders from "./pages/Shop/Orders";
import ShopPOS from "./pages/Shop/POS";
import AdminDashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />

      {/* Customer Routes */}
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/customer/orders" element={<CustomerOrders />} />
      <Route path="/customer/wishlist" element={<CustomerWishlist />} />
      <Route path="/customer/profile" element={<CustomerProfile />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/products/add" element={<AddProduct />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/customers" element={<AdminCustomers />} />

      {/* Shop Routes */}
      <Route path="/shop/dashboard" element={<ShopDashboard />} />
      <Route path="/shop/inventory" element={<ShopInventory />} />
      <Route path="/shop/orders" element={<ShopOrders />} />
      <Route path="/shop/pos" element={<ShopPOS />} />

      {/* POINT OF SALES ROUTES */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/attendance-report" element={<AttendanceReport />} />
      <Route path="/barcode-management" element={<BarcodeManagement />} />
      <Route path="/brand-type-setup" element={<BrandTypeSetup />} />
      <Route path="/channal" element={<ChallanPage />} />
      <Route path="/damage-lost-reports" element={<DamageLostReports />} />
      <Route path="/employee-attendance" element={<EmployeeAttendance />} />
      <Route path="/group-setup" element={<GroupSetup />} />
      <Route path="/invoice-reprint" element={<InvoiceReprint />} />
      <Route path="/package-report" element={<PackageReport />} />
      <Route path="/price-update" element={<PriceChange />} />
      <Route path="/purchase-order-report" element={<PurchaseOrderReports />} />
      <Route path="/stock-report" element={<StockReport />} />

      <Route path="/account/orders" element={<Orders />} />
      <Route path="/account/wishlist" element={<Wishlist />} />
      <Route path="/account/reviews" element={<Reviews />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
