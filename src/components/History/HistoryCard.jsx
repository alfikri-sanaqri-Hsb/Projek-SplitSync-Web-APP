import { Calendar, Users, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { downloadReceipt } from "@/components/Common/downloadReceipt";

export default function HistoryCard({ bill }) {
  const navigate = useNavigate();
  const [detailedItems, setDetailedItems] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleDownloadFromHistory = async (e) => {
    e.stopPropagation();
    
    if (isDownloading) return;
    setIsDownloading(true);

    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/bills/${bill.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const fullBillData = response.data.data;
      
      setDetailedItems(fullBillData.items || []);

      setTimeout(async () => {
        const elementId = `hidden-receipt-card-${bill.id}`;
        await downloadReceipt(elementId, bill.title || "Struk-Tagihan");
        setIsDownloading(false);
      }, 300);

    } catch (error) {
      console.error("Gagal mengunduh struk dari halaman history:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between mb-4 relative">
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

      <div className="flex gap-3 z-10">
        <button 
          onClick={() => navigate(`/history/${bill.id}`)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-white">
          <Eye className="w-4 h-4" /> View Details
        </button>
        
        <button 
          onClick={handleDownloadFromHistory}
          disabled={isDownloading}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-white disabled:opacity-50">
          <Download className="w-4 h-4" /> 
          {isDownloading ? "Downloading..." : "Download"}
        </button>
      </div>

      <div className="absolute top-0 left-0 opacity-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div 
          id={`hidden-receipt-card-${bill.id}`} 
          className="p-10 bg-white" 
          style={{ width: "450px", color: "#000000", fontFamily: "Arial, sans-serif" }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold uppercase text-black m-0" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
              {bill.title}
            </h2>
            <p className="text-xs text-gray-600 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
              {new Date(bill.created_at).toLocaleString("id-ID")}
            </p>
          </div>
          
          <div className="border-t-2 border-dashed border-black my-4"></div>
          
          <div className="space-y-3">
            {detailedItems.length > 0 ? (
              detailedItems.map((item, idx) => {
                const namaPemesan = item.participant_name;
                return (
                  <div key={idx} className="flex flex-col text-black" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.item_name}</span>
                      <span>Rp {Number(item.price).toLocaleString("id-ID")}</span>
                    </div>
                    {namaPemesan && (
                      <span className="text-xs text-gray-400 italic text-left mt-0.5" style={{ color: '#0c0e11', fontFamily: 'Arial, sans-serif' }}>
                        Dipesan oleh: {namaPemesan}
                      </span>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center text-xs text-gray-400 py-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                Memuat rincian item...
              </div>
            )}
          </div>
          
          <div className="border-t-2 border-dashed border-black my-4"></div>
          
          <div className="flex justify-between text-lg font-bold text-black" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <span>TOTAL</span>
            <span>Rp {Number(bill.total_price).toLocaleString("id-ID")}</span>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8 italic" style={{ fontFamily: 'Arial, sans-serif' }}>
            * Terima Kasih Telah Menggunakan SplitSync *
          </div>
        </div>
      </div>
    </div>
  );
}