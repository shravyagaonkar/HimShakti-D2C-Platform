import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Login to your HimShakti account
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <div className="text-right mb-6">
          <button className="text-sm text-green-700 hover:underline">
            Forgot Password?
          </button>
        </div>

        <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
          Login
        </button>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-700 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;