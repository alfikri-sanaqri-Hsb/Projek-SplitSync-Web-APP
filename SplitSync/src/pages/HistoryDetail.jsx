import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, ReceiptText, QrCode } from "lucide-react";
import MainLayout from "@/layout/MainLayout";
import DetailHeader from "@/components/HistoryDetail/DetailHeader";
import DetailItemCard from "@/components/HistoryDetail/DetailItemCard";
import DetailFooter from "@/components/HistoryDetail/DetailFooter";

import QrisModal from "@/components/common/QrisModal";

export default function HistoryDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [bill, setBill] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showQrisModal, setShowQrisModal] = useState(false);

  const fetchDetail = useCallback(async () => {

    const token = localStorage.getItem("token");

    try {

      const response = await axios.get(
        `http://127.0.0.1:8000/api/bills/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const billData = response.data.data;

      setBill(billData);

    } catch (error) {

      console.error("Gagal mengambil detail", error);

    } finally {
      setLoading(false);
    }

  }, [id]);

  useEffect(() => {

    fetchDetail();

  }, [fetchDetail]);

  if (loading) {

    return (
      <MainLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </MainLayout>
    );
  }

  if (!bill) {

    return (
      <MainLayout>
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          Data tidak ditemukan atau Anda tidak memiliki akses.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-10">

        <button
          onClick={() => navigate(-1)}
          className="
            flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-8 transition-colors font-medium"
        >

          <ArrowLeft className="w-5 h-5" />
          Kembali ke Riwayat
        </button>

        <div className="
          bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700
        ">

          <DetailHeader
            title={bill.title}
            date={bill.created_at}
            participants={bill.participants}
            status={bill.status}
          />

          <div className="p-8">

            <div className="flex justify-between items-center mb-6">

              <h3 className="
                text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2"
              >
                <ReceiptText className="text-indigo-600 w-5 h-5" />
                Rincian Tagihan
              </h3>

              <p className="text-xs text-gray-400 italic">
                * Klik ikon status untuk mengubah status bayar
              </p>

            </div>

            <div className="space-y-4">

              {bill.items?.map((item) => (

                <DetailItemCard
                  key={item.id}
                  item={item}
                  onStatusUpdate={fetchDetail}
                />

              ))}

            </div>

            <DetailFooter total={bill.total_price} />

            <div className="
              mt-8 border-t border-gray-200 dark:border-gray-700 pt-6"
            >

              <div className="
                flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >

                <div>

                  <h3 className="
                    text-lg font-bold text-gray-800 dark:text-white"
                  >
                    Pembayaran QRIS
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Scan QRIS untuk membayar tagihan dengan cepat
                  </p>

                </div>

                <button
                  onClick={() => setShowQrisModal(true)}
                  disabled={!bill?.user?.qris}
                  className={`
                    flex items-center gap-2 text-white px-5 py-3 rounded-2xl transition shadow-md
                    ${
                      bill?.user?.qris
                        ? "bg-indigo-600 hover:bg-indigo-500"
                        : "bg-gray-400 cursor-not-allowed"
                    }
                  `}
                >

                  <QrCode size={18} />

                  {bill?.user?.qris
                    ? "Lihat QRIS"
                    : "QRIS Belum Tersedia"}

                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <QrisModal
        isOpen={showQrisModal}
        onClose={() => setShowQrisModal(false)}
        qris={bill?.user?.qris}
      />
    </MainLayout>
  );
}