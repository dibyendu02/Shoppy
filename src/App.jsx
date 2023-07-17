import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Navigate, Route, Router, Routes, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login user={user}/>} />
      <Route path="/register" element={<Register user={user}/>} />
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>} />
      
    </Routes>
  );
}

export default App;
