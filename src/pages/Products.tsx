
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import ProductsFilters from '../components/ProductsFilters';
import ProductsCategories from '../components/ProductsCategories';
import ProductsGrid from '../components/ProductsGrid';
import ProductsNewsletter from '../components/ProductsNewsletter';

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <ProductsHero />
      
      <ProductsFilters 
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ProductsCategories 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductsGrid 
        products={products}
        selectedCategory={selectedCategory}
        viewMode={viewMode}
      />

      <ProductsNewsletter />

      <Footer />
    </div>
  );
};

export default Products;
