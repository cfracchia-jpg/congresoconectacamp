
import React, { useState, useEffect } from 'react';
import { Exponent } from '../types';

const exponents: Exponent[] = [
  {
    name: "María Inés Pesqueira",
    role: "Keynote Speaker",
    specialty: "Psicóloga Clínica, Supervisora Clínica",
    image: "https://www.clinicadeansiedad.cl/wp-content/uploads/2021/07/Maria-Ines-Pesqueira-min.jpg",
    bio: "Psicóloga Clínica con vasta trayectoria en el tratamiento de trastornos de ansiedad, pánico y fobias. Supervisora clínica acreditada, dedicada a la formación de nuevas generaciones de terapeutas con un enfoque práctico y basado en la evidencia."
  },
  {
    name: "Ps. Macarena Torres",
    role: "Psicóloga clínica LFQQ",
    specialty: "Apego Adulto y Regulación Emocional",
    image: "https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-3447-cover.jpg",
    bio: "Psicóloga Clínica parte del equipo 'La Familia Que Quiero'. Magíster en Psicología Clínica. Especialista en la teoría del apego y cómo los vínculos tempranos moldean la regulación emocional en la vida adulta. Su enfoque integra la profundidad teórica con herramientas clínicas aplicables."
  },
  {
    name: "Ps. Paula Uribe",
    role: "Psicóloga Clínica, Clínica de Ansiedad",
    specialty: "Especialista en Ansiedad",
    image: "https://familyon.org/wp-content/uploads/2021/12/twe.jpg",
    bio: "Psicóloga Clínica integrante de Clínica de Ansiedad Chile. Experta en el manejo clínico del estrés y la ansiedad patológica. Su ponencia abordará dinámicas complejas en relaciones interpersonales, específicamente el desafío clínico y humano de vincularse con estructuras narcisistas."
  },
  {
    name: "Ps. Camila Señoret",
    role: "Psicóloga clínica LFQQ",
    specialty: "Intervención en Dinámicas Familiares",
    image: "https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-7823-cover.jpeg",
    bio: "Psicóloga Clínica y terapeuta familiar. Especialista en la complejidad de las familias ensambladas y las nuevas configuraciones familiares. Su trabajo se centra en facilitar la adaptación y el vínculo saludable en sistemas familiares en transición."
  },
  {
    name: "Ps. Catalina Fracchia",
    role: "Psicóloga clínica, Clínica de Ansiedad",
    specialty: "Especialista en Ansiedad, Infanto Juvenil",
    image: "https://www.clinicadeansiedad.cl/wp-content/uploads/2025/06/Catalina-Fracchia-2-1024x1024.jpg",
    bio: "Psicóloga clínica infanto juvenil, especialista en trastornos de ansiedad y trastorno obsesivo compulsivo en niños y adolescentes. Aporta una mirada fresca y rigurosa sobre los desafíos de la adolescencia moderna y las estrategias clínicas para abordarlos desde el vínculo terapéutico."
  },
  {
    name: "Ps. Elisa Señoret",
    role: "Psicóloga clínica, LFQQ",
    specialty: "Psicóloga y coach pareja y crianza",
    image: "https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-51469-cover.jpeg",
    bio: "Psicóloga Clínica y Coach certificada. Combina la psicología tradicional con herramientas de coaching para abordar desafíos de pareja y crianza. Su enfoque pragmático busca empoderar a padres y parejas para construir relaciones conscientes y respetuosas."
  },
  {
    name: "Ps. Loreto Galvez",
    role: "Psicóloga Clínica, Centro Huella",
    specialty: "Psicóloga EMDR, Infanto Juvenil",
    image: "https://emdrchile.cl/wp-content/uploads/2022/05/Loreto-Galvez-e1764778926220.jpeg",
    bio: "Psicóloga Clínica y terapeuta certificada en EMDR. Directora de Centro Huella. Especialista en trauma y su impacto en el desarrollo infanto-juvenil. Su participación en la mesa redonda aportará la perspectiva del trauma y la resiliencia en la adolescencia."
  },
  {
    name: "José Manuel Uribe",
    role: "Publicista y Coach Winston",
    specialty: "Life coach, supervisor de coaches",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_lSWUgAJWqq3lU3i8lw8k1rtQ7ME6I-lIKZ3Ky8KcKsulNS=s160-c-k-c0x00ffffff-no-rj",
    bio: "Publicista y Coach profesional. Creador del modelo Winston y experto en comunicación humana. Su trabajo se enfoca en la 'alianza terapéutica' desde una perspectiva no clínica, aportando herramientas de comunicación efectiva y liderazgo para terapeutas."
  }
];

