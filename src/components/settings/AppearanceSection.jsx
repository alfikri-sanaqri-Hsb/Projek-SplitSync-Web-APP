import { Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/DarkMode";

export default function AppearanceSection() {

  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (

    <div
      className="
        bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-700 p-6
      ">

      <h2 className="text-2xl font-split dark:text-white mb-6">
        Appearance
      </h2>

      <div
        className="
          flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl
        ">

        <div className="flex items-center gap-3">

          <div
            className="
              w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center
            ">

            <Sun className="text-yellow-500 w-5 h-5"/>

          </div>

          <div>

            <p className="font-semibold text-sm dark:text-white">
              Theme
            </p>

            <p className="text-xs text-gray-500">
              {isDarkMode ? "Dark mode" : "Light mode"}
            </p>

          </div>

        </div>

        <label className="relative inline-flex items-center cursor-pointer">

          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />

          <div
        className="
            w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">

        </div>

        </label>

      </div>

    </div>

  );
}