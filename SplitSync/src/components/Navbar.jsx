import GooeyNav from "@/components/GooeyNav";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Moon, Sun, Bell } from "lucide-react"; 
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
  } else if (isDesktopPage || isStartPage || isHistoryPage || isHistoryDetailPage || isReceiptResultPage) {
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
  } else {
    items = [
      { label: "Login", onClick: () => navigate("/login") },
    ];
  }

  const isiMenuNavigasi = items.map(item => item.label);
  const userBenarSudahLogin = token && !isiMenuNavigasi.includes("Login");

  let username = "User";
  if (userBenarSudahLogin) {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        username = parsedUser.username || parsedUser.name || "User";
      }
    } catch (error) {
      console.error("Gagal mengambil data user dari localStorage", error);
    }
  }

  const initial = username.charAt(0).toUpperCase();

  const getAvatarColor = (char) => {
    const charCode = char.charCodeAt(0);
    const colors = [
      "bg-red-500 text-white",
      "bg-emerald-600 text-white",
      "bg-blue-600 text-white",
      "bg-amber-500 text-white",
      "bg-purple-600 text-white",
      "bg-pink-600 text-white",
      "bg-cyan-600 text-white",
      "bg-indigo-600 text-white"
    ];
    return colors[charCode % colors.length];
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg w-full overflow-hidden">
      <div className="mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigate("/")}>
          <img 
            src={Logo} 
            alt="logo" 
            className="w-10 h-10 rounded-xl border-2 border-blue-500 object-cover" />
          <h2 className="font-bold text-2xl">SplitSync</h2>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <GooeyNav items={items} />
          
          <div className="flex items-center gap-3">

            {!userBenarSudahLogin && (
              <>
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
              </>
            )}

            {userBenarSudahLogin ? (
              <button
                className="focus:outline-none hover:scale-105 active:scale-95 transition-transform ml-1"
                onClick={() => navigate("/settings")}
                title={`Settings (${username})`}
              >
                <div className={`h-8 w-8 flex items-center justify-center rounded-full font-bold text-sm select-none shadow-md ${getAvatarColor(initial)}`}>
                  {initial}
                </div>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}