const Exponents: React.FC = () => {
  const [selectedExponent, setSelectedExponent] = useState<Exponent | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectedExponent(null);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedExponent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedExponent]);

  return (
    <section id="charlistas" className="px-6 py-20 md:max-w-6xl md:mx-auto scroll-mt-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 animate-fade-in-up">Equipo</h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase opacity-0 animate-fade-in-up animation-delay-200 text-text-main font-zalendo">
          Conoce a nuestros <span className="text-accent-orange italic">exponentes</span>
        </h3>
        <p className="text-text-muted mt-4 max-w-lg text-sm md:text-base opacity-0 animate-fade-in-up animation-delay-400">
          Un grupo de profesionales con amplia trayectoria clínica, que trabajan día a día con personas, familias y sistemas, desde una mirada actual y humana.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exponents.map((speaker, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedExponent(speaker)}
            className="group relative p-8 rounded-xl bg-surface border border-gray-100 shadow-sm hover:shadow-soft hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start justify-start min-h-[220px] cursor-pointer"
          >
            <div className="mb-6 relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary transition-colors duration-500 bg-background-page relative">
                <img 
                  src={speaker.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=6B5B95&color=ffffff&size=128&bold=true`} 
                  alt={speaker.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {speaker.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-all">
                        <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                            <span className="material-symbols-outlined !text-lg">play_arrow</span>
                        </div>
                    </div>
                )}
              </div>
            </div>

            <h4 className="text-xl font-bold mb-2 text-text-main group-hover:text-primary transition-colors font-zalendo uppercase">
              {speaker.name}
            </h4>
            <p className="text-text-muted text-xs font-medium leading-relaxed max-w-[200px]">
              {speaker.specialty}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedExponent && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/20 backdrop-blur-md ${isClosing ? 'animate-overlay-disappear' : 'animate-overlay-appear'}`}
          onClick={handleClose}
        >
          <div 
            className={`bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row ${isClosing ? 'animate-modal-slide-out' : 'animate-modal-slide-up'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-white/50 hover:bg-gray-200 text-text-main flex items-center justify-center transition-colors border border-gray-200 shadow-sm"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Media Side (Video or Image) */}
            <div className="md:w-1/2 h-64 md:h-auto relative bg-gray-100 flex items-center justify-center overflow-hidden">
               {selectedExponent.videoUrl ? (
                   <video 
                     controls 
                     autoPlay 
                     className="w-full h-full object-cover"
                     src={selectedExponent.videoUrl}
                   >
                     Tu navegador no soporta el elemento de video.
                   </video>
               ) : (
                  <img 
                    src={selectedExponent.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedExponent.name)}&background=6B5B95&color=ffffff&size=128&bold=true`}
                    alt={selectedExponent.name}
                    className="w-full h-full object-cover"
                  />
               )}
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center bg-white">
              <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2">
                {selectedExponent.role}
              </p>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-text-main font-zalendo uppercase">
                {selectedExponent.name}
              </h3>
              <div className="w-12 h-1 bg-accent-yellow mb-6"></div>
              
              <div className="space-y-4 text-text-muted leading-relaxed font-light text-sm md:text-base">
                <p>{selectedExponent.bio || "Información biográfica no disponible por el momento."}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-text-muted uppercase tracking-widest mb-1 font-bold">Especialidad</span>
                    <span className="text-sm font-medium text-text-main">{selectedExponent.specialty}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Buttons */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
        <a 
          href="https://www.instagram.com/clinicadeansiedad/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-primary transition-all group w-full md:w-auto hover:-translate-y-1"
        >
          <span className="text-text-main font-medium group-hover:text-primary transition-colors">@clinicadeansiedad</span>
        </a>

        <a 
          href="https://www.instagram.com/la_familia_que_quiero/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-primary transition-all group w-full md:w-auto hover:-translate-y-1"
        >
          <span className="text-text-main font-medium group-hover:text-primary transition-colors">@la_familia_que_quiero</span>
        </a>
      </div>

      <style>{`
        @keyframes overlayAppear {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-overlay-appear {
            animation: overlayAppear 0.5s ease-out forwards;
        }

        @keyframes overlayDisappear {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
        .animate-overlay-disappear {
            animation: overlayDisappear 0.5s ease-in forwards;
        }

        @keyframes modalSlideUp {
            0% { opacity: 0; transform: translateY(100px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-slide-up {
            animation: modalSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalSlideOut {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-50px) scale(0.95); }
        }
        .animate-modal-slide-out {
            animation: modalSlideOut 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Exponents;
