import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* CARD */}
      <div className="bg-teal-400 p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        {/* BUTTON */}
        <button className="w-full bg-white text-teal-500 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
          Login
        </button>

      </div>
    </div>
  );
}