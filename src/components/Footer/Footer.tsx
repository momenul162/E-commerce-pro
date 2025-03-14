import { FacebookIcon, InstagramIcon, Mail, TwitterIcon, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">About Us</h3>
            <p className="text-gray-600 text-sm">
              We are dedicated to providing high-quality products and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">1234 Street Name, City Name</p>
              <p className="text-gray-600 text-sm">Phone: (123) 456-7890</p>
              <p className="text-gray-600 text-sm">Email: support@example.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Subscribe to our newsletter</span>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
