import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Star, Heart, ArrowRight } from "lucide-react";

const Women = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  const womenProducts = [
    {
      id: 7,
      name: "Air Max 97",
      price: "$170",
      originalPrice: "$200",
      image:
        "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "shoes",
      rating: 4.7,
      reviews: 189,
      colors: ["white", "pink", "silver"],
      sale: true,
    },
    {
      id: 8,
      name: "React Infinity Run",
      price: "$160",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "shoes",
      rating: 4.6,
      reviews: 234,
      colors: ["pink", "white", "purple"],
      sale: false,
    },
    {
      id: 9,
      name: "Yoga Luxe Crop Top",
      price: "$55",
      image:
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "clothing",
      rating: 4.8,
      reviews: 156,
      colors: ["black", "white", "pink"],
      sale: false,
    },
    {
      id: 10,
      name: "Pro Sports Bra",
      price: "$40",
      originalPrice: "$50",
      image:
        "https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "clothing",
      rating: 4.5,
      reviews: 203,
      colors: ["black", "white", "pink"],
      sale: true,
    },
    {
      id: 11,
      name: "Dri-FIT Leggings",
      price: "$65",
      image:
        "https://images.pexels.com/photos/7203045/pexels-photo-7203045.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "clothing",
      rating: 4.9,
      reviews: 312,
      colors: ["black", "gray", "navy"],
      sale: false,
    },
    {
      id: 12,
      name: "Training Headband",
      price: "$18",
      image:
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=500",
      subcategory: "accessories",
      rating: 4.3,
      reviews: 89,
      colors: ["black", "white", "pink"],
      sale: false,
    },
  ];

  const subcategories = [
    { id: "all", name: "All Women's" },
    { id: "shoes", name: "Shoes" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts =
    selectedSubcategory === "all"
      ? womenProducts
      : womenProducts.filter(
          (product) => product.subcategory === selectedSubcategory
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1200)",
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              WOMEN'S COLLECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Empower your journey with style and performance
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
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">Discover your perfect style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Women's Shoes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">SHOES</h3>
                  <p className="text-lg">Step into Confidence</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Women's Clothing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">CLOTHING</h3>
                  <p className="text-lg">Move with Grace</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Women's Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-70 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">ACCESSORIES</h3>
                  <p className="text-lg">Perfect the Details</p>
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
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-white text-gray-700 border-gray-300 hover:border-pink-300"
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
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-pink-500 text-white"
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
                    <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                      SALE
                    </div>
                  )}

                  {/* Heart Icon */}
                  <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-pink-50 transition-colors">
                    <Heart className="w-4 h-4 text-pink-500" />
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
                            : color === "pink"
                            ? "bg-pink-500"
                            : color === "purple"
                            ? "bg-purple-500"
                            : color === "silver"
                            ? "bg-gray-400"
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
                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-colors duration-200 text-center inline-block"
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
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">FIND YOUR STRENGTH</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            From yoga sessions to marathon runs, our women's collection empowers
            you to achieve your goals in style.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Women;
