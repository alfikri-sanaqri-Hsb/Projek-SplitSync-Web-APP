import React from "react";
import { ReceiptText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StartAsHostCard({ onClick }) {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-blue-100 dark:bg-gray-950 border-2 border-white hover:border-indigo-600 dark:border-gray-800 rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-md hover:translate-y-[-4px]">
      <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
        <ReceiptText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
      </div>

      <h3 className="text-4xl font-split text-gray-900 dark:text-white mb-2">
        Start <span className="text-[blue]">Split</span>Sync
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 max-w-[220px] leading-relaxed">
        Split bills and track expenses with friends in a single dynamic session
      </p>

      <button
        onClick={() => navigate("/startashost")}
        className="w-full bg-gray-50 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-gray-700 text-gray-700 hover:text-white dark:text-gray-200 font-bold py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all active:scale-95">
        Start SplitSync
      </button>
    </div>
  );
}