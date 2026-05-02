import { createContext, useContext, useEffect, useState } from "react";

// 🔹 Create Context
const DarkModeContext = createContext();

// 🔹 Custom Hook (biar gampang dipakai)
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// 🔹 Provider
export default function DarkModeContextProvider({ children }) {

  // ✅ Ambil dari localStorage (default: light)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ Apply ke <html> + simpan ke localStorage
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}