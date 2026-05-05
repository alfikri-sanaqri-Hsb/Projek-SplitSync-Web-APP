import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <h2 className="text-xl font-bold text-teal-500">
              SplitSync
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            Split bill jadi cepat tanpa hitung manual. Upload atau scan struk,
            bagi menu ke teman, dan lihat siapa sudah bayar secara realtime.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-teal-500">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-500 transition cursor-pointer">About SplitSync</li>
            <li className="hover:text-teal-500 transition cursor-pointer">Contact</li>
            <li className="hover:text-teal-500 transition cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-teal-500">Features</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-500 transition cursor-pointer">Scan Receipt</li>
            <li className="hover:text-teal-500 transition cursor-pointer">Assign Items</li>
            <li className="hover:text-teal-500 transition cursor-pointer">Track Payment</li>
            <li className="hover:text-teal-500 transition cursor-pointer">History</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-700">
        <p className="text-center text-sm text-teal-500 py-4">
          © 2026 SplitSync. All rights reserved.
        </p>
      </div>
    </footer>
  );
}