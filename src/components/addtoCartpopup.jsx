function PopUp() {
  return (
    <div className=" flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Item Added to Cart!</h3>
        <p className="text-gray-600">The item has been successfully added to your cart.</p>
      </div>
    </div>
  );
}
export default PopUp;