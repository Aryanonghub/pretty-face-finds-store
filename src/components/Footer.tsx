
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-rose-50 border-t border-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                BeautyBloom
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Discover your natural beauty with our premium collection of cosmetics and skincare products. 
              Crafted with love and the finest ingredients for your perfect look.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-pink-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-pink-600">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4 text-pink-500" />
                <span>hello@beautybloom.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4 text-pink-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>123 Beauty St, Cosmetic City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 BeautyBloom. All rights reserved. Made with{' '}
            <Heart className="w-4 h-4 inline text-pink-500" /> for beauty lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
