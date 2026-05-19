export default function OCRLoading() {

  return (
    <div className="
      flex
      flex-col
      justify-center
      items-center
      py-20
    ">

      <div className="
        animate-spin
        rounded-full
        h-16
        w-16
        border-t-4
        border-b-4
        border-blue-500
      "></div>

      <p className="mt-6 text-gray-500 text-lg">
        Scanning receipt with OCR...
      </p>

    </div>
  );
}