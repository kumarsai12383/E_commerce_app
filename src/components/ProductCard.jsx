import FetchProducts from "../api";
import { useEffect, useState } from "react";
import Loading from "./loader";
import { Link } from "react-router-dom";


function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await FetchProducts();
      setProducts(productData);
      setLoading(false);
    };

    fetchProducts();
  }, []);
  const productsToShow = search === "" ? products : filteredProducts;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="search-bar flex items-center justify-center">
        <input
          type="text"
          className="search-input p-2 m-4 border rounded w-1/2"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setFilteredProducts(
              products.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase()),
              ),
            );
          }}
        />
      </div>
      <h1 className="text-3xl font-bold text-center my-4">Our Products</h1>
      <div className="product-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.length > 0 ? (
          productsToShow.length > 0 ? (
            productsToShow.map((product) => (
              <div key={product.id} className="product-card p-4 flex flex-col h-full justify-between rounded shadow hover:scale-101 transition duration-300">
                <div className="w-full h-48 flex items-center justify-center">
                <img src={product.image} alt={product.title} className = "w-auto h-full object-cover"/>
              </div>
              
              <h3 className="product-title text-lg font-bold mt-2">
                {product.title}
              </h3>
              <p className="product-description text-gray-600 mt-5 mb-5">
                {product.description}
              </p>
              <div className="flex items-center justify-between w-full mt-auto">
                 <p className="product-price font-extrabold text-gray-700">
                ₹ {product.price.toLocaleString("en-IN")}
              </p>
              <Link
                to={`/product/${product.title}`}
                className="btn btn-primary mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-1 px-4 rounded"
              >
                View Details
              </Link>
              </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card p-4 rounded shadow hover:scale-101 transition duration-300 flex flex-col h-full">
              <div className="w-full h-48 flex items-center justify-center">
                <img src={product.image} alt={product.title} className = "w-auto h-full object-cover"/>
              </div>
              
              <h3 className="product-title text-lg font-bold mt-2">
                {product.title}
              </h3>
              <p className="product-description text-gray-600 mt-5 mb-5">
                {product.description}
              </p>
              <div className="flex items-center justify-between w-full mt-auto">
                 <p className="product-price font-extrabold text-gray-700">
                ₹ {product.price.toLocaleString("en-IN")}
              </p>
              <Link
                to={`/product/${product.title}`}
                className="btn btn-primary mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-1 px-4 rounded"
              >
                View Details
              </Link>
              </div>
             
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductCard;
