import axios from "axios";
import { CheckCircle, Clock, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function DetailItemCard({ item, onStatusUpdate }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleUpdateStatus = async (newStatus) => {
    if (isUpdating) return;
    
    setIsUpdating(true);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/bill-items/${item.id}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        onStatusUpdate();
      }
    } catch (error) {
      console.error("Error update status:", error.response?.data || error.message);
      alert("Gagal mengubah status. Pastikan server Laravel aktif dan Route sudah benar.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-transparent hover:border-indigo-100 transition-all">
      <div className="flex items-center gap-4">
        <div className="relative group">
          {item.payment_status === "completed" ? (
            <button
              onClick={() => handleUpdateStatus("pending")}
              className="text-green-500 hover:scale-110 transition-transform"
              title="Ubah ke Pending"
            >
              <CheckCircle className="w-7 h-7" />
            </button>
             ) : (
            <button
              onClick={() => handleUpdateStatus("completed")}
              className="text-amber-500 hover:text-green-500 hover:scale-110 transition-transform flex flex-col items-center"
              title="Klik untuk Selesaikan Pembayaran"
            >
              {isUpdating ? (
                <RotateCcw className="w-7 h-7 animate-spin text-gray-400" />
              ) : (
                <Clock className="w-7 h-7" />
              )}
            </button>
          )}
        </div>

        <div>
          <p className="font-bold text-gray-900 dark:text-white text-lg">
            {item.item_name}
          </p>
          <p className="text-sm text-indigo-500 font-semibold italic">
            Dipesan oleh: {item.participant_name || "Tanpa Nama"}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xl font-black text-gray-900 dark:text-white">
          {formatRupiah(item.price)}
        </p>
        <span
          className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
            item.payment_status === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`} >
          {item.payment_status}
        </span>
      </div>
    </div>
  );
}