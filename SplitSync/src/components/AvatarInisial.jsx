export default function AvatarInisial({ name }) {
  // Ambil huruf pertama dan ubah ke huruf besar (Capital)
  // Jika name kosong, default ke huruf 'U' (User)
  const initial = name ? name.charAt(0).toUpperCase() : "U";

  // Fungsi untuk menentukan warna background lingkaran berdasarkan huruf agar bervariasi
  const getBackgroundColor = (char) => {
    const charCode = char.charCodeAt(0);
    
    // Daftar pilihan warna desaturasi/lembut khas Google (Tailwind Classes)
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
    
    // Tentukan warna acak tapi konsisten berdasarkan kode huruf
    return colors[charCode % colors.length];
  };

  return (
    <div className={`h-8 w-8 flex items-center justify-center rounded-full font-semibold text-sm tracking-wide select-none ${getBackgroundColor(initial)}`}>
      {initial}
    </div>
  );
}