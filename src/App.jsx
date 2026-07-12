import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
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
        <Route path="/demo" element = {<ProtectedRoute> <Demo/>   </ProtectedRoute>} />
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
        <Route path="/register" element = {<Register/>}/>
      </Routes>
      </main>

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;