import { Upload } from "lucide-react";

export default function UploadBox({
  onFileSelect,
  onProcess,
}) {

  const handleChange = (e) => {

    const file = e.target.files[0];

    console.log("FILE :", file);

    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div
      className="
        border-2 border-dashed border-gray-400 hover:border-blue-600 rounded-3xl p-20 text-center bg-white dark:bg-gray-900
      "
    >

      <div className="flex justify-center mb-6">

        <div
          className="
            bg-blue-100
            p-6
            rounded-full
          "
        >
          <Upload
            className="text-blue-500"
            size={40}
          />
        </div>

      </div>

      <h2 className="text-4xl font-bold mb-4 dark:text-white">
        Drag and drop your receipt here
      </h2>

      <p className="text-gray-500 mb-8">
        or click to browse from your device
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="
          block mx-auto text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-2xl file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer
        "
      />

      {onProcess && (
        <button
          onClick={() => {
            console.log("PROCESS BUTTON CLICKED");
            onProcess();
          }}
          className="
            mt-8
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            transition
          "
        >
          Process Receipt
        </button>
      )}

    </div>
  );
}