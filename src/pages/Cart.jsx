import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext"; // adjust the path as needed
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed
const Cart = () => {
  const { state, dispatch } = useCart();
  const cartItems = state.items;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const updateQuantity = (id, size, color, quantity) => {
    if (quantity >= 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, size, color, quantity },
      });
    }
  };

  const removeItem = (id, size, color) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id, size, color },
    });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Add some items to your cart to get started
            </p>
            <Link
              to={"/products"}
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Continue Shopping
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Items</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex items-center space-x-4"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.color,
                            item.quantity - 1
                          )
                        }
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.color,

                            item.quantity + 1
                          )
                        }
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id, item.size, item.color)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full mt-6 bg-black text-white py-3 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <Link to="/products" className="text-black hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-100 rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Shipping Information
              </h3>
              <p className="text-sm text-gray-600">
                Free shipping on orders over $50. Standard delivery takes 3-5
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
