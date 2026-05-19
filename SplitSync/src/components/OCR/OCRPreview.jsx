export default function OCRPreview({ image }) {

  if (!image) return null;

  return (
    <div className="mb-8">

      <img
        src={URL.createObjectURL(image)}
        alt="Receipt Preview"
        className="
          w-full
          max-h-[500px]
          object-contain
          rounded-3xl
          border
          border-gray-300
          dark:border-gray-700
        "
      />

    </div>
  );
}