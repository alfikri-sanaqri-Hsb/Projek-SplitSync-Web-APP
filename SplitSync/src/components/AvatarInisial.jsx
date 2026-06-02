export default function AvatarInisial({ name }) {

  const initial = name ? name.charAt(0).toUpperCase() : "U";
  const getBackgroundColor = (char) => {
    const charCode = char.charCodeAt(0);

    const colors = [
      "bg-red-600 text-white",
      "bg-green-600 text-white",
      "bg-blue-600 text-white",
      "bg-amber-500 text-white",
      "bg-purple-600 text-white",
      "bg-pink-600 text-white",
      "bg-teal-600 text-white",
      "bg-indigo-600 text-white"
    ];

    return colors[charCode % colors.length];
  };

  return (
    <div className={`h-8 w-8 flex items-center justify-center rounded-full font-semibold text-sm tracking-wide select-none ${getBackgroundColor(initial)}`}>
      {initial}
    </div>
  );
}