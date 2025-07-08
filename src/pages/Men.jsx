import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Star, Heart, ArrowRight } from "lucide-react";

const Men = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  const menProducts = [
    {
      id: 1,
      name: "Air Max 270",
      price: "$150",
      originalPrice: "$180",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "shoes",
      rating: 4.5,
      reviews: 127,
      colors: ["black", "white", "red"],
      sale: true,
    },
    {
      id: 2,
      name: "Air Force 1",
      price: "$120",
      image:
        "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "shoes",
      rating: 4.8,
      reviews: 342,
      colors: ["white", "black", "red"],
      sale: false,
    },
    {
      id: 3,
      name: "Dri-FIT Training Shirt",
      price: "$35",
      image:
        "https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "clothing",
      rating: 4.3,
      reviews: 156,
      colors: ["black", "white", "gray"],
      sale: false,
    },
    {
      id: 4,
      name: "Pro Flex Shorts",
      price: "$45",
      originalPrice: "$60",
      image:
        "https://images.pexels.com/photos/7203045/pexels-photo-7203045.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "clothing",
      rating: 4.6,
      reviews: 203,
      colors: ["black", "navy", "gray"],
      sale: true,
    },
    {
      id: 5,
      name: "Basketball Jersey",
      price: "$85",
      image:
        "https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "clothing",
      rating: 4.4,
      reviews: 89,
      colors: ["black", "white", "red"],
      sale: false,
    },
    {
      id: 6,
      name: "Running Cap",
      price: "$25",
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "accessories",
      rating: 4.2,
      reviews: 67,
      colors: ["black", "white", "navy"],
      sale: false,
    },
  ];

  const subcategories = [
    { id: "all", name: "All Men's" },
    { id: "shoes", name: "Shoes" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts =
    selectedSubcategory === "all"
      ? menProducts
      : menProducts.filter(
          (product) => product.subcategory === selectedSubcategory
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200)",
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              MEN'S COLLECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Gear up for greatness with performance-driven designs
            </p>
            <Link
              to="#products"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">Find your perfect gear</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Men's Shoes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">SHOES</h3>
                  <p className="text-lg">Performance & Style</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Men's Clothing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">CLOTHING</h3>
                  <p className="text-lg">Train in Comfort</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Men's Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">ACCESSORIES</h3>
                  <p className="text-lg">Complete Your Look</p>
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
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
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
                      ? "bg-black text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-black text-white"
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
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      SALE
                    </div>
                  )}

                  {/* Heart Icon */}
                  <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
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
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                          color === "black"
                            ? "bg-black"
                            : color === "white"
                            ? "bg-white"
                            : color === "red"
                            ? "bg-red-500"
                            : color === "blue"
                            ? "bg-blue-500"
                            : color === "gray"
                            ? "bg-gray-500"
                            : color === "navy"
                            ? "bg-blue-900"
                            : "bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-200 text-center inline-block"
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
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">UNLEASH YOUR POTENTIAL</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From the gym to the streets, our men's collection is designed to
            keep you performing at your best.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Men;
