
import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';

// Instrucciones del sistema trasladadas al frontend para evitar uso de Serverless Functions
const SYSTEM_INSTRUCTION = `
You are the official digital concierge for Conecta-Camp, a high-level psychology congress in Monte Magdalena, Chile.
Dates: March 19-20, 2026.
Location: Monte Magdalena, Chile (Southern Andes).
Themes: Human connection ("El vínculo no se improvisa"), elite networking, high-impact psychology.

PROGRAM SCHEDULE:
- Thursday March 19:
  09:30: Macarena Torres (Case conceptualization via attachment).
  10:50: María Inés Pesqueira (Clinical demo).
  12:35: Paula Uribe (Relationships with narcissists).
  14:55: José & Lucas Uribe (Wiston technology & therapeutic alliance).
  16:30: Camila Señoret (Blended families).
  20:00: Mixology class & networking.
- Friday March 20:
  09:00: Breakfast & Closing.
  10:00: Round Table (Adolescence & attachment) with Elisa Señoret, Catalina Fracchia, Loreto Gálvez.

PAYMENT & REGISTRATION:
- There are TWO main options for attending, both visible at the bottom of the screen:
  1. POSTULAR E INSCRIBIRME: Primary green button. Links to a Google Form. This is for the full experience.
  2. COMPRAR PASE DIARIO: Secondary transparent button. Links directly to a payment page for a 1-day pass.

- If asked about the "Pase Diario" (Day Pass), guide them to the secondary button labeled "COMPRAR PASE DIARIO".
- If asked about the full congress or general registration, guide them to the "POSTULAR E INSCRIBIRME" button.

Style: Professional, sophisticated, slightly mysterious but helpful. Keep responses concise and focused on the event details.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: 'user' | 'model', parts: {text: string}[]}[] = []) => {
  try {
    // Inicializamos el cliente de Gemini directamente en el cliente
    // Esto hace que la app sea SPA (Single Page Application) pura, sin backend.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const contents = [
      ...history,
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;

  } catch (error) {
    console.error("Error conectando con el Concierge:", error);
    return "Lo siento, estoy experimentando dificultades de conexión en Monte Magdalena. Por favor intenta nuevamente.";
  }
};
