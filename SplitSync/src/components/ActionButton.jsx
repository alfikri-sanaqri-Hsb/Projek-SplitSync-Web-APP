export default function ActionButton({ title, icon: Icon, onClick }) {
  return (
    <div className="bg-[#f39c12] hover:bg-[#e67e22] transition-colors rounded-[30px] p-10 flex flex-col items-center justify-center shadow-lg group">
      <div className="mb-6 p-4 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <button 
        onClick={onClick}
        className="bg-white text-gray-800 px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-gray-100 transition-all"
      >
        {title}
      </button>
    </div>
  );
}