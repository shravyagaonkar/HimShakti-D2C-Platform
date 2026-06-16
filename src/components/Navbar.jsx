import { User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-green-600 text-white">
      <h1 className="text-2xl font-extrabold">
        HimShakti
      </h1>

      <ul className="flex gap-7">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Admin</li>
      </ul>

      <User size={22} />
    </nav>
  );
}

export default Navbar;