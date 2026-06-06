import { Link } from "react-router-dom";
import { useState } from "react";
import CartContext from "../cartContext/CartContext";
import { useContext } from "react";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className=" w-full bg-gray-800 shadow fixed top-0 left-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <h1 className="brand text-xl font-bold flex text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
              E.Com
            </h1>
          </div>

          <div className="flex justify-between items-center space-x-6">
            <Link to="/" className="flex items-center">
              Home
            </Link>
            <Link className=" flex items-center" to="/products">
              All Products
            </Link>
            <Link className=" flex items-center" to="/Category/Electronics">
              Electronics
            </Link>
            <Link className=" flex items-center" to="/Category/Fashion">
              Fashion
            </Link>
            <Link className=" flex items-center" to="/Category/Footwear">
              Footwear
            </Link>
            <Link
              className=" flex items-center"
              to="/Category/Home%20%26%20Kitchen"
            >
              Home & Kitchen
            </Link>
            <Link
              className=" flex items-center"
              to="/Category/Sports%20%26%20Fitness"
            >
              Sports & Fitness
            </Link>
            <Link to ="/orders" className=" flex items-center">
              My Orders
            </Link>
            <Link
              className=" flex items-center p-2 w-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded"
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Cart
              {cart.length > 0 && (
                <span className="ml-1 text-sm font-bold text-white bg-red-500 rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <nav className=" w-full bg-gray-800 shadow fixed top-0 left-0 z-10  md:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <h1 className="brand text-xl font-bold flex text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
              <Link to="/" className="flex items-center ml-2">
                E.Com
              </Link>
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <Link
              className=" flex items-center mb-2 p-2 w-auto bg-gradient-to-r from-blue-500 to-purple-600  rounded"
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Cart
              {cart.length > 0 && (
                <span className="ml-1 text-sm font-bold text-white bg-red-500 rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </Link>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="block p-2 space-x-6 glassy rounded-lg text-white">
            <Link to="/" className="flex items-center  mb-2">
              Home
            </Link>
            <Link className=" flex items-center mb-2" to="/products">
              All Products
            </Link>
            <Link
              className=" flex items-center mb-2"
              to="/Category/Electronics"
            >
              Electronics
            </Link>
            <Link className=" flex items-center mb-2" to="/Category/Fashion">
              Fashion
            </Link>
            <Link className=" flex items-center mb-2" to="/Category/Footwear">
              Footwear
            </Link>
            <Link
              className=" flex items-center mb-2"
              to="/Category/Home%20%26%20Kitchen"
            >
              Home & Kitchen
            </Link>
            <Link
              className=" flex items-center mb-2"
              to="/Category/Sports%20%26%20Fitness"
            >
              Sports & Fitness
            </Link>
             <Link to ="/orders" className=" flex items-center">
             My Orders
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
