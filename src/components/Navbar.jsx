import { User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-amber-50 text-emerald-700">
      <h1 className="text-2xl font-extrabold">
        HimShakti
      </h1>

      <ul className="flex gap-7">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/products">Products</Link></li>
      </ul>

      <User size={22} />
    </nav>
  );
}
export default Navbar;