
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const GeminiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola, soy tu concierge de Conecta-Camp. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getGeminiResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Sin respuesta.' }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-48 md:bottom-10 right-6 size-14 bg-primary text-white rounded-full shadow-lg z-40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all overflow-hidden"
        aria-label="Concierge IA"
      >
        <span className="material-symbols-outlined !text-3xl pointer-events-none select-none">smart_toy</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm flex items-end md:items-center justify-center p-4">
          <div className="bg-white w-full max-w-md h-[70vh] rounded-t-3xl md:rounded-3xl border border-gray-200 flex flex-col shadow-2xl animate-fade-in-up">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-primary rounded-t-3xl text-white">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Concierge IA</h3>
                  <p className="text-[10px] text-white/80 uppercase tracking-widest">En línea</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-primary text-white font-medium rounded-br-none' 
                    : 'bg-white text-text-main border border-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl animate-pulse flex gap-1 border border-gray-100">
                    <div className="size-1.5 bg-primary/50 rounded-full"></div>
                    <div className="size-1.5 bg-primary/50 rounded-full animation-delay-200"></div>
                    <div className="size-1.5 bg-primary/50 rounded-full animation-delay-400"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-white rounded-b-3xl">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu duda sobre el evento..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-text-main placeholder-gray-400"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-primary text-white size-12 rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-primary-dark transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiConcierge;
