
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import Exponents from './components/Exponents';
import GeminiConcierge from './components/GeminiConcierge';
import { EventDetail } from './types';

const App: React.FC = () => {
  // Sincronización con la imagen del Hero (troncos grises verticales, arena clara)
  const PATH_IMAGE = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2070&auto=format&fit=crop";
  
  // URL del Google Form para inscripción (Postulación)
  const REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSej1bh-DDRZL3sp7p5qzBdt7WJ3bLJCibGnQHv67jBLDaGEKA/viewform?usp=publish-editor";
  
  // URL para Pase Diario (Pago directo)
  const DAILY_PASS_LINK = "https://encuadrado.com/s/cach/conecta-camp-encuentro-de-actualizacion-en-psicoterapia-pase-dia/";

  const eventDetails: EventDetail[] = [
    { label: 'Fecha', value: '19 - 20 de Marzo, 2026', icon: 'calendar_month' },
    { label: 'Ubicación', value: 'Monte Magdalena, Chile', icon: 'map', image: PATH_IMAGE },
  ];

  const programDays = [
    {
      day: "Día 1: Jueves 19 de Marzo",
      activities: [
        { time: "09:00 – 09:30", title: "Recepción + Coffee", desc: "Llegada y café de bienvenida." },
        { time: "09:30 – 10:50", title: "Bloque 1 — Macarena Torres", desc: "Conceptualización de caso desde el apego." },
        { time: "10:50 – 12:20", title: "Bloque 2 — Demostración clínica MIP", desc: "María Inés Pesqueira: Intervención clínica en vivo (45 min intervención + reflexión)." },
        { time: "12:20 – 12:35", title: "Break", desc: "Pausa de café." },
        { time: "12:35 – 13:55", title: "Bloque 3 — Paula Uribe", desc: "Cómo ayudar a las personas que están en una relación con un narcisista." },
        { time: "13:55 – 14:55", title: "Almuerzo", desc: "Espacio de comida y networking." },
        { time: "14:55 – 16:15", title: "Bloque 4 — José Uribe & Lucas Uribe", desc: "Trabajo con Wiston: Tecnología, alianza y factores que inciden en el vínculo cliente-terapeuta." },
        { time: "16:15 – 16:30", title: "Break", desc: "Pausa de la tarde." },
        { time: "16:30 – 18:00", title: "Bloque 5 — Camila Señoret", desc: "Familias Ensambladas." },
        { time: "20:00", title: "Clase de Tragos + Encuentro", desc: "Espacio social y de distensión." },
      ]
    },
    {
      day: "Día 2: Viernes 20 de Marzo",
      activities: [
        { time: "09:00 – 10:00", title: "Desayuno y Cierre", desc: "Comienzo del día." },
        { time: "10:00 – 12:00", title: "Mesa Redonda: Adolescencia en modo vínculo", desc: "Elisa Señoret + Catalina Fracchia + Loreto Gálvez: Cómo ayudar a los adolescentes a relacionarse mejor." },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden scroll-smooth">
      <Navbar />
      
      <main className="pt-20">
        <Hero />

        <section className="px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-16 h-[1px] bg-primary mb-10 shadow-[0_0_10px_#13ec6d]"></div>
          <h3 className="text-white tracking-tight text-2xl md:text-4xl font-light leading-snug italic max-w-2xl">
            "La profundidad del encuentro humano es el arte <span className="font-bold text-primary not-italic">más sofisticado</span> que existe."
          </h3>
          <p className="text-white/40 text-xs md:text-sm mt-8 tracking-[0.4em] uppercase font-bold">
            Un congreso de psicología de alto nivel
          </p>
        </section>

        <section id="ubicacion" className="scroll-mt-24">
          <div className="grid grid-cols-2 gap-px bg-white/5 border-y border-white/5 md:max-w-4xl md:mx-auto md:border-x">
            <div className="bg-background-dark p-10 flex flex-col items-center text-center hover:bg-white/5 transition-colors group">
              <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Fecha</span>
              <span className="text-xl font-bold">19-20 Marzo</span>
            </div>
            <div className="bg-background-dark p-10 flex flex-col items-center text-center border-l border-white/5 hover:bg-white/5 transition-colors group">
              <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Lugar</span>
              <span className="text-xl font-bold">Monte Magdalena</span>
            </div>
          </div>
          
          <div className="w-full h-[400px] md:h-[500px] bg-charcoal relative overflow-hidden mt-px border-b border-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.657512345678!2d-70.5!3d-33.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d00000000000%3A0x0000000000000000!2sMonte%20Magdalena%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert opacity-60 hover:opacity-100 transition-opacity duration-1000"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
          </div>
        </section>

        <section id="programa" className="px-6 py-20 md:max-w-4xl md:mx-auto scroll-mt-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Itinerario</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase">Programa <span className="text-primary italic">Completo</span></h3>
          </div>
          <div className="space-y-12">
            {programDays.map((day, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-lg font-bold text-primary/80 border-b border-white/10 pb-2 uppercase tracking-wider">{day.day}</h4>
                <div className="space-y-4">
                  {day.activities.map((act, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="text-primary font-mono text-xs md:text-sm pt-1 whitespace-nowrap min-w-[90px]">{act.time}</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-sm md:text-base group-hover:text-primary transition-colors">{act.title}</h5>
                        <p className="text-xs md:text-sm text-white/50">{act.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ExperienceCard />
        <Exponents />

        <section id="novedades" className="px-6 py-20 bg-white/5 scroll-mt-24">
           <div className="md:max-w-4xl md:mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Novedades</h2>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal p-6 rounded-2xl border border-white/10">
                <p className="text-[10px] text-primary font-bold uppercase mb-2">Marzo 05</p>
                <h4 className="font-bold mb-2">Cupos de Glamping Agotados</h4>
                <p className="text-sm text-white/50">Debido a la alta demanda, las plazas premium de glamping han sido completadas.</p>
              </div>
              <div className="bg-charcoal p-6 rounded-2xl border border-white/10">
                <p className="text-[10px] text-primary font-bold uppercase mb-2">Febrero 28</p>
                <h4 className="font-bold mb-2">Nueva Experiencia de Mixología</h4>
                <p className="text-sm text-white/50">Confirmamos la participación de maestros mixólogos.</p>
              </div>
            </div>
           </div>
        </section>

        <section className="px-6 pb-20 max-w-4xl mx-auto">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 text-center uppercase">Ficha Técnica del Evento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventDetails.map((detail, idx) => (
              <div key={idx} className="bg-charcoal border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/40 transition-all group">
                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors overflow-hidden">
                  {detail.image ? (
                    <img src={detail.image} alt={detail.value} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  ) : (
                    <span className="material-symbols-outlined">{detail.icon}</span>
                  )}
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">{detail.label}</p>
                  <p className="text-white text-base font-semibold">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Organizers */}
        <footer className="px-6 py-20 border-t border-white/5 bg-black/40">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
             <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-12">Organizan</p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                {/* Logo Clínica de Ansiedad - Invertido para fondo oscuro */}
                <img 
                  src="https://www.clinicadeansiedad.cl/wp-content/uploads/2024/01/Logo-300-CACH-negro.png" 
                  alt="Clínica de Ansiedad Chile" 
                  className="h-12 md:h-16 w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity"
                />
                
                {/* Divider */}
                <div className="w-16 h-px bg-white/10 md:w-px md:h-12"></div>

                {/* Logo La Familia Que Quiero */}
                <img 
                  src="https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-9080-cover.png" 
                  alt="La Familia Que Quiero" 
                  className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
             </div>
             <p className="text-[10px] text-white/20 mt-16">© 2026 Conecta-Camp · Monte Magdalena</p>
          </div>
        </footer>

      </main>

      <GeminiConcierge />

      <div id="registro" className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/95 to-transparent z-[50]">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <a 
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-center text-xs md:text-sm shadow-[0_0_30px_rgba(19,236,109,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu flex items-center justify-center gap-3"
          >
            FORMULARIO DE INSCRIPCIÓN
          </a>

          <a 
            href={DAILY_PASS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold py-3 rounded-xl uppercase tracking-[0.2em] text-center text-[10px] md:text-xs hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu flex items-center justify-center gap-2"
          >
             COMPRAR PASE DIARIO
          </a>
        </div>
      </div>

      <div className="h-40 bg-background-dark"></div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default App;
