import { downloadReceipt } from "@/components/Common/downloadReceipt";

export default function DetailFooter({ total, bill }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleDownload = async () => {
    await downloadReceipt("hidden-receipt-download", bill?.title || "Struk-Tagihan");
  };

  return (
    <div className="mt-10 pt-8 border-t dark:border-gray-700 flex justify-between items-center">
      <div>
        <p className="text-gray-400 font-medium">Total Keseluruhan</p>
        <p className="text-3xl font-black text-indigo-600">{formatRupiah(total)}</p>
      </div>

      <button
        id="download-receipt-btn"
        onClick={handleDownload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg"
      >
        Download
      </button>
    </div>
  );
}