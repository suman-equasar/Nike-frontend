// components/CartPopup.jsx
import React, { useEffect } from "react";

const CartPopup = ({ item, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // hide after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed top-5 right-5 bg-white shadow-lg rounded-lg p-4 z-50 border w-80 flex items-center gap-4 animate-fadeIn">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-600 text-sm">
          Size: {item.size}, Color: {item.color}
        </p>
        <p className="text-gray-800 font-bold">₹{item.price}</p>
      </div>
    </div>
  );
};

export default CartPopup;
