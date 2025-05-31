
const ProductsNewsletter = () => {
  return (
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
  );
};

export default ProductsNewsletter;
