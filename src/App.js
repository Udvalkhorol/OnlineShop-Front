import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />;
        <Route exact path="/marketplace" element={<Marketplace />} />;
        <Route exact path="/product" element={<Product />} />;
        <Route exact path="/cart" element={<Cart />} />;
        <Route exact path="/order" element={<Order />} />;
        <Route exact path="/login" element={<Login />} />;
        <Route exact path="/register" element={<Register />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
