import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">YourStore</h3>
            <p className="text-sm">Providing quality products since 2023</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><Link to="/products" className="text-sm hover:text-blue-400">Products</Link></li>
              <li><Link to="/categories" className="text-sm hover:text-blue-400">Categories</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:text-blue-400">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-blue-400">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm hover:text-blue-400">Returns</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2023 UrbanNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;