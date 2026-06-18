import { Camera, MousePointer2, ReceiptText } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload receipt",
      desc: "Take a photo or upload your restaurant receipt",
      icon: <Camera className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Assign items to people",
      desc: "Drag and drop menu items to each person",
      icon: <MousePointer2 className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Generate payment summary",
      desc: "Get instant breakdown of who owes what",
      icon: <ReceiptText className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
      <div className="mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-split text-gray-900 dark:text-white mb-2">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 font-split dark:text-gray-400 mb-16">
          Three simple steps to split your bill
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100 dark:border-blue-800">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-split text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-[250px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}