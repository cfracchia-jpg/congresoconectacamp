
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo activar en dispositivos no táctiles para evitar problemas en móviles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && ringRef.current) {
        // El punto central se mueve instantáneamente
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        // El anillo exterior tiene un pequeño retraso (efecto magnético) via CSS transition o requestAnimationFrame
        // Para simplificar y rendimiento, usamos transform directo aquí con un transition en CSS
        ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add('scale-75');
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove('scale-75');
    };

    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Detectar elementos interactivos
    const links = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Observer para elementos dinámicos (como modales que se abren)
    const observer = new MutationObserver((mutations) => {
        const newLinks = document.querySelectorAll('a, button, input, textarea, [role="button"]');
        newLinks.forEach(link => {
            link.removeEventListener('mouseenter', onMouseEnterLink); // Limpiar para no duplicar
            link.removeEventListener('mouseleave', onMouseLeaveLink);
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Puntero Central */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      
      {/* Anillo Exterior */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 w-10 h-10 border border-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out mix-blend-difference ${
          isHovering ? 'scale-150 bg-primary/20 border-transparent' : 'scale-100'
        }`}
      />
      
      {/* Ocultar el cursor por defecto */}
      <style>{`
        body {
            cursor: none;
        }
        @media (hover: none) and (pointer: coarse) {
            body { cursor: auto; }
            .fixed.z-\\[9999\\] { display: none; }
        }
        a, button, input, [role="button"] {
            cursor: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
