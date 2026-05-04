export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition rounded-xl p-4 sm:p-5">
      
      <h2 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
        {title}
      </h2>

      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        {children}
      </div>

    </div>
  );
}