
import React from 'react';

const Hero: React.FC = () => {
  // Imagen actualizada: Bosque de palmeras con troncos grises verticales, 
  // suelo de arena claro y cúpula verde que filtra la luz.
  const heroImg = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="home" className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden bg-background-dark">
      {/* Imagen de fondo: Bosque vertical con suelo arenoso */}
      <img 
        src={heroImg} 
        alt="Conecta Camp Bosque" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-105"
        style={{ objectPosition: 'center center' }}
      />
      
      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto z-10">
          <h2 className="text-white/90 text-xl md:text-3xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up animation-delay-200">
            Encuentro de actualización en psicoterapia
          </h2>
          
          <h1 className="text-white tracking-tighter text-6xl md:text-8xl font-black leading-tight uppercase flex flex-col items-center mb-6">
            <span className="opacity-0 animate-fade-in-up animation-delay-300">CONECTA</span>
            <span className="opacity-0 text-primary italic animate-fade-in-up animation-delay-400">
              CAMP
            </span>
          </h1>

          <p className="opacity-0 text-white/80 text-lg md:text-2xl font-light italic animate-fade-in-up animation-delay-500 max-w-2xl">
            "El vínculo no se improvisa. Se construye."
          </p>
          
          <p className="opacity-0 text-white/40 text-xs md:text-sm font-medium tracking-[0.4em] mt-8 uppercase animate-fade-in-up animation-delay-600">
            Monte Magdalena · Chile · 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
