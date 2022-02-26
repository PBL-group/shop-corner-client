import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Seller from "./pages/seller/Seller";
import Checkout from "./pages/checkout/Checkout";
import Category from "./components/categories/Category";
import Cart from "./pages/cart/Cart"
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='seller' element={<Seller />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='view' element={<Category />}>
            <Route index element={<Category />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
