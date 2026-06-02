import React, { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "@/layout/MainLayout";
import SettingsCard from "@/components/settings/SettingsCard";
import ToggleItem from "@/components/settings/ToggleItem";
import AppearanceSection from "@/components/settings/AppearanceSection";
import Toast from "@/components/common/toast";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

import {
  User,
  Trash,
  Mail,
  QrCode,
  Upload,
} from "lucide-react";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [newQris, setNewQris] = useState(null);
  const [loadingQris, setLoadingQris] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [paymentReminder, setPaymentReminder] = useState(() => {
    return localStorage.getItem("paymentReminder") === "true";
  });
  const [reminderInterval, setReminderInterval] = useState(() => {
    return localStorage.getItem("reminderInterval") || "30";
  });

  const [paymentConfirmation, setPaymentConfirmation] = useState(() => {
    return localStorage.getItem("paymentConfirmation") === "true";
  });

  useEffect(() => {
    localStorage.setItem("paymentReminder", paymentReminder);
  }, [paymentReminder]);

  useEffect(() => {
    localStorage.setItem("reminderInterval", reminderInterval);
  }, [reminderInterval]);

  useEffect(() => {
    localStorage.setItem("paymentConfirmation", paymentConfirmation);
  }, [paymentConfirmation]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://127.0.0.1:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const handleUpdateQris = async () => {
    if (!newQris) {
      setToastMessage("Pilih file QRIS terlebih dahulu!");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setLoadingQris(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("qris", newQris);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/update-qris",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setToastMessage("QRIS berhasil diperbarui!");
      setToastType("success");
      setShowToast(true);
    } catch (error) {
      console.log(error);
      setToastMessage("Gagal update QRIS!");
      setToastType("error");
      setShowToast(true);
    } finally {
      setLoadingQris(false);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleClearHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://127.0.0.1:8000/api/clear-history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setShowDeleteModal(false);
      setToastMessage("Riwayat transaksi berhasil dihapus!");
      setToastType("success");
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
      setToastMessage("Gagal menghapus riwayat!");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <MainLayout>
      {showToast && <Toast message={toastMessage} type={toastType} />}

      <div className="max-w-8xl mx-auto py-10 px-4">
        <div className="space-y-4">

          <SettingsCard title="Profile Pribadi">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full text-white">
                  <User size={22} />
                </div>
                <div>
                  <h2 className="font-bold text-lg dark:text-white">
                    {user?.name || "Unknown User"}
                  </h2>
                  <p className="text-sm text-gray-500">SplitSync User</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500" />
                  <span className="dark:text-white">{user?.email || "-"}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <QrCode size={18} className="text-green-500" />
                    <span className="dark:text-white font-medium">QRIS User</span>
                  </div>

                  {user?.qris ? (
                    <img
                      src={`http://127.0.0.1:8000/storage/${user.qris}`}
                      alt="QRIS"
                      className="w-60 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md"
                    />
                  ) : (
                    <p className="text-gray-500 text-sm">Belum upload QRIS</p>
                  )}

                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setNewQris(e.target.files[0])}
                      className="w-full bg-white dark:bg-gray-900 text-sm border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2"
                    />
                    <button
                      onClick={handleUpdateQris}
                      disabled={loadingQris}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl transition disabled:opacity-70"
                    >
                      {loadingQris ? (
                        <LoadingSpinner size="sm" color="white" />
                      ) : (
                        <>
                          <Upload size={16} />
                          Update QRIS
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SettingsCard>

          <AppearanceSection />

          <SettingsCard title="Notifications">
            <div className="space-y-3">

              <ToggleItem
                label="Payment reminders"
                sublabel="Get notified when someone hasn't paid"
                checked={paymentReminder}
                onChange={() => setPaymentReminder(!paymentReminder)}
              />

              {paymentReminder && (
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/40 rounded-2xl ml-4 mr-1 border border-gray-100 dark:border-gray-700/50 animate-fadeIn">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Reminder Interval
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Seberapa sering sistem mengirim pengingat otomatis
                    </span>
                  </div>
                  <select
                    value={reminderInterval}
                    onChange={(e) => setReminderInterval(e.target.value)}
                    className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-semibold dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
                  >
                    <option value="5">Setiap 5 Menit</option>
                    <option value="15">Setiap 15 Menit</option>
                    <option value="30">Setiap 30 Menit</option>
                    <option value="60">Setiap 1 Jam</option>
                    <option value="1440">Setiap 1 Hari</option>
                  </select>
                </div>
              )}

              <ToggleItem
                label="Payment confirmations"
                sublabel="Get notified when payments are received"
                checked={paymentConfirmation}
                onChange={() => setPaymentConfirmation(!paymentConfirmation)}
              />

            </div>
          </SettingsCard>

          <SettingsCard title="Account">
            <div className="space-y-2">
              <button
                onClick={() => setShowDeleteModal(true)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition text-sm font-semibold"
              >
                Clear Transaction History
                <Trash size={18} />
              </button>
            </div>
          </SettingsCard>

        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-md p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Trash className="text-red-500 w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold dark:text-white">Hapus Riwayat?</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Semua riwayat transaksi akan dihapus permanen.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition font-semibold dark:text-white"
              >
                Batal
              </button>
              <button
                onClick={handleClearHistory}
                className="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold transition"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}