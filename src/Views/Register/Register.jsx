import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/firebase";
import { useSelector } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.userData.uid);

  const handleSignup = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}> 
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
            <div className="mb-4 text-red-900 text-center">{error}</div>
          )}

          <button
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            {loading ? "....." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
