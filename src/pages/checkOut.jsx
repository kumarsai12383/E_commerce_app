import { useContext } from "react";
import CartContext from "../cartContext/CartContext";
import {useEffect} from "react";
import { Link } from "react-router-dom";

function BuyAll() {
  const { cart ,setCart } = useContext(CartContext);
    useEffect(() => {
      const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);
  return (
    <div className="min-h-screen max-w-6xl p-4 mx-auto items-center justify-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cart.map(
          (item) =>
            cart.length > 0 && (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Description: {item.description}</p>
                  <p className="text-gray-600">
                    Price: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  
                </div>
              </div>
            ),
            
        )}
        <Link to="/multiple-order-address"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Proceed to Payment
        </Link>
        <p className="text-xl font-bold mt-4">
          Total: ₹
          {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
export default BuyAll;
