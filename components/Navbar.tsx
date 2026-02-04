
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // URL del Google Form para inscripción
  const REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSej1bh-DDRZL3sp7p5qzBdt7WJ3bLJCibGnQHv67jBLDaGEKA/viewform?usp=publish-editor";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Programa', href: '#programa' },
    { name: 'Charlistas', href: '#charlistas' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Novedades', href: '#novedades' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Pequeño timeout para permitir que el menú comience a cerrarse y el body recupere el scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[70] bg-black py-2 border-b border-white/5">
        <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
          Un congreso de psicología de alto nivel
        </p>
      </div>

      <nav className="fixed top-[33px] left-0 right-0 z-[60] flex items-center bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:text-primary transition-colors group"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">menu</span>
        </button>
        
        <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-primary text-[8px] md:text-[10px] font-bold tracking-[0.15em] uppercase opacity-90 whitespace-nowrap">
            Clínica de Ansiedad Chile - La Familia que Quiero
          </p>
        </div>

        <div className="flex size-10 items-center justify-end">
          <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-center rounded-xl h-10 w-10 bg-transparent text-primary hover:bg-white/5 transition-all" title="Inscribirse">
            <span className="material-symbols-outlined">app_registration</span>
          </a>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[100] bg-background-dark/95 backdrop-blur-xl transition-all duration-500 flex flex-col ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="size-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-8">
          <h2 className="text-xs font-bold text-primary tracking-[0.5em] uppercase mb-4">Menú de Navegación</h2>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-4xl md:text-6xl font-black uppercase text-white hover:text-primary transition-all duration-300 hover:italic tracking-tighter cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-12 flex flex-col items-center space-y-6">
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-black font-black px-12 py-4 rounded-2xl uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(19,236,109,0.3)] flex items-center gap-2"
            >
              <span className="material-symbols-outlined !text-sm">app_registration</span>
              Inscribirme Ahora
            </a>
            
            <div className="flex gap-6 text-white/40">
              <span className="material-symbols-outlined hover:text-white transition-colors cursor-pointer">share</span>
              <span className="material-symbols-outlined hover:text-white transition-colors cursor-pointer">mail</span>
              <span className="material-symbols-outlined hover:text-white transition-colors cursor-pointer">public</span>
            </div>
          </div>
        </div>
        
        <div className="p-8 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">Conecta-Camp 2026 · Monte Magdalena</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
