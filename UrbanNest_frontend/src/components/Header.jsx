import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, SearchIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-blue-500 to-indigo-500">
          UrbanNest
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {['Home', 'Products', 'Categories', 'About', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="text-lg text-gray-700 hover:text-indigo-600 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-300">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 w-64 focus:outline-none"
          />
          <button className="bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-600 transition-colors duration-300">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
          <button
            className="md:hidden text-gray-600 hover:text-indigo-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-4 space-y-4 shadow-lg rounded-b-lg">
          {['Home', 'Products', 'Categories', 'About', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="block text-lg text-gray-700 hover:text-indigo-500 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-300">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <button className="bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-600 transition-colors duration-300">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;