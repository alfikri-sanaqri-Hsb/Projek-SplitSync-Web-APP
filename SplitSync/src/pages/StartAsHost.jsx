import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MainLayout from "@/layout/MainLayout";

import PageHeader from "@/components/StartAsHost/PageHeader";
import UploadBox from "@/components/OCR/UploadBox";
import OCRPreview from "@/components/OCR/OCRPreview";
import OCRLoading from "@/components/OCR/OCRLoading";
import ManualInputButton from "@/components/StartAsHost/ManualInputButton";

import Toast from "@/components/common/Toast";

export default function StartAsHost() {

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  const [toastType, setToastType] = useState("success");

  // HANDLE FILE
  const handleFileChange = (file) => {

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  // HANDLE OCR
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

      navigate("/receipt-result", {
        state: {
          receiptData: response.data.data,
        },
      });

    } catch (error) {

      console.error("OCR ERROR :", error);

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

      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-16">

        <div className="max-w-4xl w-full mx-auto">

          {/* HEADER */}
          <PageHeader />

          {/* LOADING */}
          {loading ? (

            <OCRLoading />

          ) : (

            <>

              {/* UPLOAD BOX */}
              <div className="mt-10">

                <UploadBox
                  onFileSelect={handleFileChange}
                />

              </div>

              {/* PREVIEW */}
              {preview && (

                <div className="mt-8">

                  <OCRPreview
                    image={preview}
                    onProcess={handleOCR}
                  />

                </div>

              )}

              {/* OR */}
              <div className="my-10 text-center text-gray-500 dark:text-gray-400 text-2xl font-medium">
                or
              </div>

              {/* MANUAL INPUT */}
              <ManualInputButton />

            </>

          )}

        </div>

      </section>

    </MainLayout>
  );
}