import ProductCard from "../components/ProductCard";
import carousal from "../components/caurosal";
function Home() {
  return (
    <>
      <div className=" h-full w-full flex flex-col items-center justify-center mt-14">
        
         <div className="w-full sm:w-[60%] mt-4">
          {carousal()}
        </div>
      </div>
     
      
    <div id="products-section" className="w-full">
         <ProductCard />
    </div>
     
    </>
  );
}
export default Home;
