import MainLayout from "@/layout/MainLayout";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="w-full max-w-md bg-teal-400 dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
          
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <div className="mb-4">
            <label className="text-white text-sm">Email</label>
            <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-white text-sm">Password</label>
            <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <button className="w-full bg-white text-teal-500 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
            Login
          </button>

        </div>
      </div>
    </MainLayout>
  );
}