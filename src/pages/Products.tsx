
import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Skincare', 'Makeup', 'Fragrance', 'Hair Care', 'Tools'];

  const products = [
    {
      id: '1',
      name: 'Radiant Glow Foundation',
      price: 42,
      originalPrice: 52,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 124,
      category: 'Makeup'
    },
    {
      id: '2',
      name: 'Velvet Matte Lipstick',
      price: 28,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 89,
      category: 'Makeup'
    },
    {
      id: '3',
      name: 'Hydrating Night Serum',
      price: 65,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      category: 'Skincare'
    },
    {
      id: '4',
      name: 'Eyeshadow Palette Pro',
      price: 48,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 203,
      category: 'Makeup'
    },
    {
      id: '5',
      name: 'Vitamin C Brightening Cream',
      price: 38,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 167,
      category: 'Skincare'
    },
    {
      id: '6',
      name: 'Precision Eyeliner',
      price: 22,
      image: 'https://images.unsplash.com/photo-1583241800410-21be75ca81be?w=400&h=400&fit=crop',
      rating: 4.5,
      reviewCount: 91,
      category: 'Makeup'
    },
    {
      id: '7',
      name: 'Rose Garden Perfume',
      price: 85,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 134,
      category: 'Fragrance'
    },
    {
      id: '8',
      name: 'Gentle Cleansing Foam',
      price: 32,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 198,
      category: 'Skincare'
    },
    {
      id: '9',
      name: 'Volumizing Mascara',
      price: 35,
      originalPrice: 42,
      image: 'https://images.unsplash.com/photo-1631214127258-2db58e8a6d5c?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 156,
      category: 'Makeup'
    },
    {
      id: '10',
      name: 'Nourishing Hair Oil',
      price: 45,
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 87,
      category: 'Hair Care'
    },
    {
      id: '11',
      name: 'Professional Makeup Brushes',
      price: 68,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 234,
      category: 'Tools'
    },
    {
      id: '12',
      name: 'Anti-Aging Retinol Cream',
      price: 78,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 189,
      category: 'Skincare'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of premium beauty products designed to enhance your natural beauty
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-pink-600 hover:bg-pink-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <span className="text-gray-600">
              {filteredProducts.length} products
            </span>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 gap-8'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Beauty Updates
            </h2>
            <p className="text-pink-100 text-lg mb-8">
              Be the first to know about new products, beauty tips, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
