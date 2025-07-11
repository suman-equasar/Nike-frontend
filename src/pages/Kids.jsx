import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Star, Heart, ArrowRight } from "lucide-react";
import { getProductsByCategory } from "../data/products"; // Adjust the import path as necessary

const Kids = () => {
  // State for view mode and selected subcategory
  const [viewMode, setViewMode] = useState("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const productRef = useRef(null);

  const handleScrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const kidsProducts = getProductsByCategory("kids");

  const subcategories = [
    { id: "all", name: "All Kids" },
    { id: "shoes", name: "Shoes" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts =
    selectedSubcategory === "all"
      ? kidsProducts
      : kidsProducts.filter(
          (product) => product.subcategory === selectedSubcategory
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-400 to-green-400">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1200)",
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              KIDS' COLLECTION
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6">
              Fuel their passion for play and adventure
            </p>
            <button
              onClick={handleScrollToProducts}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Age
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect fit for every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Little Kids"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">LITTLE KIDS</h3>
                  <p className="text-lg">Ages 3-7 • Sizes 10C-3Y</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Big Kids"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">BIG KIDS</h3>
                  <p className="text-lg">Ages 7-15 • Sizes 3.5Y-7Y</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Everything they need to play their best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kids Shoes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">SHOES</h3>
                  <p className="text-lg">Ready for Adventure</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kids Clothing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">CLOTHING</h3>
                  <p className="text-lg">Comfort Meets Fun</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kids Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">ACCESSORIES</h3>
                  <p className="text-lg">Complete the Look</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            {/* Subcategory Filter */}
            <div className="flex space-x-4">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => setSelectedSubcategory(subcategory.id)}
                  className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                    selectedSubcategory === subcategory.id
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                  }`}
                >
                  {subcategory.name}
                </button>
              ))}
            </div>

            {/* View Mode and Filter */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            ref={productRef}
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
              >
                <div className="relative">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Sale Badge */}
                  {product.sale && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      SALE
                    </div>
                  )}

                  {/* Age Group Badge */}
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.ageGroup === "big-kids"
                      ? "BIG KIDS"
                      : "LITTLE KIDS"}
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute bottom-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors">
                    <Heart className="w-4 h-4 text-blue-500" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Colors */}
                  <div className="flex space-x-2 mb-4">
                    {product.colors.map((color, index) => {
                      const colorLower = color.toLowerCase();
                      return (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                            colorLower === "black"
                              ? "bg-black"
                              : colorLower === "white"
                              ? "bg-white"
                              : colorLower === "red"
                              ? "bg-red-500"
                              : colorLower === "blue"
                              ? "bg-blue-500"
                              : colorLower === "gray"
                              ? "bg-gray-500"
                              : colorLower === "navy"
                              ? "bg-blue-900"
                              : colorLower === "green"
                              ? "bg-green-500"
                              : colorLower === "pink"
                              ? "bg-pink-400"
                              : colorLower === "purple"
                              ? "bg-purple-500"
                              : colorLower === "brown"
                              ? "bg-yellow-900"
                              : colorLower === "orange"
                              ? "bg-orange-400"
                              : "bg-gray-300"
                          }`}
                        ></div>
                      );
                    })}
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-200 text-center inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">PLAY WITHOUT LIMITS</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From playground adventures to sports practice, our kids' collection
            is designed to keep up with their boundless energy.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Kids;
