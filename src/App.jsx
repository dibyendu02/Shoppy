import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Router, Routes } from "react-router-dom";




function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    
    </div>
  );
}

export default App;
