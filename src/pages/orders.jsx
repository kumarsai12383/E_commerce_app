import { useEffect} from "react";
import OrderContext from "../cartContext/orderContext";
import { useContext } from "react";
function AllOrders() {
  const { orders ,setOrders } = useContext(OrderContext);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
    setOrders(JSON.parse(storedOrders));
    }
    console.log(orders);
  }, []);
  return (
    <div className="min-h-screen max-w-6xl mx-auto items-center p-4 justify-center mt-20">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 grid grid-cols-12 rounded shadow">
           <div className="bg-gray-200 border-2 sm:col-span-3 md:col-span-3 rounded-xl w-30 h-auto flex items-center justify-center">
                <img src={order.image} alt={order.name}  className="w-auto h-50"/>
           </div>
           <div className="col-span-12 md:col-span-9 lg:col-span-9">
                <h3 className="text-lg font-bold">{order.title}</h3>
                <p className="text-gray-600">Description: {order.description}</p>
                <p className="text-gray-600">Price: ₹{order.price.toLocaleString("en-IN")}</p>
                <p className="text-gray-600">Total: ₹{order.price * order.quantity}</p>
                <p className="text-gray-600">Quantity: {order.quantity}</p>
                <span className="text-gray-600">Order Date: {new Date().toLocaleDateString()}</span>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllOrders;
