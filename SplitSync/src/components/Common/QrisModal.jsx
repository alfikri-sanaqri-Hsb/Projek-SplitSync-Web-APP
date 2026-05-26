export default function QrisModal({
  isOpen,
  onClose,
  qris,
}) {

  if (!isOpen) return null;

  return (

    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60
        px-4
      "
    >

      <div
        className="
          relative
          w-full max-w-md
          bg-white dark:bg-gray-900
          rounded-3xl
          shadow-2xl
          p-6
          mx-auto
        "
      >

        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-gray-400 hover:text-red-500
            text-xl
          "
        >
          ✕
        </button>

        <h2
          className="
            text-2xl font-bold
            text-center
            mb-6
            dark:text-white
          "
        >
          Pembayaran QRIS
        </h2>

        {qris ? (

          <div className="flex justify-center items-center">

            <div
              className="
                bg-white
                p-4
                rounded-2xl
                border border-gray-200
                dark:border-gray-700
              "
            >

              <img
                src={`http://127.0.0.1:8000/storage/${qris}`}
                alt="QRIS"
                className="
                  w-64 h-64
                  object-contain
                  mx-auto
                "
              />

            </div>

          </div>

        ) : (

          <div className="text-center text-gray-500 py-10">
            QRIS belum tersedia
          </div>

        )}

      </div>

    </div>
  );
}