import Illustration from "@/assets/hero.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 px-4">   
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        <div className="flex-1 text-center md:text-left">  
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-800 dark:text-white">
            Split Bill Jadi Cepat Tanpa Hitung Manual
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Upload atau scan struk, bagi menu ke teman, dan lihat siapa sudah bayar secara realtime
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={Illustration}
            alt="SplitSync Illustration"
            className="w-full max-w-xs md:max-w-md max-h-[400px] object-contain rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
}