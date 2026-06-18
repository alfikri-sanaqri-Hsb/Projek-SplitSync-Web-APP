import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleScrollToSection = (sectionId) => {
    if (location.pathname === "/" || location.pathname === "/home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Logo}
              alt="logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <h2 className="font-split text-2xl"> <span className="text-[blue]">Split</span>Sync</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Split bills instantly without manual calculations. Upload or scan receipts, assign items to friends, and track payments in real time.
          </p>
        </div>

        {!isLoggedIn ? (
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleScrollToSection("hero-section")} 
                  className="hover:text-teal-500 transition text-left block w-full cursor-pointer"
                >
                  About SplitSync
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => handleScrollToSection("why-choose-us-section")} 
                  className="hover:text-teal-500 transition text-left block w-full cursor-pointer"
                >
                  Why Choose SplitSync
                </button>
              </li>

              <li>
                <button 
                  onClick={() => handleScrollToSection("how-it-works-section")} 
                  className="hover:text-teal-500 transition text-left block w-full cursor-pointer"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/upload-receipt" className="hover:text-teal-500 transition block">
                  Scan Receipt
                </Link>
              </li>
              <li>
                <Link to="/desktop" className="hover:text-teal-500 transition block">
                  Assign Items
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-teal-500 transition block">
                  Track Payment & History
                </Link>
              </li>
            </ul>
          </div>
        )}

      </div>

      <div className="border-t border-gray-300 dark:border-gray-700">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
          © 2026 SplitSync. All rights reserved.
        </p>
      </div>
    </footer>
  );
}