function Login() {
  return (
    <div className="flex-1 flex justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-emerald-800">Login</h2>

        <input
          type="email"
          placeholder="Enter your Email-id"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="w-full bg-green-700 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;