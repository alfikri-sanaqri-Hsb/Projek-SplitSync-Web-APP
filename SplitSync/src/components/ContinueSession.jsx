import { History } from "lucide-react";

export default function ContinueSession({ onSecondaryClick }) {
  return (
    <div className="w-full max-w-4xl">
      <div className="bg-[#f39c12] rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between shadow-md gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <History className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xl font-medium">
            Continue Previous Session
          </span>
        </div>
        <button 
          onClick={onSecondaryClick}
          className="bg-white text-gray-800 px-10 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-gray-100 transition-all w-full md:w-auto"
        >
          View Session
        </button>
      </div>
    </div>
  );
}