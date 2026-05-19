import React, { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "@/layout/MainLayout";
import SettingsCard from "@/components/settings/SettingsCard";
import ToggleItem from "@/components/settings/ToggleItem";
import Toast from "@/components/common/toast";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

import {
  User,
  Download,
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(
      "http://127.0.0.1:8000/api/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      setUser(response.data);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

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
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
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
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

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
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <MainLayout>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
        />
      )}

      <div className="max-w-8xl mx-auto py-10 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your preferences
          </p>
        </header>

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
                  <p className="text-sm text-gray-500">
                    SplitSync User
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="text-blue-500"
                  />
                  <span className="dark:text-white">
                    {user?.email || "-"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <QrCode
                      size={18}
                      className="text-green-500"
                    />
                    <span className="dark:text-white font-medium">
                      QRIS User
                    </span>
                  </div>

                  {user?.qris ? (
                    <img
                      src={`http://127.0.0.1:8000/storage/${user.qris}`}
                      alt="QRIS"
                      className="w-60 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md"
                    />

                  ) : (

                    <p className="text-gray-500 text-sm">
                      Belum upload QRIS
                    </p>

                  )}

                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setNewQris(e.target.files[0])
                      }
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
          <SettingsCard title="Notifications">
            <ToggleItem
              label="Payment reminders"
              sublabel="Get notified when someone hasn't paid"
              defaultChecked={true}
            />
            <ToggleItem
              label="Payment confirmations"
              sublabel="Get notified when payments are received"
              defaultChecked={true}
            />
          </SettingsCard>

          <SettingsCard title="Account">
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-semibold dark:text-white">
                Export All Data
                <Download
                  size={18}
                  className="text-gray-400"
                />

              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition text-sm font-semibold">
                Clear Transaction History
                <Trash size={18} />
              </button>
            </div>
          </SettingsCard>
        </div>
      </div>
    </MainLayout>
  );
}