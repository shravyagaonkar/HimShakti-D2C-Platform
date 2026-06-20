import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <nav className="flex justify-between items-center px-3 py-2 bg-amber-50 text-emerald-700 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-extrabold">
        HimShakti
      </h1>

      <ul className=" flex gap-5 px-1">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/products">Products</Link></li>
        <li><Link to = "/about">About</Link></li>
        <li><Link to = "/login">Login</Link></li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="border px-3 py-1 rounded"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    
    </nav>
  );
}
export default Navbar;