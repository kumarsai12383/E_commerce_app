import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <div className=" h-full w-full flex flex-col items-center justify-center mt-14">
        <div className="home p-4 text-center">
          <h2 className="text-6xl font-bold mb-4">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">E.Com</span></h2>
          <p className="text-gray-700 text-lg">
            Your one-stop shop for all your needs. Browse our products and add
            them to your cart!
          </p>
          <div className=" flex justify-center">
        <a href="#products-section" className="btn w-30 h-10 flex items-center text-white font-bold justify-center rounded-4xl btn-primary mt-8 bg-gradient-to-r from-blue-500 to-purple-600" >
            Shop Now
          </a>
      </div>
        </div>
         
      </div>
     
      
    <div id="products-section" className="w-full">
         <ProductCard />
    </div>
     
    </>
  );
}
export default Home;
