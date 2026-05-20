import GooeyNav from "@/components/GooeyNav";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Moon, Sun, Settings, Bell } from "lucide-react";
import { useDarkMode } from "@/hooks/DarkMode";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const token = localStorage.getItem("token");

  const isLoginPage = location.pathname === "/login";
  const isSettingsPage = location.pathname === "/settings";
  const isDesktopPage = location.pathname === "/desktop";
  const isStartPage = location.pathname === "/startashost";
  const isHistoryPage = location.pathname.startsWith("/history");
  const isHistoryDetailPage = location.pathname.startsWith("/historydetail");
  const isReceiptResultPage = location.pathname.startsWith("/receipt-result");
  

  let items = [];

  if (isLoginPage) {
    items = [
      { label: "Home", onClick: () => navigate("/") },
      { label: "Login", onClick: () => navigate("/login") },
    ];
  } else if (isSettingsPage) {
    items = [
      { label: "Home", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        },
      },
    ];
  } else if (isDesktopPage) {
    items = [
      { label: "Home", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  } else if (isStartPage) {
    items = [
      { label: "Home", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  }else if (isHistoryPage) {
    items = [
      { label: "Home", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  } else if (isHistoryDetailPage) {
    items = [
      { label: "Home", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  } else if (isReceiptResultPage) {
    items = [
      { label: "Home", onClick: () => navigate("/desktop") },
      { label: "History", onClick: () => navigate("/history") },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  }else {
    items = [
      { label: "Login", onClick: () => navigate("/login") },
    ];
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg w-full overflow-hidden">
      <div className="mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigate("/")}>
          <img 
            src={Logo} 
            alt="logo" 
            className="w-10 h-10 rounded-xl border-2 border-blue-500 object-cover" />
          <h2 className="font-bold text-lg">SplitSync</h2>
        </div>

        <div className="flex items-center gap-4">
          <GooeyNav items={items} />
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <Sun 
                size={20} 
                className="cursor-pointer hover:text-yellow-400 transition-colors" 
                onClick={() => setIsDarkMode(false)} />
            ) : (
              <Moon 
                size={20} 
                className="cursor-pointer hover:text-blue-500 transition-colors" 
                onClick={() => setIsDarkMode(true)} />
            )}
            
            <button
              className="p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => {
                if (token) {
                  navigate("/settings");
                }
              }}
            >
              {token ? (
                <Settings
                  size={20}
                  className="cursor-pointer hover:rotate-90 transition-transform duration-300"
                />
              ) : (
                <Bell
                  size={20}
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                />
              )}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}