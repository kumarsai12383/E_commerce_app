import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../cartContext/CartContext";
import { Link } from "react-router-dom";
function OrderPage() {
  const { orderId } = useParams();
  const { cart } = useContext(CartContext);
  return (
    <div className="min-h-screen max-w-6xl mx-auto  mt-20">
      <h1 className="text-3xl font-bold">Order Details</h1>
      {cart.map((item) => {
        if (item.id === parseInt(orderId)) {
          return (
            <div
              key={item.id}
              className="bg-white grid grid-cols-12 gap-6 p-6 rounded-lg shadow-lg mt-6"
            >
              <div className="col-span-12 md:col-span-6 lg:col-span-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-48 h-auto mb-4"
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-lg font-semibold">
                  Quantity: {item.quantity}
                </p>
                <p className="text-xl font-bold mb-4">
                  Price: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <div>
                  <Link
                    to={`/single-order-address/${orderId}`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Proceed to Payment
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default OrderPage;
