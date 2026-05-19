import { Upload } from "lucide-react";

export default function UploadBox({
  onFileChange,
  onUpload,
}) {

  return (
    <div className="
      border-2
      border-dashed
      border-blue-400
      rounded-3xl
      p-20
      text-center
      bg-white
      dark:bg-gray-900
    ">

      <div className="flex justify-center mb-6">

        <div className="
          bg-blue-100
          p-6
          rounded-full
        ">
          <Upload className="text-blue-500" size={40} />
        </div>

      </div>

      <h2 className="text-5xl font-bold mb-4 dark:text-white">
        Drag and drop your receipt here
      </h2>

      <p className="text-gray-500 mb-8">
        or click to browse from your device
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => onFileChange(e.target.files[0])}
        className="mb-6"
      />

      <button
        onClick={onUpload}
        className="
          bg-blue-500
          hover:bg-blue-600
          text-white
          px-8
          py-4
          rounded-2xl
          text-xl
          font-bold
          transition
        "
      >
        Upload Receipt
      </button>

    </div>
  );
}
