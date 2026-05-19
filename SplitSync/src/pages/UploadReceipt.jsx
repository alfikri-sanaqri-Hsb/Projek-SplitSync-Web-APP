import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MainLayout from "@/layout/MainLayout";

import UploadBox from "@/components/OCR/UploadBox";
import OCRLoading from "@/components/OCR/OCRLoading";
import OCRPreview from "@/components/OCR/OCRPreview";

import Toast from "@/components/ui/Toast";

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

    if (!image) {

      setToastMessage("Upload gambar receipt terlebih dahulu");

      setToastType("error");

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return;
    }

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("receipt", image);

      // API OCR
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

      // REDIRECT KE RESULT
      navigate("/receipt-result", {
        state: {
          receiptData: response.data.data,
        },
      });

    } catch (error) {

      console.error(error);

      setToastMessage("OCR gagal diproses");

      setToastType("error");

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    } finally {

      setLoading(false);
    }
  };

  return (
    <MainLayout>

      {/* TOAST */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="
            text-4xl
            font-bold
            text-gray-900
            dark:text-white
            mb-3
          ">
            Upload Receipt
          </h1>

          <p className="
            text-gray-500
            dark:text-gray-400
            text-lg
          ">
            Upload struk dan biarkan OCR membaca item otomatis
          </p>

        </div>

        {/* LOADING */}
        {loading ? (

          <OCRLoading />

        ) : (

          <div className="space-y-8">

            {/* UPLOAD BOX */}
            <UploadBox
              onFileSelect={handleFileChange}
            />

            {/* PREVIEW */}
            {preview && (

              <OCRPreview
                image={preview}
                onProcess={handleOCR}
              />

            )}

          </div>

        )}

      </div>

    </MainLayout>
  );
}