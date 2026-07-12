import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (
      !/\S+@\S+\.\S+/.test(email)
    ) {
      alert(
        "Please enter a valid email."
      );
      return;
    }

    if (
      password.length < 6
    ) {
      alert(
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      const response =
        await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      console.log(
        "Status:",
        response.status
      );
      console.log(
        "Response:",
        data
      );

      if (
        !response.ok
      ) {
        alert(
          data.errors?.[0]
            ?.msg ||
            data.message ||
            "Registration failed"
        );
        return;
      }

      alert(
        "Registration Successful!"
      );

      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(
        "Server error. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Join HimShakti today
        </p>

        <form
          onSubmit={
            handleRegister
          }
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an
          account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;