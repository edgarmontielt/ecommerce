import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Footer from "./components/Footer" 
import Navbar from "./components/Navbar" 
import Signup from "./pages/auth/Signup" 
import ShopCar from "./pages/cart/ShopCar" 
import Home from "./pages/home/Home" 
import Login from "./pages/auth/Login" 
import Payment from "./pages/payment/Payment" 
import PaymentSucces from "./pages/payment/PaymentSucces" 
import NewProduct from "./pages/products/NewProduct" 
import ProductDetails from "./pages/products/ProductDetails" 

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
    ) 
}

export default App 
