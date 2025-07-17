import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products"; // Adjust the import path as necessary

import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RefreshCw,
  Shield,
  Plus,
  Minus,
} from "lucide-react";
import CartPopup from "../components/CartPopup";

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  // Mock product data - in real app, this would come from an API
  const product = getProductById(id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  // Get image for selected color
  const imageSrc =
    product.images && product.images[selectedColor]
      ? product.images[selectedColor]
      : Array.isArray(product.images)
      ? product.images[0]
      : product.image;

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = () => {
    if (!selectedSize) return;

    const addedItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      image: imageSrc,
      size: selectedSize,
      color: selectedColor,
    };

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: addedItem,
        quantity,
      },
    });

    setPopupItem(addedItem);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600">Men's Shoes</p>
            </div>

            {/* Rating */}
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "fill-current" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg">{product.description}</p>
            {/* Color Swatches */}
            <div className="flex space-x-4 mt-4">
              {product.colors.map((color, idx) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color.toLowerCase() === "white"
                        ? "#fff"
                        : color.toLowerCase() === "black"
                        ? "#000"
                        : color.toLowerCase() === "gray"
                        ? "#888"
                        : color.toLowerCase() === "red"
                        ? "#f00"
                        : color.toLowerCase() === "blue"
                        ? "#00f"
                        : color.toLowerCase() === "pink"
                        ? "#f8c"
                        : color.toLowerCase() === "green"
                        ? "#0f0"
                        : color.toLowerCase(),
                  }}
                  aria-label={color}
                ></button>
              ))}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-lg text-center transition-colors ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-full font-semibold flex items-center justify-center transition-colors duration-200 ${
                  selectedSize
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedSize}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </button>

              <button className="w-full border border-gray-300 py-4 px-6 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">
                    Free shipping on orders over $50
                  </span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">30-day return policy</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">1-year warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-2 border-b border-gray-200"
              >
                <span className="font-medium text-gray-900">{key}:</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showPopup && (
        <CartPopup item={popupItem} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default ProductDetail;
