import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState({ items: [] });
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.getElementById("razorpay-sdk")) {
      const script = document.createElement("script");
      script.id = "razorpay-sdk";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

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

  // ✅ REGEX validation rules
  const regexRules = {
    fullName: {
      pattern: /^[A-Za-z\s.'-]{2,}$/,
      message: "Enter a valid full name (min 2 characters, no numbers).",
    },
    address: {
      pattern: /^[a-zA-Z0-9\s.,'#\-\/]{5,}$/,
      message:
        "Address must be at least 5 characters and can include letters, numbers, and , . ' # - /",
    },
    city: {
      pattern: /^[A-Za-z\s]{2,}$/,
      message: "Enter a valid city name (letters only).",
    },
    zip: {
      pattern: /^\d{6}$/,
      message: "ZIP Code must be exactly 6 digits.",
    },
    phone: {
      pattern: /^[6-9]\d{9}$/,
      message: "Phone must be 10 digits starting with 6-9.",
    },
  };

  // ✅ Validate a single field using regex
  const validateField = (name, value) => {
    const rule = regexRules[name];
    if (!value.trim()) return "This field is required.";
    if (!rule.pattern.test(value.trim())) return rule.message;
    return "";
  };

  // ✅ Live input change & validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleRazorpay = () => {
    const validationErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) validationErrors[field] = error;
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      alert("⚠️ Please fill all shipping info correctly before paying.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not yet loaded. Try again in a moment.");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Razorpay test key
      amount: Math.round(total * 100), // convert ₹ to paise
      currency: "INR",
      name: "Demo Store",
      description: "Test Transaction",
      handler: function (response) {
        alert(
          "✅ Payment successful!\nPayment ID: " + response.razorpay_payment_id
        );
        localStorage.removeItem("cart");
        setCart({ items: [] }); // ✅ update React state too
        navigate("/");
      },
      prefill: {
        name: form.fullName,
        contact: form.phone,
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // ✅ Form submit
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert("⚠️ Please fix the form errors before proceeding.");
      return;
    }

    localStorage.removeItem("cart");
    setCart({ items: [] }); // ✅ also clear state

    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Summary */}
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

        {/* Shipping Info Form */}
        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-4">Shipping Info</h3>

          <form className="space-y-4" onSubmit={handlePlaceOrder} noValidate>
            {/* Full Name */}
            <div>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.address ? "border-red-500" : ""
                }`}
              />
              {errors.address && (
                <p className="text-sm text-red-600 mt-1">{errors.address}</p>
              )}
            </div>

            {/* City */}
            <div>
              <input
                name="city"
                type="text"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.city ? "border-red-500" : ""
                }`}
              />
              {errors.city && (
                <p className="text-sm text-red-600 mt-1">{errors.city}</p>
              )}
            </div>

            {/* ZIP Code */}
            <div>
              <input
                name="zip"
                type="text"
                placeholder="ZIP / PIN Code"
                value={form.zip}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.zip ? "border-red-500" : ""
                }`}
              />
              {errors.zip && (
                <p className="text-sm text-red-600 mt-1">{errors.zip}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Place Order Button */}
            <div className="text-right pt-4 flex flex-col gap-3">
              {/* Razorpay Online Payment Button */}
              <button
                type="button"
                onClick={handleRazorpay}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Pay ₹{total.toFixed(2)} Online
              </button>

              {/* Cash on Delivery */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Place Order (COD)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
