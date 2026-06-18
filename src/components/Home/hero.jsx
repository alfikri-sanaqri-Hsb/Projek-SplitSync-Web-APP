import Illustration from "@/assets/hero3.jpeg";
import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-700 py-16 md:py-20 px-4 md:min-h-[80vh] flex items-center">   
      <div className="max-w-8xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 w-full">
        <div className="flex-1 text-center md:text-left">
       
          <div className="inline-flex items-center mb-6 gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 px-4 py-1.5 rounded-full shadow-xs">
            <Zap size={14} className="text-blue-600 fill-blue-600/10 dark:text-blue-400" />
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.08em] text-blue-600 dark:text-blue-400">
              Free <span className="mx-1 opacity-40">•</span> No Install <span className="mx-1 opacity-40">•</span> 5 Mins
            </span>
          </div>  

          <h1 className="font-split font-semibold text-5xl md:text-6xl lg:text-6xl dark:text-white tracking-normal text-[black] leading-[1.15]">
            Instant Split Bills,
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              zero manual math.
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-5 mb-8 text-sm md:text-base lg:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Upload or scan receipts, assign items to friends, and track payments in real time.
          </p>

          <button 
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-medium px-6 py-3 rounded-full text-sm shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            Get Started
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="animate-float w-full max-w-[240px] md:max-w-md flex justify-center">
            <img
              src={Illustration}
              alt="SplitSync Illustration"
              className="w-full h-auto max-h-[250px] md:max-h-[450px] object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </div>

      </div>
    </section>
  );
}