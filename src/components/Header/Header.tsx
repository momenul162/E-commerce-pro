import { useState } from "react";
import { ShoppingCart, Menu, X, Search, UserCircle2, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold text-primary">
              City Style
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className="text-gray-600 hover:text-primary hover:font-semibold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/categories"
              className="text-gray-600 hover:text-primary hover:font-semibold transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary hover:font-semibold transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary hover:font-semibold transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="w-5 h-5 text-gray-600" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/login">
                <UserCircle2 className="w-5 h-5 text-gray-600" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/admin/dashboard">
                <LayoutDashboard className="w-5 h-5 text-gray-600" />
              </Link>
            </Button>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/shop" className="text-gray-600 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">
              Login
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-primary transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
