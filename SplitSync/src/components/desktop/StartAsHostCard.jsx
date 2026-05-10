import React from "react";
import { UserPlus } from "lucide-react";

export default function StartAsHostCard({ onClick }) {
  return (
    <div className="flex-1 bg-white dark:bg-gray-950 border-2 border-gray-100 hover:border-indigo-600 dark:border-gray-800 rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-md hover:translate-y-[-4px]">
      <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
        <UserPlus className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Start as Host
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 max-w-[220px] leading-relaxed">
        Create a new session and invite your friends to join
      </p>

      <button
        onClick={onClick}
        className="w-full bg-gray-50 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-gray-700 text-gray-700 hover:text-white dark:text-gray-200 font-bold py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all active:scale-95">
        Start as Host
      </button>
    </div>
  );
}