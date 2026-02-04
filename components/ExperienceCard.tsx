
import React from 'react';

const ExperienceCard: React.FC = () => {
  // Imagen de Glamping (Bell Tent) para la sección Experiencia Elite
  // Coincide con la estética de tienda blanca, naturaleza y comodidad.
  const glampingImg = "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1770&auto=format&fit=crop";

  return (
    <section className="px-6 py-12 md:max-w-4xl md:mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-charcoal aspect-[4/5] md:aspect-[16/9] flex flex-col justify-end p-8 md:p-12 border border-white/10 group shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        
        {/* Image Background */}
        <div className="absolute inset-0">
          <img 
            src={glampingImg} 
            alt="Glamping Experience"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1500ms] scale-105 group-hover:scale-100 ease-out"
          />
        </div>
        
        {/* Cinematic Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
        
        <div className="relative z-10 transition-transform duration-700 group-hover:translate-y-[-10px]">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.3em] uppercase rounded-full mb-6 border border-primary/30 backdrop-blur-md">
            Experiencia Elite
          </span>
          
          <h4 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter flex items-center gap-4">
            <span className="text-white group-hover:text-primary transition-colors duration-500">Glamping</span>
          </h4>
          
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light">
            Sumerge tus sentidos en la naturaleza profunda de Monte Magdalena. Glamping de lujo, hot tubs bajo las estrellas y sesiones de networking exclusivas. 
            <span className="block mt-2 font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700">El vínculo no se improvisa.</span>
          </p>
          
          <div className="flex items-center text-primary text-xs font-black tracking-[0.4em] uppercase transition-all duration-500">
            <a 
              href="https://www.instagram.com/guanacamp/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-primary pb-1 hover:text-white hover:border-white transition-colors"
            >
              Descubrir
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 right-8 size-16 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           <span className="material-symbols-outlined text-white !text-2xl">bedtime</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
