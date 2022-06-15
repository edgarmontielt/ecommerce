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
import { useEffect } from "react"
import { validation } from "./features/user"
import { useDispatch } from "react-redux"
import { getProducts } from "./features/product"

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(validation())
        dispatch(getProducts())
    }, [])
    

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
