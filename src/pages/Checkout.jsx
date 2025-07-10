import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState({ items: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {
      items: [],
    };
    setCart(storedCart);
  }, []);

  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");
    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🛍️ Cart Summary */}
        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.items.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* 🚚 Shipping Details (Optional Static or Form) */}
        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-4">Shipping Info</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-2 rounded-lg"
              required
            />
          </form>
        </div>
      </div>

      {/* ✅ Place Order Button */}
      <div className="mt-6 text-right">
        <button
          onClick={handlePlaceOrder}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
