export default function ToggleItem({
  label,
  sublabel,
  icon: Icon,
  checked,
  onChange,
}) {

  return (

    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-2">

      <div className="flex items-center gap-3">

        {Icon && (
          <Icon className="text-blue-500 w-5 h-5" />
        )}

        <div>

          <p className="font-semibold text-sm dark:text-white">
            {label}
          </p>

          <p className="text-xs text-gray-500">
            {sublabel}
          </p>

        </div>

      </div>

      <label className="relative inline-flex items-center cursor-pointer">

        <input
          type="checkbox"
          className="sr-only peer outline-none ring-0 border-0"
          checked={checked}
          onChange={onChange}
        />

        <div
          className="
            w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-all peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full outline-none ring-0 border-0 shadow-none
          ">

          </div>

      </label>

    </div>
  );
}