import GooeyNav from "@/components/GooeyNav";
import { useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Moon, Settings } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const items =
    location.pathname === "/login"
      ? [
          { label: "Home", link: "/" },
          { label: "Login", link: "/login" },
        ]
      : [{ label: "Login", link: "/login" }];

  return (
    <nav className="bg-teal-400 shadow-lg text-white px-3 py-2.5">
      <div className="flex justify-between items-center"> 
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"/>
          <h2 className="font-bold text-lg">SplitSync</h2>
        </div>
        <div className="flex items-center gap-5">
          <GooeyNav items={items} />
          <div className="flex items-center gap-3">
            {/* Icon Moon tetap ada sebagai hiasan/UI, tapi tanpa fungsi dark mode dulu */}
            <Moon className="cursor-pointer hover:text-yellow-300 transition" />
            <Settings className="cursor-pointer hover:text-yellow-300 transition" />
          </div>
        </div>
      </div>
    </nav>
  );
}