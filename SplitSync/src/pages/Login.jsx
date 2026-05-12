import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { Mail, Lock } from "lucide-react";
import Logo from "@/assets/logo.png";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      alert("Login berhasil!");
      navigate("/desktop");

    } catch (error) {
      console.log(error);
      alert("Email atau password salah!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[70vh] px-4 mt-12">

        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
        >

          <div className="flex justify-center mb-4">
            <img
              src={Logo}
              alt="logo"
              className="w-14 h-14 rounded-xl border-blue-500 border-white shadow-md"
            />
          </div>

          <h2 className="text-black dark:text-white text-2xl font-bold mb-2 text-center">
            Welcome Back
          </h2>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-12 text-center">
            Log in to continue splitting bills
          </p>

          <div className="mb-4">
            <label className="text-black dark:text-white text-sm">
              Email
            </label>

            <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />

              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-black dark:text-white text-sm">
              Password
            </label>

            <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />

              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>
          </div>

          <button 
            disabled={loading} 
            className="w-full bg-indigo-600 text-white py-3 rounded-xl flex justify-center items-center mt-4 transition-all active:scale-95 disabled:opacity-70"
          >
            {loading ? <LoadingSpinner size="sm" color="white" /> : "Login"}
          </button>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </p>

        </form>
      </div>
    </MainLayout>
  );
}