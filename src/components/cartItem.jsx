import { useContext, useEffect } from "react";
import CartContext from "../cartContext/CartContext";
import { Link } from "react-router-dom";
function CartProducts() {
  const { cart, setCart } = useContext(CartContext);
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  function productQuantityDecrease(productId) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  function productQuantityIncrease(productId) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  return (
    <div className="cart p-4 max-w-3xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-12  border-b pb-4">
              <div className="bg-gray-200 border-2 sm:col-span-3  rounded-xl w-20 h-auto flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center ml-4 md:col-span-9 col-span-12">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              </div>
              <div className="col-span-12 text-right mt-2">
                <Link to ={`/product/order/${item.id}`} className="text-blue-500 hover:underline mr-4">
                  Buy Now
                </Link>
                <button
                  onClick={() => productQuantityIncrease(item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>

                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => productQuantityDecrease(item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 text-right flex items-center justify-end space-x-4">
          <Link
            to="/checkout"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy All
          </Link>
          <p className= "text-xl font-bold">
            Total: ₹
            {cart
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)
              .toLocaleString("en-IN")}
          </p>
        </div>
      )}
    </div>
  );
}

export default CartProducts;
