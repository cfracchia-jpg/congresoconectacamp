
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import Exponents from './components/Exponents';
import CustomCursor from './components/CustomCursor';
import { EventDetail } from './types';

const App: React.FC = () => {
  // Imagen para la tarjeta de ubicación
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
          const animationClass = target.dataset.animate || 'animate-fade-in-up';
          target.classList.add(animationClass);
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
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
    const interval = setInterval(calculateTimeLeft, 60000); 

    return () => clearInterval(interval);
  }, []);

  const toggleActivity = (id: string) => {
    setExpandedActivity(prev => prev === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programDays = [
    {
      day: "Día 1: Jueves 19 de Marzo",
      activities: [
        { 
          id: "d1-recepcion",
          time: "09:00 – 09:30", 
          title: "Recepción + Coffee", 
          desc: "Inicio de la experiencia Conecta-Camp. Espacio de vinculación inicial.",
          takeaways: ["Networking inicial", "Kit de bienvenida", "Activación sensorial"],
          speaker: ""
        },
        { 
          id: "d1-b1",
          time: "09:30 – 10:50", 
          title: "Conceptualización de caso desde el apego", 
          speaker: "Ps. Macarena Torres",
          desc: "El apego como brújula en la clínica: Análisis de los patrones vinculares del paciente adulto y cómo estructurar intervenciones precisas.",
          takeaways: [
              "Herramientas para identificar estilos de apego en la primera entrevista.",
              "Estrategias para sortear las defensas del apego evitativo."
          ]
        },
        { 
          id: "d1-b2",
          time: "10:50 – 12:20", 
          title: "Demostración clínica MIP (Intervención clínica en vivo)", 
          speaker: "Ps. María Inés Pesqueira",
          desc: "Sesión en vivo de 45 minutos, guiada por María Inés Pesqueira, más reflexión clínica posterior.",
          takeaways: [
              "Observación directa de intervenciones de caso clínico.",
              "Análisis de la contratransferencia en tiempo real.",
              "Técnicas de reparación de rupturas en la alianza."
          ]
        },
        { 
          id: "d1-break1",
          time: "12:20 – 12:35", 
          title: "Break", 
          desc: "Pausa reflexiva.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d1-b3",
          time: "12:35 – 13:55", 
          title: "Cómo ayudar a las personas que están en una relación con un narcisista", 
          speaker: "Ps. Paula Uribe",
          desc: "Cómo trabajar la relación con quien está o estuvo con un narcisista.",
          takeaways: [
              "Protocolos para fortalecer el 'Yo' del paciente víctima.",
              "Diferenciación entre narcisismo patológico y rasgos narcisistas."
          ]
        },
        { 
          id: "d1-lunch",
          time: "13:55 – 14:55", 
          title: "Almuerzo", 
          desc: "Experiencia culinaria local para recargar energías.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d1-b4",
          time: "14:55 – 16:15", 
          title: "Trabajo con Wiston: Tecnología, Alianza y Vínculo", 
          speaker: "José Uribe & Lucas Uribe",
          desc: "Trabajo con Wiston por medio de tecnología alianza, abordando los factores que más inciden en que se genere el vínculo entre un cliente y su terapeuta. ¿Es la IA un aliado o una amenaza?",
          takeaways: [
              "Uso ético de herramientas digitales en psicoterapia.",
              "Estrategias para medir y mejorar la alianza terapéutica.",
              "Innovación en el encuadre clínico tradicional."
          ]
        },
        { 
          id: "d1-break2",
          time: "16:15 – 16:30", 
          title: "Break", 
          desc: "Pausa breve.",
          takeaways: [],
          speaker: ""
        },
        { 
          id: "d1-b5",
          time: "16:30 – 18:00", 
          title: "Familias Ensambladas", 
          speaker: "Ps. Camila Señoret",
          desc: "Los tuyos, los míos y los nuestros. Un abordaje sistémico para navegar los desafíos únicos de las nuevas configuraciones familiares, donde las lealtades invisibles y los roles difusos suelen sabotear la armonía.",
          takeaways: [
              "Mapas para definir roles en padrastros y madrastras.",
              "Manejo de conflictos de lealtad en los hijos.",
              "Técnicas para establecer nuevas normas de convivencia."
          ]
        },
        {
          id: "d1-sunset",
          time: "20:00",
          title: "Sunset & Mixology",
          desc: "Clase de tragos y momento de relajo para seguir compartiendo.",
          takeaways: [],
          speaker: ""
        }
      ]
    },
    {
      day: "Día 2: Viernes 20 de Marzo (Cupos Agotados)",
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
          title: "Adolescencia en modo vínculo: cómo ayudar a los adolescentes a relacionarse mejor.", 
          speaker: "Ps. Elisa Señoret + Ps. Catalina Fracchia + Ps. Loreto Gálvez",
          desc: "Prácticas para ayudar a adolescentes a aprender a conversar. Una conversación profunda, que une tres miradas distintas sobre cómo ayudar a los adolescentes a tener mejores relaciones.",
          takeaways: [
              "Estrategias y herramientas concretas para conversar y relacionarse mejor."
          ]
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-page text-text-main font-sans selection:bg-primary selection:text-white overflow-x-hidden scroll-smooth">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-20">
        <Hero />

        {/* PILLARS SECTION - Updated with specific SVGs from the brochure */}
        <section className="grid grid-cols-2 md:grid-cols-4 w-full">
            {/* 1. APRENDER (Teal) - Book Icon */}
            <div 
              onClick={() => scrollToSection('charlistas')}
              className="bg-secondary p-8 aspect-square md:aspect-auto md:h-64 flex flex-col items-center justify-center text-center group hover:brightness-110 transition-all cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white mb-4 group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <h3 className="text-white font-zalendo text-2xl uppercase tracking-wide">Aprender</h3>
            </div>
            
            {/* 2. CRECER (Pink) - Head with Leaves Icon */}
            <div 
              onClick={() => scrollToSection('programa')}
              className="bg-accent-pink p-8 aspect-square md:aspect-auto md:h-64 flex flex-col items-center justify-center text-center group hover:brightness-110 transition-all cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-text-main mb-4 group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m0 0l-2 2m2-2l2 2" />
                </svg>
                <h3 className="text-text-main font-zalendo text-2xl uppercase tracking-wide">Crecer</h3>
            </div>
            
            {/* 3. COMPARTIR (Yellow) - Campfire Icon */}
            <div 
              onClick={() => scrollToSection('glamping')}
              className="bg-accent-yellow p-8 aspect-square md:aspect-auto md:h-64 flex flex-col items-center justify-center text-center group hover:brightness-110 transition-all cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-text-main mb-4 group-hover:scale-110 transition-transform">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <h3 className="text-text-main font-zalendo text-2xl uppercase tracking-wide">Compartir</h3>
            </div>
            
            {/* 4. DISFRUTAR (Orange/Red) - Wine Glasses Icon */}
            <div 
              onClick={() => {
                setExpandedActivity('d1-sunset');
                scrollToSection('d1-sunset');
              }}
              className="bg-accent-orange p-8 aspect-square md:aspect-auto md:h-64 flex flex-col items-center justify-center text-center group hover:brightness-110 transition-all cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white mb-4 group-hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a3.75 3.75 0 0 0-3.75 3.75v3.75a3.75 3.75 0 0 0 3.75 3.75h1.5a3.75 3.75 0 0 0 3.75-3.75V6.75A3.75 3.75 0 0 0 11.25 3h-1.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 14.25v6.75m-3 0h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 3a3.75 3.75 0 0 0-3.75 3.75v3.75a3.75 3.75 0 0 0 3.75 3.75h1.5a3.75 3.75 0 0 0 3.75-3.75V6.75A3.75 3.75 0 0 0 20.25 3h-1.5Z" transform="translate(4, 0)" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v6.75m-3 0h6" transform="translate(4, 0)" />
                </svg>
                <h3 className="text-white font-zalendo text-2xl uppercase tracking-wide">Disfrutar</h3>
            </div>
        </section>

        {/* LOCATION & DATE STRIP */}
        <section id="ubicacion" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row border-b-2 border-primary">
             <div className="flex-1 bg-white p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-primary/20 hover:bg-surface-highlight transition-colors">
                 <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2">faltan</span>
                 {timeLeft ? (
                   <div className="flex gap-2 md:gap-4 justify-center items-center font-zalendo text-2xl md:text-4xl text-text-main">
                      <div className="flex flex-col items-center">
                        <span>{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="text-[10px] font-sans tracking-normal text-text-muted">DÍAS</span>
                      </div>
                      <span className="mb-4">:</span>
                      <div className="flex flex-col items-center">
                        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-[10px] font-sans tracking-normal text-text-muted">HRS</span>
                      </div>
                      <span className="mb-4">:</span>
                      <div className="flex flex-col items-center">
                        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-[10px] font-sans tracking-normal text-text-muted">MIN</span>
                      </div>
                   </div>
                 ) : (
                    <p className="font-zalendo text-3xl md:text-4xl text-text-main">19 y 20 de Marzo, 2026</p>
                 )}
             </div>
             <div className="flex-1 bg-white p-10 flex flex-col items-center justify-center text-center hover:bg-surface-highlight transition-colors">
                 <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2">Dónde</span>
                 <p className="font-zalendo text-3xl md:text-4xl text-text-main">Guanacamp, Monte Magdalena</p>
             </div>
          </div>
          
          <div className="w-full h-[400px] relative overflow-hidden bg-gray-200">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d265562.70881936833!2d-70.93810297318348!3d-33.46706471140104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x9662cf19a8dab4bd%3A0x93c1479cef180269!2sLas%20Condes%2C%20Santiago%20Metropolitan%20Region!3m2!1d-33.416108799999996!2d-70.5340623!4m5!1s0x9662e2fdc6ccd665%3A0xe8cb7c9d17c75e09!2sMonte%20Magdalena%20-%20Unnamed%20Road%2C%20El%20Monte%2C%20Regi%C3%B3n%20Metropolitana!3m2!1d-33.669966699999996!2d-70.9618658!5e0!3m2!1sen!2scl!4v1770248257571!5m2!1sen!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </section>

        {/* SECTION: PROGRAMA - CLEAN CARD STYLE */}
        <section id="programa" className="px-6 py-20 md:max-w-5xl md:mx-auto scroll-mt-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Itinerario</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-text-main font-zalendo">Programa <span className="text-secondary">Completo</span></h3>
          </div>

          <div className="relative">
             {programDays.map((day, idx) => (
              <div key={idx} className="mb-20 last:mb-0">
                {/* Cabecera del Día */}
                <div className="flex items-center gap-4 mb-8 sticky top-[72px] bg-background-page/95 backdrop-blur-xl z-30 py-4 border-b-2 border-primary/20">
                  <div className="size-4 rounded-full bg-primary animate-pulse"></div>
                  <h4 className="text-2xl md:text-4xl font-zalendo uppercase text-accent-yellow tracking-wide">
                    {day.day}
                  </h4>
                </div>
                
                <div className="space-y-4">
                   {day.activities.map((act, i) => {
                     const isExpanded = expandedActivity === act.id;
                     return (
                     <div id={act.id} key={i} className="group relative reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700">
                        <div 
                          onClick={() => toggleActivity(act.id)}
                          className={`flex flex-col rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden bg-surface ${
                            isExpanded 
                              ? 'border-primary shadow-soft' 
                              : 'border-transparent hover:border-secondary hover:shadow-lg shadow-sm'
                          }`}
                        >
                           {/* HEADER CARD */}
                           <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6">
                             {/* Columna Hora */}
                             <div className="md:w-32 shrink-0 pt-1">
                                <span className={`font-zalendo text-3xl md:text-4xl block leading-none tracking-tighter ${isExpanded ? 'text-primary' : 'text-gray-400 group-hover:text-secondary'}`}>
                                  {act.time.split(' – ')[0]}
                                </span>
                                <span className="text-xs text-text-muted font-bold tracking-widest uppercase mt-1 block">
                                   {act.time.includes('–') ? act.time.split(' – ')[1] : ''}
                                </span>
                             </div>
                             
                             {/* Columna Titulo */}
                             <div className="flex-1 flex justify-between items-start gap-4">
                                <div>
                                  {act.speaker && (
                                    <span className="inline-block px-2 py-1 bg-accent-pink/20 text-text-main text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                                      {act.speaker}
                                    </span>
                                  )}
                                  <h5 className={`text-lg md:text-xl font-bold leading-tight ${isExpanded ? 'text-text-main' : 'text-text-main group-hover:text-primary'}`}>
                                    {act.title}
                                  </h5>
                                  {!isExpanded && (
                                    <p className="text-sm text-text-muted mt-2 line-clamp-2">
                                      {act.desc}
                                    </p>
                                  )}
                                </div>
                                
                                <div className={`hidden md:flex flex-col justify-center items-center self-center transform transition-all duration-500 ${isExpanded ? 'rotate-180 text-primary' : 'text-gray-300 group-hover:text-secondary'}`}>
                                     <span className="material-symbols-outlined text-3xl">{"\ue5c8"}</span>
                                </div>
                             </div>
                           </div>

                           {/* EXPANDED CONTENT */}
                           <div className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out bg-surface-highlight ${isExpanded ? 'max-h-[500px] opacity-100 border-t border-primary/10' : 'max-h-0 opacity-0'}`}>
                             <div className="p-6 md:pl-[160px]">
                                <div className="grid grid-cols-1 gap-6">
                                   <div>
                                     <p className="text-sm md:text-base text-text-main font-medium leading-relaxed">
                                       {act.desc}
                                     </p>
                                   </div>
                                   
                                   {act.takeaways && act.takeaways.length > 0 && (
                                     <div className="bg-white p-5 rounded-lg border-l-4 border-accent-yellow shadow-sm">
                                       <h6 className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2">
                                         <span className="material-symbols-outlined text-accent-yellow text-sm">{"\ue8d0"}</span>
                                         Lo que te llevarás
                                       </h6>
                                       <ul className="space-y-2">
                                         {act.takeaways.map((takeaway, tIdx) => (
                                           <li key={tIdx} className="flex items-start gap-3 text-sm text-gray-700">
                                             <span className="text-secondary mt-1 text-xs">●</span>
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
        
        {/* WHY ATTEND - RESTORED TO ICON-IN-CIRCLE STYLE AS REQUESTED */}
        <section id="por-que-asistir" className="px-6 py-20 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">La Esencia</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-text-main font-zalendo">¿Por qué <span className="text-accent-orange italic">Asistir?</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Items styled with the distinct icon circle layout from version 1 */}
                    {[
                        { icon: "\ue9f4", color: "text-secondary", title: "Más allá de un modelo", desc: "No nos limitamos a un solo modelo teórico." },
                        { icon: "\ue8e8", color: "text-primary", title: "Sello Clínico Homogéneo", desc: "Cuidamos meticulosamente que todo el programa se centre en las últimas investigaciones y congresos internacionales." },
                        { icon: "\uf233", color: "text-accent-pink", title: "Intimidad Exclusiva", desc: "Valoramos la conversación y la reflexión, no es un congreso masivo, es un encuentro entre quienes queremos compartir." },
                        { icon: "\ue04b", color: "text-accent-orange", title: "Sin Grabaciones", desc: "Lo que pasa en el camp, queda en el camp. Privacidad total." },
                        { icon: "\ue3b6", color: "text-secondary", title: "Un Formato Inédito", desc: "Un congreso único en Monte Magdalena. Desconectar para conectar." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-background-page p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="size-14 rounded-full bg-white border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                <span className={`material-symbols-outlined text-3xl ${item.color}`}>{item.icon}</span>
                            </div>
                            <h4 className="text-lg font-bold text-text-main mb-3 font-zalendo uppercase">{item.title}</h4>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div id="glamping">
            <ExperienceCard />
        </div>
        <Exponents />

        <section id="novedades" className="px-6 py-20 bg-background-page scroll-mt-24">
           <div className="md:max-w-4xl md:mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Novedades</h2>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-accent-pink transition-colors group">
                <p className="text-[10px] text-accent-pink font-bold uppercase mb-2">Marzo 05</p>
                <h4 className="font-bold mb-2 text-text-main group-hover:text-primary transition-colors">Cupos de Glamping Agotados</h4>
                <p className="text-sm text-text-muted">Debido a la alta demanda, las plazas premium de glamping han sido completadas.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-accent-yellow transition-colors group">
                <p className="text-[10px] text-accent-yellow font-bold uppercase mb-2">Febrero 28</p>
                <h4 className="font-bold mb-2 text-text-main group-hover:text-primary transition-colors">Nueva Experiencia de Mixología</h4>
                <p className="text-sm text-text-muted">Confirmamos la participación de maestros mixólogos.</p>
              </div>
            </div>
           </div>
        </section>

        {/* Footer Organizers */}
        <footer className="px-6 py-20 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
             <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] mb-12 font-semibold">Organizan</p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
                {/* Logos - removing invert filter since background is now light */}
                <img 
                  src="https://www.clinicadeansiedad.cl/wp-content/uploads/2024/01/Logo-300-CACH-negro.png" 
                  alt="Clínica de Ansiedad Chile" 
                  className="h-12 md:h-16 w-auto object-contain hover:scale-110 transition-transform"
                />
                
                <div className="w-16 h-px bg-gray-300 md:w-px md:h-12"></div>

                <img 
                  src="https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-9080-cover.png" 
                  alt="La Familia Que Quiero" 
                  className="h-12 md:h-16 w-auto object-contain hover:scale-110 transition-transform"
                />
             </div>
             <p className="text-[10px] text-text-muted mt-16">© 2026 Conecta-Camp · Monte Magdalena</p>
          </div>
        </footer>

      </main>

      {/* Gemini Concierge Removed as requested */}

      <div id="registro" className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-lg border-t border-gray-200 z-[50]">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <a 
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] text-center text-xs md:text-sm shadow-soft hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu flex items-center justify-center gap-3 hover:bg-primary-dark"
          >
            FORMULARIO DE INSCRIPCIÓN
          </a>

          <a 
            href={DAILY_PASS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-accent-yellow border border-accent-yellow text-text-main font-bold py-3 rounded-xl uppercase tracking-[0.2em] text-center text-[10px] md:text-xs hover:bg-accent-yellow/90 hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu flex items-center justify-center gap-2"
          >
             COMPRAR PASE DIARIO
          </a>
        </div>
      </div>

      <div className="h-48 bg-background-page"></div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
