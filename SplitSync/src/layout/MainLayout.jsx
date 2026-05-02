import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-300">
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}