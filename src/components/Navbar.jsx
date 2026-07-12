import { User } from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import {
  useState,
  useEffect,
} from "react";

function Navbar() {
  const navigate =
    useNavigate();

  const [darkMode,
    setDarkMode] =
    useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    navigate("/login");
  };

  const token =
    localStorage.getItem(
      "token"
    );

  return (
    <nav className="flex justify-between items-center px-3 py-2 bg-amber-50 text-emerald-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center gap-6 flex-wrap">

        <h1 className="text-2xl font-extrabold">
          HimShakti
        </h1>

        <ul className="flex gap-5">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products">
              Products
            </Link>
          </li>

          <li>
            <Link to="/about">
              About
            </Link>
          </li>

          <li>
            <Link to="/demo">
              Demo
            </Link>
          </li>

          <li>
            <Link to="/admin">
              Admin
            </Link>
          </li>

          {!token && (
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }
          className="border px-3 py-1 rounded"
        >
          {darkMode
            ? "☀️"
            : "🌙"}
        </button>

        {token && (
          <button
            onClick={
              handleLogout
            }
            className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
          >
            Logout
          </button>
        )}

        <User size={22} />
      </div>
    </nav>
  );
}

export default Navbar;