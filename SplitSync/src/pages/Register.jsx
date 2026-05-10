import MainLayout from "@/layout/MainLayout";
import { Mail, Lock } from "lucide-react";
import Logo from "@/assets/logo.png";

export default function Register() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[70vh] px-4 mt-12">
        <div className="w-full max-w-md bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
          
          <div className="flex justify-center mb-4">
            <img
              src={Logo}
              alt="logo"
              className="w-14 h-14 rounded-xl border-blue-500 border-white shadow-md"/>
          </div>

          <h2 className="text-black dark:text-white text-2xl font-bold mb-2 text-center">
            Create Account
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-12 text-center">
            Register to start splitting bills
          </p>

          <div className="mb-4">
            <label className="text-black dark:text-white text-sm">
              Email
            </label>
            <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full outline-none text-gray-700 bg-transparent"/>
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
                className="w-full outline-none text-gray-700 bg-transparent"/>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-black dark:text-white text-sm">
              Confirm Password
            </label>
            <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="password"
                placeholder="********"
                className="w-full outline-none text-gray-700 bg-transparent"/>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition">
            Creat Account
          </button>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            have an account?{" "}
            <a href="/login" className="text-blue-500 font-semibold">
              Login
            </a>
          </p>

        </div>
      </div>
    </MainLayout>
  );
}