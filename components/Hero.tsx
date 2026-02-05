
import React from 'react';

const Hero: React.FC = () => {
  // Use a background image but overlay it heavily with the brand purple to match the poster
  const heroImg = "https://plus.unsplash.com/premium_photo-1669018130695-35cb72f65c05?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="home" className="relative w-full h-[70vh] md:h-[75vh] overflow-hidden bg-primary">
      {/* Background Image with heavy mix-blend to make it purple */}
      <img 
        src={heroImg} 
        alt="Conecta Camp Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
        style={{ objectPosition: 'center center' }}
      />
      
      {/* Heavy Purple Overlay to match the poster's header block */}
      <div className="absolute inset-0 bg-primary/90"></div>

      {/* Decorative Flags (CSS Shapes) - Abstract representation of the bunting in the poster */}
      <div className="absolute top-0 left-0 right-0 h-4 flex justify-around opacity-30">
         {Array.from({ length: 20 }).map((_, i) => (
             <div key={i} className={`w-full h-8 ${i % 2 === 0 ? 'bg-secondary' : 'bg-accent-yellow'} clip-triangle`}></div>
         ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center max-w-5xl mx-auto z-10">
          
          <h1 className="text-white tracking-tighter text-7xl md:text-9xl font-black leading-none uppercase flex flex-col items-center mb-8 drop-shadow-sm font-zalendo">
            <span className="animate-fade-in-up animation-delay-200">CONECTA</span>
            <span className="animate-fade-in-up animation-delay-300 text-accent-yellow">
              CAMP
            </span>
          </h1>

          <div className="h-1 w-24 bg-white rounded-full mb-8 animate-fade-in-up animation-delay-400"></div>

          <h2 className="text-white text-xl md:text-3xl font-bold animate-fade-in-up animation-delay-500 max-w-4xl uppercase tracking-widest font-zalendo">
            Encuentro de actualización en psicoterapia
          </h2>
          
          <div className="mt-12 flex flex-col md:flex-row gap-6 animate-fade-in-up animation-delay-600">
             <div className="flex items-center gap-2 text-white/80 uppercase tracking-widest text-xs font-bold bg-black/20 px-6 py-3 rounded-lg">
                Jueves 19 y Viernes 20 de Marzo, 2026
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .clip-triangle {
            clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;
