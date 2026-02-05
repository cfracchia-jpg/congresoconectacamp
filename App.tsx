
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import Exponents from './components/Exponents';
import GeminiConcierge from './components/GeminiConcierge';
import CustomCursor from './components/CustomCursor';
import { EventDetail } from './types';

const App: React.FC = () => {
  // Imagen para la tarjeta de ubicación (Misma que el Hero)
  const PATH_IMAGE = "https://plus.unsplash.com/premium_photo-1669018130695-35cb72f65c05?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  // Links
  const REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSej1bh-DDRZL3sp7p5qzBdt7WJ3bLJCibGnQHv67jBLDaGEKA/viewform?usp=publish-editor";
  const DAILY_PASS_LINK = "https://encuadrado.com/s/cach/conecta-camp-encuentro-de-actualizacion-en-psicoterapia-pase-dia/";
  const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Monte+Magdalena+El+Monte+Region+Metropolitana";

  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number} | null>(null);
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.remove('opacity-0', 'translate-y-8');
          // Check if element has a specific animation class defined, otherwise default to fade-in-up
          const animationClass = target.dataset.animate || 'animate-fade-in-up';
          target.classList.add(animationClass);
          observer.unobserve(target); // Animate only once
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px" // Offset slightly to ensure it's comfortably in view
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-03-19T09:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute is enough for this view

    return () => clearInterval(interval);
  }, []);

  const toggleActivity = (id: string) => {
    setExpandedActivity(prev => prev === id ? null : id);
  };

  const programDays = [
    {
      day: "Día 1: Jueves 19 de Marzo",
      activities: [
        { 
          id: "d1-recepcion",
          time: "09:00 – 09:30", 
          title: "Acreditación & Welcome Coffee", 
          desc: "Inicio de la experiencia Conecta-Camp. Espacio de vinculación inicial en el entorno natural de Monte Magdalena.",
          takeaways: ["Networking inicial", "Kit de bienvenida", "Activación sensorial"],
          speaker: ""
        },
        { 
          id: "d1-b1",
          time: "09:30 – 10:50", 
          title: "El Mapa Oculto del Apego: Conceptualización Clínica Avanzada", 
          speaker: "Ps. Macarena Torres",
          desc: "Una inmersión profunda en cómo la teoría del apego deja de ser un libro para convertirse en una brújula clínica. Analizaremos cómo decodificar los patrones vinculares del paciente adulto para estructurar intervenciones precisas.",
          takeaways: [
              "Herramientas para identificar estilos de apego en la primera entrevista.",
              "Estrategias para sortear las defensas del apego evitativo.",
              "Modelos de conceptualización de caso aplicables el lunes en consulta."
          ]
        },
        { 
          id: "d1-b2",
          time: "10:50 – 12:20", 
          title: "En la Arena Clínica: Demostración MIP en Vivo", 
          speaker: "Ps. María Inés Pesqueira",
          desc: "La teoría puesta a prueba. Una sesión simulada de alto realismo donde observaremos la micro-regulación del vínculo terapéutico minuto a minuto, seguido de un de-briefing técnico exhaustivo.",
          takeaways: [
              "Observación directa de intervenciones de regulación emocional.",
              "Análisis de la contratransferencia en tiempo real.",
              "Técnicas de reparación de rupturas en la alianza."
          ]
        },
        { 
          id: "d1-break1",
          time: "12:20 – 12:35", 
          title: "Coffee Break & Networking", 
          desc: "Pausa reflexiva para discutir los casos presentados.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d1-b3",
          time: "12:35 – 13:55", 
          title: "Ecos del Yo: Desarmando la Relación Narcisista", 
          speaker: "Ps. Paula Uribe",
          desc: "Más allá de la etiqueta: una guía clínica para trabajar con pacientes atrapados en la órbita de una estructura narcisista. Cómo reconstruir la identidad erosionada y establecer límites desde la salud mental.",
          takeaways: [
              "Identificación de la 'gaslighting' y manipulación sutil.",
              "Protocolos para fortalecer el 'Yo' del paciente víctima.",
              "Diferenciación entre narcisismo patológico y rasgos narcisistas."
          ]
        },
        { 
          id: "d1-lunch",
          time: "13:55 – 14:55", 
          title: "Almuerzo Campestre", 
          desc: "Experiencia culinaria local para recargar energías y continuar la conversación.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d1-b4",
          time: "14:55 – 16:15", 
          title: "El Tercero en Discordia: Tecnología y Alianza (Modelo Winston)", 
          speaker: "José Uribe & Lucas Uribe",
          desc: "La terapia no ocurre en el vacío. Exploraremos cómo la tecnología (Wiston) y los factores extra-terapéuticos influyen radicalmente en la adherencia y el resultado del tratamiento. ¿Es la IA un aliado o una amenaza?",
          takeaways: [
              "Uso ético de herramientas digitales en psicoterapia.",
              "Estrategias para medir y mejorar la alianza terapéutica.",
              "Innovación en el encuadre clínico tradicional."
          ]
        },
        { 
          id: "d1-break2",
          time: "16:15 – 16:30", 
          title: "Break de Tarde", 
          desc: "Pausa breve.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d1-b5",
          time: "16:30 – 18:00", 
          title: "Arquitectura de lo Complejo: Familias Ensambladas", 
          speaker: "Ps. Camila Señoret",
          desc: "Los tuyos, los míos y los nuestros. Un abordaje sistémico para navegar los desafíos únicos de las nuevas configuraciones familiares, donde las lealtades invisibles y los roles difusos suelen sabotear la armonía.",
          takeaways: [
              "Mapas para definir roles en padrastros y madrastras.",
              "Manejo de conflictos de lealtad en los hijos.",
              "Técnicas para establecer nuevas normas de convivencia."
          ]
        },
        { 
          id: "d1-social",
          time: "20:00", 
          title: "Sunset Mixology & Social", 
          desc: "Clase maestra de tragos y espacio de distensión. El momento donde los colegas se convierten en amigos.",
          takeaways: ["Conexión humana real", "Experiencia lúdica", "Relax"],
          speaker: ""
        },
      ]
    },
    {
      day: "Día 2: Viernes 20 de Marzo",
      activities: [
        { 
          id: "d2-start",
          time: "09:00 – 10:00", 
          title: "Desayuno & Cierre Reflexivo", 
          desc: "Integración de los aprendizajes del día anterior y preparación para el bloque final.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d2-b1",
          time: "10:00 – 12:00", 
          title: "Mesa Redonda: El Enigma Adolescente", 
          speaker: "Ps. Elisa Señoret + Ps. Catalina Fracchia + Ps. Loreto Gálvez",
          desc: "Tres expertas, tres miradas. Un diálogo crítico sobre cómo vincularnos con una generación marcada por la inmediatez y la fragilidad. Abordaremos trauma, identidad y el desafío de ser adulto referente hoy.",
          takeaways: [
              "Estrategias de enganche con adolescentes resistentes.",
              "Mirada informada por el trauma (EMDR).",
              "Herramientas de coaching parental efectivo."
          ]
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-page text-text-main font-sans selection:bg-primary selection:text-text-dark overflow-x-hidden scroll-smooth">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-20">
        <Hero />

        <section className="px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-16 h-[2px] bg-primary mb-10 rounded-full shadow-glow"></div>
          <h3 className="text-white tracking-tight text-2xl md:text-4xl font-light leading-snug italic max-w-2xl">
            "La profundidad del encuentro humano es el arte <span className="font-bold text-primary not-italic">más sofisticado</span> que existe."
          </h3>
          <p className="text-text-muted text-xs md:text-sm mt-8 tracking-[0.4em] uppercase font-bold">
            Un congreso de psicología de alto nivel
          </p>
        </section>

        <section id="ubicacion" className="scroll-mt-24">
          <div className="grid grid-cols-2 gap-px bg-white/10 border-y border-white/10 md:max-w-4xl md:mx-auto md:border-x shadow-sm">
            <div className="bg-surface p-10 flex flex-col items-center text-center hover:bg-surface-highlight transition-colors group">
              <span className="text-[10px] text-text-muted uppercase tracking-widest mb-1 font-semibold">Fecha</span>
              <span className="text-sm md:text-xl font-bold text-white px-2">Jueves 19 y Viernes 20 de Marzo 2026</span>
            </div>
            <div className="bg-surface p-10 flex flex-col items-center text-center border-l border-white/10 hover:bg-surface-highlight transition-colors group">
              <span className="text-[10px] text-text-muted uppercase tracking-widest mb-1 font-semibold">Lugar</span>
              <span className="text-xl font-bold text-white">Monte Magdalena</span>
            </div>
          </div>
          
          <div className="w-full md:max-w-4xl md:mx-auto h-[400px] md:h-[500px] bg-surface relative overflow-hidden mt-px border-b md:border-x border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d265562.70881936833!2d-70.93810297318348!3d-33.46706471140104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x9662cf19a8dab4bd%3A0x93c1479cef180269!2sLas%20Condes%2C%20Santiago%20Metropolitan%20Region!3m2!1d-33.416108799999996!2d-70.5340623!4m5!1s0x9662e2fdc6ccd665%3A0xe8cb7c9d17c75e09!2sMonte%20Magdalena%20-%20Unnamed%20Road%2C%20El%20Monte%2C%20Regi%C3%B3n%20Metropolitana!3m2!1d-33.669966699999996!2d-70.9618658!5e0!3m2!1sen!2scl!4v1770248257571!5m2!1sen!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* SECTION: PROGRAMA REDISEÑADO CON ACORDEÓN */}
        <section id="programa" className="px-6 py-20 md:max-w-5xl md:mx-auto scroll-mt-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Itinerario</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-white">Programa <span className="text-primary italic">Completo</span></h3>
          </div>

          <div className="relative">
             {programDays.map((day, idx) => (
              <div key={idx} className="mb-20 last:mb-0">
                {/* Cabecera del Día Sticky */}
                <div className="flex items-center gap-4 mb-8 sticky top-[72px] bg-background-page/95 backdrop-blur-xl z-30 py-4 border-b border-white/10 shadow-sm transition-all">
                  <div className="size-3 rounded-full bg-primary shadow-glow animate-pulse"></div>
                  <h4 className="text-2xl md:text-4xl font-zalendo uppercase text-white tracking-wide">
                    {day.day}
                  </h4>
                </div>
                
                <div className="relative space-y-4">
                   {/* Línea de tiempo móvil decorativa */}
                   <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent md:hidden"></div>
            
                   {day.activities.map((act, i) => {
                     const isExpanded = expandedActivity === act.id;
                     return (
                     <div key={i} className="group relative pl-10 md:pl-0 reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700">
                        {/* Dot Móvil */}
                        <div className={`absolute left-0 top-6 size-[23px] rounded-full border border-white/10 bg-surface flex items-center justify-center md:hidden z-10 transition-colors shadow-sm ${isExpanded ? 'border-primary' : 'group-hover:border-primary'}`}>
                           <div className={`size-1.5 rounded-full transition-colors ${isExpanded ? 'bg-primary' : 'bg-white/30 group-hover:bg-primary'}`}></div>
                        </div>
            
                        <div 
                          onClick={() => toggleActivity(act.id)}
                          className={`flex flex-col rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                            isExpanded 
                              ? 'bg-surface border-primary/40 shadow-glow' 
                              : 'bg-surface/30 border-white/5 hover:bg-surface hover:border-primary/20 hover:shadow-lg hover:-translate-y-1'
                          }`}
                        >
                           {/* HEADER CARD */}
                           <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6">
                             {/* Columna Hora */}
                             <div className="md:w-40 shrink-0 pt-1 flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                                <span className={`font-zalendo text-3xl md:text-4xl transition-colors duration-500 block leading-none tracking-tighter ${isExpanded ? 'text-primary' : 'text-white/20 group-hover:text-primary'}`}>
                                  {act.time.split(' – ')[0]}
                                </span>
                                <div className={`h-px w-8 my-2 hidden md:block transition-all duration-500 ${isExpanded ? 'w-full bg-primary' : 'bg-white/10 group-hover:w-full group-hover:bg-primary/30'}`}></div>
                                <span className="text-xs text-text-muted font-mono tracking-widest uppercase opacity-60">
                                   {act.time.includes('–') ? act.time.split(' – ')[1] : ''}
                                </span>
                             </div>
                             
                             {/* Columna Titulo */}
                             <div className="flex-1 border-l border-white/5 md:pl-8 md:border-l-0 md:pl-0 pl-4 flex justify-between items-start gap-4">
                                <div>
                                  {act.speaker && (
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
                                      {act.speaker}
                                    </p>
                                  )}
                                  <h5 className={`text-lg md:text-xl font-bold transition-colors leading-tight ${isExpanded ? 'text-white' : 'text-white group-hover:text-primary-light'}`}>
                                    {act.title}
                                  </h5>
                                  {!isExpanded && (
                                    <p className="text-sm text-text-muted font-light leading-relaxed mt-2 line-clamp-2 opacity-80">
                                      {act.desc}
                                    </p>
                                  )}
                                </div>
                                
                                {/* Unicode Hex Icon \ue5c8 (arrow_forward) replaced with interaction icon */}
                                <div className={`hidden md:flex flex-col justify-center items-center self-center transform transition-all duration-500 ${isExpanded ? 'rotate-180 text-primary' : 'text-white/30 group-hover:text-primary group-hover:translate-x-2'}`}>
                                     {/* Usamos el chevron unicode en vez de arrow_forward para indicar desplegable */}
                                     <span className="material-symbols-outlined text-2xl">{"\ue5c8"}</span>
                                </div>
                             </div>
                           </div>

                           {/* EXPANDED CONTENT (Accordion) */}
                           <div className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                             <div className="p-6 pt-0 md:pl-[220px] pb-8 border-t border-white/5 mx-6 md:mx-0 mt-2">
                                <div className="grid grid-cols-1 gap-6">
                                   <div>
                                     <h6 className="text-xs text-text-muted uppercase tracking-widest font-bold mb-2">De qué trata</h6>
                                     <p className="text-sm md:text-base text-white font-light leading-relaxed">
                                       {act.desc}
                                     </p>
                                   </div>
                                   
                                   {act.takeaways && act.takeaways.length > 0 && (
                                     <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                                       <h6 className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2">
                                         <span className="material-symbols-outlined text-sm">{"\ue8d0"}</span> {/* lightbulb icon */}
                                         Lo que te llevarás
                                       </h6>
                                       <ul className="space-y-2">
                                         {act.takeaways.map((takeaway, tIdx) => (
                                           <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-300 font-light">
                                             <span className="text-primary mt-1 text-[8px]">●</span>
                                             {takeaway}
                                           </li>
                                         ))}
                                       </ul>
                                     </div>
                                   )}
                                </div>
                             </div>
                           </div>
                        </div>
                     </div>
                   )})}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* NEW SECTION: WHY ATTEND */}
        <section id="por-que-asistir" className="px-6 py-20 bg-background-page relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">La Esencia</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-white">¿Por qué <span className="text-primary italic">Asistir?</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 - hub -> \ue9f4 */}
                    <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group reveal-on-scroll opacity-0 translate-y-8" data-animate="animate-card-entry" style={{ animationDelay: '0ms' }}>
                        <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform select-none">
                            <span className="material-symbols-outlined">{"\ue9f4"}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Más allá de un modelo</h4>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                            No nos limitamos a una sola línea. Abordamos lo relacional con foco en el criterio y la práctica, integrando visiones diversas sin perder profundidad.
                        </p>
                    </div>

                    {/* Card 2 - verified -> \ue8e8 */}
                    <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group reveal-on-scroll opacity-0 translate-y-8" data-animate="animate-card-entry" style={{ animationDelay: '150ms' }}>
                        <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform select-none">
                            <span className="material-symbols-outlined">{"\ue8e8"}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Sello Clínico Homogéneo</h4>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                            Cuidamos meticulosamente que todo el programa mantenga un foco clínico riguroso, bajo el sello de calidad de CACH y LFQQ.
                        </p>
                    </div>

                    {/* Card 3 - groups -> \uf233 */}
                    <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group reveal-on-scroll opacity-0 translate-y-8" data-animate="animate-card-entry" style={{ animationDelay: '300ms' }}>
                        <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform select-none">
                            <span className="material-symbols-outlined">{"\uf233"}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Intimidad Exclusiva</h4>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                            ¿Por qué tan cerrado? Para garantizar un espacio real de trabajo, conversación y disfrute que los eventos masivos no pueden ofrecer.
                        </p>
                    </div>

                    {/* Card 4 - psychology_alt -> \uf8ea */}
                    <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group reveal-on-scroll opacity-0 translate-y-8" data-animate="animate-card-entry" style={{ animationDelay: '450ms' }}>
                        <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform select-none">
                            <span className="material-symbols-outlined">{"\uf8ea"}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Clínico-Experiencial</h4>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                             Mucha experiencia, pero siempre al servicio del criterio clínico. Menos académico-teórico, más práctico y aplicado.
                        </p>
                    </div>

                    {/* Card 5 - videocam_off -> \ue04b */}
                    <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group reveal-on-scroll opacity-0 translate-y-8" data-animate="animate-card-entry" style={{ animationDelay: '600ms' }}>
                        <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform select-none">
                            <span className="material-symbols-outlined">{"\ue04b"}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Sin Grabaciones</h4>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                             Lo que pasa en el camp, queda en el camp. No grabamos para proteger el espacio clínico, la privacidad y la calidad de la experiencia.
                        </p>
                    </div>

                     {/* Card 6 - landscape -> \ue3b6 */}
                     <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group reveal-on-scroll opacity-0 translate-y-8" data-animate="animate-card-entry" style={{ animationDelay: '750ms' }}>
                        <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform select-none">
                            <span className="material-symbols-outlined">{"\ue3b6"}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Un Formato Inédito</h4>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                             Un congreso único en Monte Magdalena. Traemos aprendizajes internacionales a un ambiente relajado que permite desconectar para conectar.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <ExperienceCard />
        <Exponents />

        <section id="novedades" className="px-6 py-20 bg-surface scroll-mt-24 border-y border-white/10">
           <div className="md:max-w-4xl md:mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Novedades</h2>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background-page p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors shadow-sm group">
                <p className="text-[10px] text-primary font-bold uppercase mb-2">Marzo 05</p>
                <h4 className="font-bold mb-2 text-white group-hover:text-primary transition-colors">Cupos de Glamping Agotados</h4>
                <p className="text-sm text-text-muted">Debido a la alta demanda, las plazas premium de glamping han sido completadas.</p>
              </div>
              <div className="bg-background-page p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors shadow-sm group">
                <p className="text-[10px] text-primary font-bold uppercase mb-2">Febrero 28</p>
                <h4 className="font-bold mb-2 text-white group-hover:text-primary transition-colors">Nueva Experiencia de Mixología</h4>
                <p className="text-sm text-text-muted">Confirmamos la participación de maestros mixólogos.</p>
              </div>
            </div>
           </div>
        </section>

        <section className="px-6 pb-32 pt-20 max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Detalles Clave</h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white">Ficha <span className="text-primary italic">Técnica</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CARD FECHA - Ahora linkeada a Pago/Inscripción */}
            <a
              href={DAILY_PASS_LINK}
              target="_blank"
              rel="noopener noreferrer" 
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-soft group transition-all duration-700 hover:shadow-[0_20px_50px_-12px_rgba(220,189,161,0.15)] hover:-translate-y-2 min-h-[350px] flex flex-col justify-between p-8 md:p-10 bg-surface cursor-pointer"
            >
              {/* Background Decor */}
              <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none select-none">
                 <span className="text-9xl font-black tracking-tighter">19</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10 flex items-start justify-between">
                {/* calendar_month -> \uebcc */}
                <div className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 select-none">
                    <span className="material-symbols-outlined">{"\uebcc"}</span>
                </div>
                {/* north_east -> \uf1e5 */}
                <div className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg group-hover:rotate-12 select-none">
                    <span className="material-symbols-outlined">{"\uf1e5"}</span>
                </div>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs text-text-muted uppercase tracking-[0.2em] font-medium">Fecha del Evento</p>
                  <h4 className="text-3xl md:text-4xl font-black text-white leading-none">19 - 20<br/><span className="text-white/50">Marzo 2026</span></h4>
                  <p className="text-sm text-text-muted font-light pt-2">Jueves y Viernes · 09:00 - 18:00 hrs</p>
                  
                  {timeLeft && (
                    <div className="pt-8 mt-6 border-t border-white/10">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                          <span className="text-4xl md:text-6xl font-black text-white">{timeLeft.days}</span> 
                          <span className="text-[10px] text-primary uppercase tracking-widest">Días</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-4">
                          <span className="text-4xl md:text-6xl font-black text-white">{timeLeft.hours}</span> 
                          <span className="text-[10px] text-primary uppercase tracking-widest">Hrs</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-4">
                          <span className="text-4xl md:text-6xl font-black text-white">{timeLeft.minutes}</span> 
                          <span className="text-[10px] text-primary uppercase tracking-widest">Min</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>

            {/* CARD UBICACION */}
            <a 
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-soft group transition-all duration-700 hover:shadow-glow hover:border-primary/30 min-h-[350px] flex flex-col justify-end p-8 md:p-10 cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <img 
                  src={PATH_IMAGE} 
                  alt="Monte Magdalena" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80" 
                />
                 {/* Parallax-like gradient overlay that stays fixed relative to container */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-page via-background-page/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative z-10 w-full">
                <div className="mb-auto flex justify-end">
                    {/* north_east -> \uf1e5 */}
                    <div className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg group-hover:rotate-12 select-none">
                         <span className="material-symbols-outlined">{"\uf1e5"}</span>
                    </div>
                </div>

                <div className="mt-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {/* location_on -> \ue0c8 */}
                      <span className="material-symbols-outlined text-primary text-xl">{"\ue0c8"}</span>
                      <p className="text-xs text-primary uppercase tracking-[0.2em] font-bold">Ubicación</p>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">Monte Magdalena</h4>
                  <p className="text-sm text-gray-300 font-light max-w-xs group-hover:text-white transition-colors">
                    Un santuario natural en la precordillera. El escenario perfecto para la desconexión y el aprendizaje.
                  </p>
                </div>
              </div>
            </a>

          </div>
        </section>

        {/* Footer Organizers */}
        <footer className="px-6 py-20 border-t border-white/10 bg-background-page">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
             <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] mb-12 font-semibold">Organizan</p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                {/* Logos */}
                <img 
                  src="https://www.clinicadeansiedad.cl/wp-content/uploads/2024/01/Logo-300-CACH-negro.png" 
                  alt="Clínica de Ansiedad Chile" 
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110 invert brightness-200"
                />
                
                {/* Divider */}
                <div className="w-16 h-px bg-white/20 md:w-px md:h-12"></div>

                <img 
                  src="https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-9080-cover.png" 
                  alt="La Familia Que Quiero" 
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110 brightness-125"
                />
             </div>
             <p className="text-[10px] text-text-muted mt-16">© 2026 Conecta-Camp · Monte Magdalena</p>
          </div>
        </footer>

      </main>

      <GeminiConcierge />

      <div id="registro" className="fixed bottom-0 left-0 right-0 p-6 bg-background-page/90 backdrop-blur-lg border-t border-white/10 z-[50]">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <a 
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-text-dark font-black py-4 rounded-xl uppercase tracking-[0.2em] text-center text-xs md:text-sm shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu flex items-center justify-center gap-3"
          >
            FORMULARIO DE INSCRIPCIÓN
          </a>

          <a 
            href={DAILY_PASS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl uppercase tracking-[0.2em] text-center text-[10px] md:text-xs hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu flex items-center justify-center gap-2"
          >
             COMPRAR PASE DIARIO
          </a>
        </div>
      </div>

      <div className="h-48 bg-background-page"></div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardEntry {
            0% { opacity: 0; transform: translateY(40px) scale(0.95); filter: blur(5px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-card-entry {
            animation: cardEntry 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            will-change: transform, opacity, filter;
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
