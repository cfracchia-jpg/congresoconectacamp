
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
    bio: "Psicóloga Clínica con especialización en población infanto-juvenil y trastornos de ansiedad. Aporta una mirada fresca y rigurosa sobre los desafíos de la adolescencia moderna y las estrategias clínicas para abordarlos desde el vínculo terapéutico."
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

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedExponent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Close on Escape key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedExponent(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedExponent]);

  return (
    <section id="charlistas" className="px-6 py-20 md:max-w-6xl md:mx-auto scroll-mt-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 animate-fade-in-up">Nuestros Exponentes</h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase opacity-0 animate-fade-in-up animation-delay-200">
          Mentes que <span className="text-primary italic">conectan</span>
        </h3>
        <p className="text-white/40 mt-4 max-w-lg text-sm md:text-base opacity-0 animate-fade-in-up animation-delay-400">
          Un panel de profesionales líderes seleccionados para transformar tu visión de los vínculos humanos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exponents.map((speaker, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedExponent(speaker)}
            className="group relative p-8 rounded-2xl bg-charcoal border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col items-start justify-start min-h-[220px] hover:shadow-[0_10px_40px_-15px_rgba(19,236,109,0.1)] cursor-pointer"
          >
            <div className="mb-6 relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors duration-500 bg-white/5">
                <img 
                  src={speaker.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=1a1a1a&color=13ec6d&size=128&bold=true`} 
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 VER CV
              </div>
            </div>

            {/* Role removed as requested */}
            
            <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 decoration-primary/30 group-hover:underline underline-offset-4 decoration-1">
              {speaker.name}
            </h4>
            <p className="text-white/50 text-xs font-medium leading-relaxed max-w-[200px]">
              {speaker.specialty}
            </p>
            
            {/* Subtle interactive element */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-primary/30 !text-xl">add_circle</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedExponent && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up duration-300" onClick={() => setSelectedExponent(null)}>
          <div 
            className="bg-charcoal border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedExponent(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/50 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/5"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Image Side */}
            <div className="md:w-2/5 h-64 md:h-auto relative bg-background-dark">
              <img 
                src={selectedExponent.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedExponent.name)}&background=1a1a1a&color=13ec6d&size=128&bold=true`}
                alt={selectedExponent.name}
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
              <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2">
                {selectedExponent.role}
              </p>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
                {selectedExponent.name}
              </h3>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              
              <div className="space-y-4 text-white/70 leading-relaxed font-light text-sm md:text-base">
                <p>{selectedExponent.bio || "Información biográfica no disponible por el momento."}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Especialidad</span>
                    <span className="text-sm font-medium text-white">{selectedExponent.specialty}</span>
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
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all group w-full md:w-auto"
        >
          <span className="text-white/60 font-medium group-hover:text-primary transition-colors">@clinicadeansiedad</span>
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors !text-sm">arrow_outward</span>
        </a>

        <a 
          href="https://www.instagram.com/la_familia_que_quiero/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all group w-full md:w-auto"
        >
          <span className="text-white/60 font-medium group-hover:text-primary transition-colors">@la_familia_que_quiero</span>
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors !text-sm">arrow_outward</span>
        </a>
      </div>
    </section>
  );
};

export default Exponents;
