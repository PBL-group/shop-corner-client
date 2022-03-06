import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Seller from "./pages/seller/Seller";
import Checkout from "./pages/checkout/Checkout";
import Category from "./components/categories/Category";
import Products from "./pages/products/Products";
import Layout from "./utils/Layout";
import Error from "./pages/error/Error";
import Profile from "./pages/profile/Profile";
import ProfileDisplay from "./pages/profile/ProfileDisplay";
import ProductDetail from "./pages/products/ProductDetail";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='seller' element={<Seller />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='profile' element={<Profile />}>
            <Route path=':id' element={<ProfileDisplay />} />
          </Route>
          <Route path='signin' />
          <Route path='signup' />
          <Route path='category' element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
