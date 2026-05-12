import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import MainLayout from "@/layout/MainLayout";
import HistoryCard from "@/components/History/HistoryCard";
import { Search } from "lucide-react";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-full mb-6">
      <Search className="w-12 h-12 text-indigo-500 dark:text-indigo-400 opacity-50" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
      No Transactions Found
    </h3>
    <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
      We couldn't find any transaction history for this period or search query.
    </p>
  </div>
);
export default function History() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Time");

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bills", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBills(response.data.data);
      } catch (error) {
        console.error("Error fetching history", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  const filteredBills = useMemo(() => {
    return bills.filter((bill) => {
      const matchesSearch = bill.title.toLowerCase().includes(searchQuery.toLowerCase());
      const billDate = new Date(bill.created_at);
      const now = new Date();
      
      let matchesDate = true;
      if (activeFilter === "Today") {
        matchesDate = billDate.toDateString() === now.toDateString();
      } else if (activeFilter === "This Week") {
        const tempDate = new Date(); // copy dari now
        const startOfWeek = new Date(tempDate.setDate(tempDate.getDate() - tempDate.getDay())); matchesDate = billDate >= startOfWeek;
      } else if (activeFilter === "This Month") {
        matchesDate = billDate.getMonth() === now.getMonth() && billDate.getFullYear() === now.getFullYear();
      }

      return matchesSearch && matchesDate;
    });
  }, [bills, searchQuery, activeFilter]);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Transaction History</h1>
        <p className="text-gray-500 mb-8">View and manage all your split bill transactions</p>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search transaction history..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex gap-3 mb-10">
          {["All Time", "Today", "This Week", "This Month"].map((filter) => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === filter 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="py-20">
            <LoadingSpinner size="lg" color="indigo" />
            <p className="text-center text-gray-500 mt-4">Memuat riwayat transaksi...</p>
          </div>
        ) : filteredBills.length > 0 ? (
          filteredBills.map((bill) => <HistoryCard key={bill.id} bill={bill} />)
        ) : (
          <EmptyState />
        )}
      </div>
    </MainLayout>
  );
}