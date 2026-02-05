
import React from 'react';

const Hero: React.FC = () => {
  // Nueva imagen de bosque de palmeras
  const heroImg = "https://plus.unsplash.com/premium_photo-1669018130695-35cb72f65c05?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="home" className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden bg-background-page">
      <img 
        src={heroImg} 
        alt="Conecta Camp - Bosque Natural" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-105"
        style={{ objectPosition: 'center center' }}
      />
      
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-surface/30"></div>

      {/* Gradiente inferior hacia el color gris de la página */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-page via-transparent to-transparent"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto z-10">
          <h2 className="text-white text-xl md:text-3xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up animation-delay-200 drop-shadow-md">
            Encuentro de actualización en psicoterapia
          </h2>
          
          <h1 className="text-white tracking-tighter text-6xl md:text-8xl font-black leading-tight uppercase flex flex-col items-center mb-6 drop-shadow-lg">
            <span className="opacity-0 animate-fade-in-up animation-delay-300">CONECTA</span>
            <span className="opacity-0 text-primary italic animate-fade-in-up animation-delay-400 text-shadow-glow font-zalendo">
              CAMP
            </span>
          </h1>

          <p className="opacity-0 text-white text-lg md:text-2xl font-light italic animate-fade-in-up animation-delay-500 max-w-2xl drop-shadow-md">
            "El vínculo no se improvisa. Se construye."
          </p>
          
          <p className="opacity-0 text-white/60 text-xs md:text-sm font-medium tracking-[0.4em] mt-8 uppercase animate-fade-in-up animation-delay-600 drop-shadow-sm">
            Monte Magdalena · Chile · 2026
          </p>
        </div>
      </div>
      <style>{`
        .text-shadow-glow {
          text-shadow: 0 0 30px rgba(220, 189, 161, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Hero;
    