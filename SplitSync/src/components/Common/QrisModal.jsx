export default function QrisModal({
  isOpen,
  onClose,
  qris,
}) {

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 bg-black/60 flex items-center justify-centerz-50 p-4
      "
    >

      <div
        className="
          bg-white dark:bg-gray-900 rounded-3xl p-6 w-full max-w-md relative shadow-2xl
        "
      >

        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl
          "
        >
          ✕
        </button>

        <h2
          className="
            text-2xlfont-bold text-center mb-6 dark:text-white
          "
        >
          Pembayaran QRIS
        </h2>

        {qris ? (

          <img
            src={`http://127.0.0.1:8000/storage/${qris}`}
            alt="QRIS"
            className="
              w-full rounded-2xl border border-gray-200 dark:border-gray-700
            "
          />

        ) : (

          <div
            className="
              text-center text-gray-500 py-10
            "
          >
            QRIS belum tersedia
          </div>

        )}

      </div>

    </div>
  );
}