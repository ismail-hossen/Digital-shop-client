import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {};

  const handleGoogleLogin = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded w-full mb-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded w-full"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        <div className="mt-4">
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
