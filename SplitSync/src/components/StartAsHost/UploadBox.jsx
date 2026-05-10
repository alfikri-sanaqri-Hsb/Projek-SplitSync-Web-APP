import { Upload } from "lucide-react";

export default function UploadBox() {
  return (
    <div className="border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-3xl bg-white dark:bg-gray-800 p-10 md:p-16 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">

      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8">
        <Upload className="text-blue-500 w-10 h-10" />
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
        Drag and drop your receipt here
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
        or click to browse from your device
      </p>
      
      <label className="inline-block cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
        />

        <span className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 inline-block">
          Upload Receipt
        </span>
      </label>

    </div>
  );
}