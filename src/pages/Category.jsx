import GetProducts from "../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/loader";
function Category() {
  const { categoryname } = useParams();
  const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      
      const products = await GetProducts();
      const categoryProducts = products.filter((p) => p.category == categoryname);
      setProduct(categoryProducts);
      console.log(categoryProducts);
      setLoading(false);
    };
    fetchProduct();
    
  }, [categoryname]);
  if (loading) {
  return (
   <Loading />
  );
}
  return (
    <div className="product-details p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
      
        {product.length > 0 ? (
             product.map((product) => (
                
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
        ) : (
            <p>No products found in this category.</p>
        )}
    </div>
  );
}
export default Category;