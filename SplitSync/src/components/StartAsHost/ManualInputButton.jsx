import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PencilLine, Plus, Trash2, X, UserPen } from "lucide-react";

export default function ManualInputButton() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [participantsData, setParticipantsData] = useState([
    { name: "Participant 1", items: [{ item_name: "", price: "" }] }
  ]);

  const handleNameChange = (pIndex, newName) => {
    const newData = [...participantsData];
    newData[pIndex] = { ...newData[pIndex], name: newName };
    setParticipantsData(newData);
  };

  const addParticipant = () => {
    setParticipantsData([
      ...participantsData,
      { 
        name: `Participant ${participantsData.length + 1}`, 
        items: [{ item_name: "", price: "" }] 
      }
    ]);
  };

  const removeParticipant = (pIndex) => {
    if (participantsData.length > 1) {
      setParticipantsData(participantsData.filter((_, index) => index !== pIndex));
    }
  };

  const addItem = (pIndex) => {
    const newData = [...participantsData];
    const newItems = [...newData[pIndex].items, { item_name: "", price: "" }];
    newData[pIndex] = { ...newData[pIndex], items: newItems };
    setParticipantsData(newData);
  };

  const removeItem = (pIndex, iIndex) => {
    const newData = [...participantsData];
    if (newData[pIndex].items.length > 1) {
      const newItems = newData[pIndex].items.filter((_, index) => index !== iIndex);
      newData[pIndex] = { ...newData[pIndex], items: newItems };
      setParticipantsData(newData);
    }
  };

  const handleItemChange = (pIndex, iIndex, event) => {
    const { name, value } = event.target;
    const newData = [...participantsData];
    const newItems = [...newData[pIndex].items];
    newItems[iIndex] = { ...newItems[iIndex], [name]: value };
    newData[pIndex] = { ...newData[pIndex], items: newItems };
    setParticipantsData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    
    // Transformasi data agar sesuai dengan ekspektasi backend
    const allItems = participantsData.flatMap(p => 
      p.items.map(item => ({
        item_name: item.item_name,
        price: parseFloat(item.price) || 0,
        participant_name: p.name 
      }))
    );

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/bills",
        { 
          title, 
          participants: participantsData.length, 
          items: allItems 
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/history");
    } catch (error) {
      console.error("Gagal menyimpan tagihan:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-3 mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold text-gray-900 dark:text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
          <PencilLine className="w-5 h-5" /> Manual Input
        </button>
      ) : (
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Detail Pesanan</h2>
            <button 
              type="button"
              onClick={addParticipant}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md"
            >
              <Plus className="w-4 h-4" /> Tambah Orang
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="max-w-md">
              <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Nama Tagihan</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Contoh: Makan Malam Bareng"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {participantsData.map((participant, pIndex) => (
                <div key={pIndex} className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
                  
                  {participantsData.length > 1 && (
                    <button 
                      type="button"
                      onClick={() => removeParticipant(pIndex)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}

                  <div className="flex items-center gap-3 mb-5 group">
                    <UserPen className="w-5 h-5 text-blue-500" />
                    <input 
                      type="text"
                      className="bg-transparent border-b-2 border-dashed border-gray-200 dark:border-gray-700 focus:border-blue-500 outline-none font-bold text-gray-800 dark:text-white w-full py-1 transition-all"
                      value={participant.name}
                      onChange={(e) => handleNameChange(pIndex, e.target.value)}
                      placeholder="Nama Partisipan"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    {participant.items.map((item, iIndex) => (
                      <div key={iIndex} className="flex gap-2 items-center">
                        <input
                          name="item_name"
                          placeholder="Nama Item"
                          className="flex-1 p-3 text-sm rounded-lg border border-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:border-blue-400 outline-none"
                          value={item.item_name}
                          onChange={(e) => handleItemChange(pIndex, iIndex, e)}
                          required
                        />
                        <input
                          name="price"
                          type="number"
                          placeholder="Harga"
                          className="w-28 p-3 text-sm rounded-lg border border-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:border-blue-400 outline-none"
                          value={item.price}
                          onChange={(e) => handleItemChange(pIndex, iIndex, e)}
                          required
                        />
                        {participant.items.length > 1 && (
                          <button 
                            type="button"
                            onClick={() => removeItem(pIndex, iIndex)}
                            className="text-gray-300 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => addItem(pIndex)}
                    className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Tambah Item
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 py-4 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none transition-all disabled:opacity-50"
              >
                {loading ? "Menyimpan..." : "Simpan Tagihan"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}