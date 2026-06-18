import { ScanLine, Users, BadgeCheck } from "lucide-react";

export default function Features() {
  const featureData = [
    {
      icon: <ScanLine size={35} className="text-blue-500" />,
      title: "Scan Receipt Automatically",
      desc: "Ambil foto struk dan biarkan AI membaca totalnya.",
    },
    {
      icon: <Users size={35} className="text-purple-500" />,
      title: "Assign Items Easily",
      desc: "Pilih siapa makan apa dengan mudah dan akurat.",
    },
    {
      icon: <BadgeCheck size={35} className="text-green-500" />,
      title: "Track Payment Status",
      desc: "Pantau siapa yang sudah bayar secara realtime.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto bg-gray-100 dark:bg-gray-400 rounded-[40px] p-10 md:p-16 text-center shadow-xl">

        <h2 className="text-3xl md:text-5xl font-split mb-4 text-gray-900">
          Why Choose SplitSync?
        </h2>

        <p className="text-lg md:text-xl font-split text-gray-800 mb-12">
          Make splitting bills easier than ever before
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-100 p-8 rounded-2xl min-h-[260px] flex flex-col items-center text-center shadow-md border-2 border-transparent hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >

              <div className="w-full flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-split text-black text-2xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}