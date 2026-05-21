import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MainLayout from "@/layout/MainLayout";

import UploadBox from "@/components/OCR/UploadBox";
import OCRLoading from "@/components/OCR/OCRLoading";
import OCRPreview from "@/components/OCR/OCRPreview";

import Toast from "@/components/common/Toast";

export default function UploadReceipt() {

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  const [toastType, setToastType] = useState("success");

  const handleFileChange = (file) => {

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleOCR = async () => {

    console.log("BUTTON OCR DIKLIK");

    if (!image) {

        console.log("IMAGE KOSONG");

        setToastMessage("Upload gambar receipt terlebih dahulu");

        setToastType("error");

        setShowToast(true);

        setTimeout(() => {
        setShowToast(false);
        }, 3000);

        return;
    }

    try {

        console.log("MULAI OCR");

        setLoading(true);

        const token = localStorage.getItem("token");

        const formData = new FormData();

        formData.append("receipt", image);

        console.log("FORM DATA :", image);

        const response = await axios.post(
        "http://127.0.0.1:8000/api/ocr-receipt",
        formData,
        {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            },
        }
        );

        console.log("OCR RESPONSE :", response.data);

        navigate("/receipt-result", {
        state: {
            receiptData: response.data.data,
        },
        });

    } catch (error) {

        console.log("OCR ERROR :", error);

        console.log("OCR ERROR RESPONSE :", error.response);

        setToastMessage("OCR gagal diproses");

        setToastType("error");

        setShowToast(true);

    } finally {

        setLoading(false);

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

      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="text-center mb-10">

          <h1 className="
            text-4xl font-bold text-gray-900 dark:text-white mb-3
          ">
            Upload Receipt
          </h1>

          <p className="
            text-gray-500 dark:text-gray-400 text-lg
          ">
            Upload struk dan biarkan OCR membaca item otomatis
          </p>

        </div>

        {loading ? (

          <OCRLoading />

        ) : (

          <div className="space-y-8">

            <UploadBox
              onFileSelect={handleFileChange}
              onUpload={handleOCR}
            />

            {preview && (

            <div>
                
                <OCRPreview
                image={preview}
                onProcess={handleOCR}
                />

                <button
                onClick={() => {
                    console.log("TEST BUTTON");
                    handleOCR();
                }}
                className="
                    mt-6 bg-red-500 text-white px-6 py-3 rounded-xl
                "
                >
                TEST OCR
                </button>
            </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
}