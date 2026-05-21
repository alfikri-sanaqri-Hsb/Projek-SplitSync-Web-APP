export default function OCRPreview({
  image,
  onProcess,
}) {

  return (
    <div
      className="
        bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg
      "
    >

      <h2
        className="
          text-2xl font-bold mb-6 dark:text-white
        "
      >
        Receipt Preview
      </h2>

      <img
        src={image}
        alt="Preview"
        className="
          w-full max-h-[500px] object-contain rounded-2xl border border-gray-200 dark:border-gray-700
        "
      />

      <div className="mt-8 text-center">

        <button
          onClick={() => {
            console.log("PROCESS BUTTON CLICKED");
            onProcess();
          }}
          className="
            bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition
          "
        >
          Process Receipt
        </button>

      </div>

    </div>
  );
}