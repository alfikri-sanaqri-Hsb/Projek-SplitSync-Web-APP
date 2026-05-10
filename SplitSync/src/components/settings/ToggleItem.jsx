export default function ToggleItem({ label, sublabel, icon: Icon, defaultChecked }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-2">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="text-blue-500 w-5 h-5" />}
        <div>
          <p className="font-semibold text-sm dark:text-white">{label}</p>
          <p className="text-xs text-gray-500">{sublabel}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}