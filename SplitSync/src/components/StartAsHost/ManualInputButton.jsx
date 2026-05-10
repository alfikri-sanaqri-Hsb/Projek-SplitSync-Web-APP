import { PencilLine } from "lucide-react";

export default function ManualInputButton() {
  return (
    <button className="flex items-center gap-3 mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold text-gray-900 dark:text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">

      <PencilLine className="w-5 h-5" />

      Manual Input

    </button>
  );
}