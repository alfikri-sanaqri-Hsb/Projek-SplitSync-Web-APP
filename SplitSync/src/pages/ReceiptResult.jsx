import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import BillHeader from "@/components/Bill/BillHeader";
import BillFooter from "@/components/Bill/BillFooter";
import EditableBillItem from "@/components/Bill/EditableBillItem";
import ParticipantInput from "@/components/Bill/ParticipantInput";

import {
  ArrowLeft,
  ReceiptText,
  Save,
} from "lucide-react";

import axios from "axios";

export default function ReceiptResult() {

  const navigate = useNavigate();

  const location = useLocation();

  // DATA DARI OCR
  const receiptData = location.state?.receiptData;

  // DEFAULT DATA JIKA TIDAK ADA
  const [billTitle, setBillTitle] = useState(
    receiptData?.title || "Hasil Scan Receipt"
  );

  const [items, setItems] = useState(
    receiptData?.items || []
  );

  const [loading, setLoading] = useState(false);

  const handleParticipantChange = (index, value) => {

    const updatedItems = [...items];

    updatedItems[index].participant_name = value;

    setItems(updatedItems);
  };

  const handleStatusChange = (index) => {

    const updatedItems = [...items];

    updatedItems[index].payment_status =
      updatedItems[index].payment_status === "pending"
        ? "paid"
        : "pending";

    setItems(updatedItems);
  };

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleSaveBill = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const payload = {
        title: billTitle,
        participants: items.length,
        items: items.map((item) => ({
          item_name: item.item_name,
          price: item.price,
          participant_name: item.participant_name || "",
        })),
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/bills",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // PINDAH KE HISTORY DETAIL
      navigate(`/history/${response.data.data.id}`);

    } catch (error) {

      console.error("Gagal menyimpan bill", error);

      alert("Gagal menyimpan bill");

    } finally {

      setLoading(false);
    }
  };

  if (!receiptData) {

    return (
      <MainLayout>

        <div className="text-center py-20">

          <h2 className="text-2xl font-bold mb-4">
            Data receipt tidak ditemukan
          </h2>

          <button
            onClick={() => navigate("/")}
            className="
              bg-indigo-600
              hover:bg-indigo-500
              text-white
              px-5
              py-3
              rounded-2xl
            "
          >
            Kembali
          </button>

        </div>

      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="
            flex
            items-center
            gap-2
            text-gray-500
            hover:text-indigo-600
            mb-8
            transition
            font-medium
          "
        >

          <ArrowLeft className="w-5 h-5" />

          Kembali

        </button>

        {/* CARD */}
        <div className="
          bg-white
          dark:bg-gray-800
          rounded-3xl
          shadow-xl
          overflow-hidden
          border
          border-gray-100
          dark:border-gray-700
        ">

          {/* HEADER */}
          <BillHeader
            title={billTitle}
            date={new Date()}
            participants={items.length}
            status="pending"
          />

          <div className="p-8">

            {/* TITLE */}
            <div className="flex justify-between items-center mb-6">

              <h3 className="
                text-lg
                font-bold
                text-gray-800
                dark:text-white
                flex
                items-center
                gap-2
              ">

                <ReceiptText className="text-indigo-600 w-5 h-5" />

                Hasil OCR Receipt

              </h3>

            </div>

            {/* ITEM LIST */}
            <div className="space-y-4">

              {items.map((item, index) => (

                <EditableBillItem
                  key={index}
                  item={item}
                  onStatusChange={() =>
                    handleStatusChange(index)
                  }
                >

                  <ParticipantInput
                    value={item.participant_name || ""}
                    onChange={(value) =>
                      handleParticipantChange(index, value)
                    }
                  />

                </EditableBillItem>

              ))}

            </div>

            {/* FOOTER */}
            <BillFooter total={totalPrice} />

            {/* SAVE BUTTON */}
            <div className="mt-8 flex justify-end">

              <button
                onClick={handleSaveBill}
                disabled={loading}
                className="
                  flex
                  items-center
                  gap-2
                  bg-indigo-600
                  hover:bg-indigo-500
                  text-white
                  px-6
                  py-3
                  rounded-2xl
                  transition
                  shadow-md
                  disabled:opacity-70
                "
              >

                <Save size={18} />

                {loading
                  ? "Menyimpan..."
                  : "Simpan Bill"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}