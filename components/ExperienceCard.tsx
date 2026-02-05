
import React, { useState } from 'react';

const ExperienceCard: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1770&auto=format&fit=crop",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUr287EzKguZv-2EzMTQJZTHzCd3iJbLkfA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVrcS0MzwvCaTi_iseeImz2lbLbFu2YM_2C5bdLj6xA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv_nHSH5Q_9GRxjawo4TqGaum6HMQb4CWrA&s"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="px-6 py-12 md:max-w-4xl md:mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-soft aspect-auto md:aspect-[16/7] flex flex-col md:flex-row border border-gray-100 group">
        
        {/* Image Side Carousel */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-200">
          <img 
            key={currentIndex}
            src={images[currentIndex]} 
            alt="Glamping Experience"
            className="w-full h-full object-cover transition-all duration-500 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-10">
             <button 
                onClick={prevImage}
                className="pointer-events-auto size-12 rounded-full bg-white/80 border border-white text-primary hover:bg-primary hover:text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-md hover:scale-110"
             >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 md:size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
             </button>
             <button 
                onClick={nextImage}
                className="pointer-events-auto size-12 rounded-full bg-white/80 border border-white text-primary hover:bg-primary hover:text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-md hover:scale-110"
             >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 md:size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
             </button>
          </div>

          <span className="absolute bottom-4 left-4 inline-block px-3 py-1 bg-white text-primary text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-sm md:hidden pointer-events-none z-10">
            Experiencia Elite
          </span>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, idx) => (
                <button 
                    key={idx} 
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white'}`}
                />
            ))}
          </div>
        </div>
        
        {/* Content Side */}
        <div className="relative p-8 md:p-10 flex flex-col justify-center md:w-1/2">
           <span className="hidden md:inline-block px-3 py-1 bg-accent-pink/20 text-text-main w-fit text-[10px] font-black tracking-[0.2em] uppercase rounded mb-4">
            Experiencia Elite
          </span>

          <h4 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-text-main font-zalendo uppercase">
            Glamping
          </h4>
          
          <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 font-light">
            Opción glamping para extender la experiencia de Conecta-Camp, bajar el ritmo y compartir conversaciones sin apuro.
          </p>
          
          <div className="flex items-center text-primary text-xs font-black tracking-[0.4em] uppercase">
            <a 
              href="https://www.instagram.com/guanacamp/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-primary/30 pb-1 hover:border-primary hover:text-primary-dark transition-all"
            >
              Descubrir
            </a>
          </div>
        </div>

      </div>
      <style>{`
        @keyframes fade-in {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ExperienceCard;
