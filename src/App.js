import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Seller from "./pages/seller/Seller";
import Checkout from "./pages/checkout/Checkout";
import Category from "./components/categories/Category";
import Products from "./pages/products/Products";
import Layout from "./utils/Layout";
import SignIn from "./containers/signin/SignIn";
import SignUp from "./containers/sign-up/SignUp";
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
          <Route path='auth' element={<SignIn />}>
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='category' element={<Category />} />
          <Route path="products" element={<Products />}>
            <Route path=":slug" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
