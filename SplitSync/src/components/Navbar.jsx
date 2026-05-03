import GooeyNav from "@/components/GooeyNav";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Moon, Sun, Settings } from "lucide-react";
import { useDarkMode } from "@/hooks/DarkMode"; // 🔥 pakai custom hook

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const isLoginPage = location.pathname === "/login";
  const isDesktopPage = location.pathname === "/desktop";

  let items = [];

  if (isLoginPage) {
    items = [
      { label: "Home", link: "/" },
      { label: "Login", link: "/login" },
    ];
  } else if (isDesktopPage) {
    items = [
      { label: "Desktop", link: "/desktop" },
      { label: "History", link: "/history" },
      {
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ];
  } else {
    items = [{ label: "Login", link: "/login" }];
  }

  return (
    <nav className="bg-teal-400 dark:bg-gray-900 text-white px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <h2 className="font-bold text-lg">SplitSync</h2>
        </div>

        <div className="flex items-center gap-5">
          <GooeyNav items={items} />
          <div className="flex items-center gap-3">

            {isDarkMode ? (
              <Sun
                className="cursor-pointer hover:text-yellow-300 transition"
                onClick={() => setIsDarkMode(false)}
              />
            ) : (
              <Moon
                className="cursor-pointer hover:text-yellow-300 transition"
                onClick={() => setIsDarkMode(true)}
              />
            )}

            <Settings className="cursor-pointer hover:text-yellow-300 transition" />

          </div>
        </div>

      </div>
    </nav>
  );
}