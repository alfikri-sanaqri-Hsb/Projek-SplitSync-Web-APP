import { useState, useEffect } from "react";
import MainLayout from "@/layout/MainLayout";
import StartAsHostCard from "@/components/desktop/StartAsHostCard";
import ContinueSession from "@/components/desktop/ContinueSession";

import DesktopIllustration1 from "@/assets/hero.png"; 
import DesktopIllustration2 from "@/assets/hero1.png"; 
import DesktopIllustration3 from "@/assets/hero2.png"; 

export default function Desktop() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    DesktopIllustration1,
    DesktopIllustration2,
    DesktopIllustration3
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer); 
  }, [currentSlide]); 

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex flex-col  items-center px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-split text-gray-900 dark:text-white mb-4 tracking-tight">
            Start Your Split Session
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Choose how you want to begin splitting your bill
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-25 w-full max-w-xl mb-6">
          <StartAsHostCard onClick={() => console.log("Hosting...")} />
        </div>

        <ContinueSession onSecondaryClick={() => console.log("Viewing Session...")} />

        <div className="w-full max-w-5xl mt-20">
          <div className="relative overflow-hidden rounded-[32px] shadow-lg group">
            
            <div className="relative h-[300px] sm:h-[450px] md:h-[600px] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`SplitSync Banner ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "w-8 bg-indigo-600" 
                      : "w-3 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
}