import { Calendar, Users, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HistoryCard({ bill }) {
  const navigate = useNavigate();
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between mb-4">
      <div className="flex items-center gap-5">
        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl text-indigo-600">
          <span className="text-2xl font-bold">🧾</span>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{bill.title}</h3>
            <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full uppercase">
              {bill.status}
            </span>
          </div>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {new Date(bill.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {bill.participants || 0} 
            </div>
          </div>
          <p className="text-gray-400 text-xs">Total Amount</p>
          <p className="text-2xl font-black text-indigo-600">{formatRupiah(bill.total_price)}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={() => navigate(`/history/${bill.id}`)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-white">
          <Eye className="w-4 h-4" /> View Details
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-white">
          <Download className="w-4 h-4" /> Download
        </button>
      </div>
    </div>
  );
}