export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      
      <div className="text-center">
        
        <h1 className="text-7xl md:text-9xl font-bold text-black-500 mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-lg">
          Oops! The page you are looking for does not exist.
        </p>

        <button
          onClick={() => window.location.href = "/"}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}