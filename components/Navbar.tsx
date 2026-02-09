
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-[70] bg-background-page py-2 border-b border-primary/10">
        <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-primary">
          Te invitan a
        </p>
      </div>

      <nav className="absolute top-[33px] left-0 right-0 z-[60] flex items-center bg-surface/90 backdrop-blur-md p-4 justify-between border-b border-gray-200 shadow-sm">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-primary/10 rounded-full transition-colors group"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">menu</span>
        </button>
        
        <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
           <div className="flex items-center gap-3 md:gap-6 opacity-80">
              <span className="text-[10px] md:text-xs font-bold border border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white text-black">LA FAMILIA QUE QUIERO</span>
              <span className="text-[10px] md:text-xs font-bold border border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white text-black">CACH</span>
           </div>
        </div>

        <div className="flex size-10 items-center justify-end"></div>
      </nav>

      {/* Mobile Menu Overlay - Clean Light Theme */}
      <div 
        className={`fixed inset-0 z-[100] bg-background-page/98 backdrop-blur-xl transition-all duration-500 flex flex-col ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="size-12 rounded-full border border-gray-300 flex items-center justify-center text-text-main hover:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-8">
          <h2 className="text-xs font-bold text-primary tracking-[0.5em] uppercase mb-4">Menú</h2>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-4xl md:text-6xl font-black uppercase text-text-main hover:text-primary transition-all duration-300 tracking-tighter cursor-pointer hover:translate-x-2"
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
              className="bg-primary text-white font-black px-12 py-4 rounded-xl uppercase tracking-widest text-xs shadow-soft flex items-center gap-2 hover:bg-primary-dark transition-colors transform hover:-translate-y-1"
            >
              <span className="material-symbols-outlined !text-sm">app_registration</span>
              Inscribirme Ahora
            </a>
          </div>
        </div>
        
        <div className="p-8 text-center">
          <p className="text-[10px] text-text-muted uppercase tracking-widest">Conecta-Camp 2026</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
