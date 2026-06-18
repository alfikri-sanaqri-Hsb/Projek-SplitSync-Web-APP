export default function ParticipantInput({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder="Masukkan nama participant"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full mt-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
    />
  );
}
