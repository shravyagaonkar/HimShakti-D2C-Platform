import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-900">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/demo" element = {<Demo/>} />
      </Routes>
      </main>

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;