import PaymentPopUp from "../components/paymentPopUp";
import { useState } from "react";
import CartContext from "../cartContext/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderContext from "../cartContext/orderContext";

function MultipleOrderAddress() {
  const {cart, setCart } = useContext(CartContext);
  const { orders, setOrders } = useContext(OrderContext);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
 
  const navigate = useNavigate();
  function PaymentHandler() {
    setOrders([...orders, ...cart]);
    localStorage.setItem("orders", JSON.stringify([...orders, ...cart]));
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setShowPaymentPopup(true);
    setTimeout(() => {
      setShowPaymentPopup(false);
      navigate("/");
    }, 2000);
  }
  return (
    <>
      <div className="address p-4 max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address Line 1</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address Line 2</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Zip Code</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {showPaymentPopup && (
            <div className=" flex items-center justify-center z-50">
              <PaymentPopUp />
            </div>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={() => PaymentHandler()}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Cash on Delivery
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MultipleOrderAddress;
