export default function DetailFooter({ total }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", { 
      style: "currency", 
      currency: "IDR", 
      minimumFractionDigits: 0 
    }).format(number);
  };

  return (
    <div className="mt-10 pt-8 border-t dark:border-gray-700 flex justify-between items-center">
      <div>
        <p className="text-gray-400 font-medium">Total Keseluruhan</p>
        <p className="text-3xl font-black text-indigo-600">{formatRupiah(total)}</p>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
        Bagikan Tagihan
      </button>
    </div>
  );
}