import GetProducts from "../products";
import { useEffect, useState } from "react";
import PopUp from "../components/addtoCartpopup";
import { useParams } from "react-router-dom";
import Loading from "../components/loader";
import { useContext } from "react";
import CartContext from "../cartContext/CartContext";
function ProductDetails() {
  const { producttitle } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (product) => {
    const ProductWithQuantity = { ...product, quantity: 1 };
    setCart([...cart, ProductWithQuantity]);
    localStorage.setItem("cart", JSON.stringify([...cart, ProductWithQuantity]));
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
console.log(cart);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      const products = await GetProducts();
      const foundProduct = products.find((p) => p.title == producttitle);
      setProduct(foundProduct);
      setLoading(false);
    };
    fetchProduct();
  }, [producttitle]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="product-details p-4 flex items-center h-180 justify-center mt-30">
      {showPopup && (
        <div className="fixed hidden md:block top-70 right-150 z-50  bg-gradient-to-r from-blue-500 to-purple-600 text-green-600 px-4 py-2 rounded">
          <PopUp message="Product added to cart!" />
        </div>
      )}
      {showPopup && (
        <div className="fixed md:hidden top-40  z-50  bg-gradient-to-r from-blue-500 to-purple-600 text-green-600 px-4 py-2 rounded">
          <PopUp message="Product added to cart!" />
        </div>
      )}
      {product ? (
        <div className="w-full h-auto max-w-4xl mx-auto">
          <div className="max-w-7xl mx-auto product-card p-4 rounded shadow hover:scale-101 transition duration-300 flex flex-col  mb-10 grid lg:grid-cols-2 gap-8">
            <div className="w-full h-auto mb-0 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between space-x-4 h-16">
                  <h3 className="product-title text-2xl font-bold mt-4">
                    {product.title}
                  </h3>
                  <p className="product-rating text-lg font-semibold">
                    4.8 <span className="text-yellow-500">★★★★★</span>
                  </p>
                </div>

                <span className="product-category text-sm text-gray-500">
                  Category: {product.category}
                </span>
              </div>

              <p className="product-description text-gray-600 mt-5 mb-5">
                {product.description}
              </p>
              <div className="flex items-center justify-between w-full mt-auto">
                <p className="product-price font-extrabold text-gray-700 text-xl">
                  ₹ {product.price.toLocaleString("en-IN")}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 font-semibold">In Stock</span>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      addToCart(product);
                      setShowPopup(true);
                      setTimeout(() => setShowPopup(false), 2000);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
export default ProductDetails;
