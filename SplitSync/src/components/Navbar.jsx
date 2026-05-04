import GooeyNav from "@/components/GooeyNav";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Moon, Sun, Settings } from "lucide-react";
import { useDarkMode } from "@/hooks/DarkMode";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const isLoginPage = location.pathname === "/login";
  const isDesktopPage = location.pathname === "/desktop";

  let items = [];

  if (isLoginPage) {
    items = [
      { label: "Home", onClick: () => navigate("/") },
      { label: "Login", onClick: () => navigate("/login") },
    ];
  } else if (isDesktopPage) {
    items = [
      { label: "Desktop", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  } else {
    items = [
      { label: "Login", onClick: () => navigate("/login") },
    ];
  }


  return (
    <nav className="bg-teal-400 dark:bg-gray-900 text-white shadow-lg w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
        
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-white" />
          <h2 className="font-bold text-lg">SplitSync</h2>
        </div>

        <div className="flex items-center gap-4">
          <GooeyNav items={items} />
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <Sun size={20} className="cursor-pointer" onClick={() => setIsDarkMode(false)} />
            ) : (
              <Moon size={20} className="cursor-pointer" onClick={() => setIsDarkMode(true)} />
            )}
            <Settings size={20} className="cursor-pointer" />
          </div>
        </div>

      </div>
    </nav>
  );
}