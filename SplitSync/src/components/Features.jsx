export default function Features() {
  const featureData = [
    { title: "Scan Receipt", desc: "Ambil foto struk dan biarkan AI membaca totalnya." },
    { title: "Assign Items", desc: "Pilih siapa makan apa dengan mudah dan akurat." },
    { title: "Track Payment", desc: "Pantau siapa yang sudah bayar secara realtime." },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto bg-teal-400 dark:bg-teal-600 rounded-[40px] p-10 md:p-16 text-center shadow-xl">
        
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-gray-900">
          Why Choose SplitSync?
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mb-12">
          Make splitting bills easier than ever before
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-100 p-8 rounded-2xl h-40 flex flex-col justify-center items-center shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-teal-600 text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}