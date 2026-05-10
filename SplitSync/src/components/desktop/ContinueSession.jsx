import React from "react";
import { History, ArrowRight } from "lucide-react";

export default function ContinueSession({ onSecondaryClick }) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] transition-shadow duration-300">
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 rounded-full flex-shrink-0">
            <History className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-950 dark:text-white leading-tight">
              Continue Previous Session
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Resume from where you left off (autosave recovery)
            </p>
          </div>
        </div>

        <button 
          onClick={onSecondaryClick}
          className="flex items-center gap-2 bg-gray-50 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-black hover:text-white dark:text-white px-8 py-3.5 rounded-xl font-bold border border-gray-200 dark:border-gray-700 transition-all w-full md:w-auto justify-center active:scale-95 group">
          View Session
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}