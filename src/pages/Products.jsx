import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Star, Heart } from "lucide-react";

const Products = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Air Max 270",
      price: "$150",
      originalPrice: "$180",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "shoes",
      rating: 4.5,
      reviews: 127,
      colors: ["black", "white", "red"],
      sale: true,
    },
    {
      id: 2,
      name: "React Infinity Run",
      price: "$160",
      image:
        "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "shoes",
      rating: 4.7,
      reviews: 89,
      colors: ["blue", "white", "gray"],
      sale: false,
    },
    {
      id: 3,
      name: "Dri-FIT Training Shirt",
      price: "$35",
      image:
        "https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "clothing",
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
      category: "clothing",
      rating: 4.6,
      reviews: 203,
      colors: ["black", "navy", "gray"],
      sale: true,
    },
    {
      id: 5,
      name: "Air Force 1",
      price: "$120",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "shoes",
      rating: 4.8,
      reviews: 342,
      colors: ["white", "black", "red"],
      sale: false,
    },
    {
      id: 6,
      name: "Sports Bra",
      price: "$40",
      image:
        "https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "clothing",
      rating: 4.4,
      reviews: 78,
      colors: ["black", "white", "pink"],
      sale: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "shoes", name: "Shoes" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">Discover our complete collection</p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Category Filter */}
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                {category.name}
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
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
                          : color === "pink"
                          ? "bg-pink-500"
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
    </div>
  );
};

export default Products;
