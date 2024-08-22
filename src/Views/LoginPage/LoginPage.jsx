import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, SetLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    SetLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      window.location.reload()
    } catch (error) {
      setError(error.message);
    } finally {
      SetLoading(false);
    }
  };
  const goToPage = () => {
    navigate("/Register");
  };

  return (
    <div className="flex items-center justify-center h-screen border-t-2 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-red-600 text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              {loading ? "...." : "Login"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center cursor-pointer flex justify-center items-center">
          <h6 onClick={goToPage}>
            Don't have an account?
            <span className="hover:underline cursor-pointer">Register</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
