import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Payment from "./pages/Payment";
import PaymentSucces from "./pages/PaymentSucces";
import ProductDetails from "./pages/ProductDetails";
import ShopCar from "./pages/ShopCar";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
        <Route path="/shopcar" element={<ShopCar />} />
        <Route path="/paymentsuccess" element={<PaymentSucces />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
