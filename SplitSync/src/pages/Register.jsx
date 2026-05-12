import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { Mail, Lock, User } from "lucide-react";
import Logo from "@/assets/logo.png";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Confirm password tidak sama!");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/register",
                {
                    name,
                    email,
                    password,
                }
            );

            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            alert("Register berhasil!");
            navigate("/login");

        } catch (error) {
            console.log(error);
            alert("Register gagal");
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="flex items-center justify-center min-h-[70vh] px-4 my-20">

                <form
                    onSubmit={handleRegister}
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
                        Create Account
                    </h2>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-5 text-center">
                        Register to start splitting bills
                    </p>

                    <div className="mb-4">
                        <label className="text-black dark:text-white text-sm">
                            Name
                        </label>

                        <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
                            <User className="text-gray-400 w-5 h-5 mr-2" />

                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full outline-none text-gray-700 bg-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-black dark:text-white text-sm">
                            Email
                        </label>

                        <div className="flex items-center bg-white rounded-lg px-3 py-2 mt-1">
                            <Mail className="text-gray-400 w-5 h-5 mr-2" />

                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full outline-none text-gray-700 bg-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
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
                                required
                            />
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
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full outline-none text-gray-700 bg-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="text-black dark:text-white text-sm">
                            Upload QRIS{" "}
                            <span className="text-gray-500">(Optional)</span>
                        </label>

                        <div className="mt-1">
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 cursor-pointer
                                file:mr-4
                                file:py-2
                                file:px-4
                                file:rounded-lg
                                file:border-0
                                file:bg-blue-600
                                file:text-white
                                hover:file:bg-blue-500"
                            />
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                            Upload QRIS image for easier payments.
                        </p>
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl flex justify-center items-center mt-4 transition-all active:scale-95 disabled:opacity-70"
                    > 
                        {loading ? <LoadingSpinner size="sm" color="white" /> : "Create Account"}
                    </button>

                    <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                        Have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 font-semibold"
                        >
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </MainLayout>
    );
}