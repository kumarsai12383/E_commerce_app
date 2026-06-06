import {BrowserRouter , Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Category from './pages/Category';
import OrderContext from './cartContext/orderContext';
import ProductDetails from './pages/ProductDetails';
import OrderPage from './pages/orderPage';
import AllProducts from './pages/Products';
import AllOrders from './pages/orders';
import Address from './pages/singleOrderaddress';
import BuyAll from './pages/BuyAll';
import './App.css'
import Footer from './components/footer';
import CartContext from './cartContext/CartContext';
import { useState } from 'react';
import MultipleOrderAddress from './pages/multipleOrderAddress';

import Cart from './pages/Cart';
function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  return (
    <>
      <CartContext.Provider value={{cart, setCart}}>
        <OrderContext.Provider value={{orders, setOrders}}>
          <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:producttitle" element={<ProductDetails />} />
        <Route path="/Category/:categoryname" element={<Category />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/product/order/:orderId" element={<OrderPage />} />
        <Route path="/checkout" element={<BuyAll />} />
        <Route path="/multiple-order-address" element={<MultipleOrderAddress />} />
        <Route path="/single-order-address/:orderId" element={<Address />} />
        <Route path="/orders" element={<AllOrders />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
     </OrderContext.Provider>
    </CartContext.Provider>
   </>
  )
}

export default App
