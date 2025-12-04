import { GoogleGenAI } from "@google/genai";
import { FULL_CONTEXT_TEXT } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const systemInstruction = `
      Eres un asistente experto en Inteligencia Artificial para el sector público, basado específicamente en el material del módulo 'Tipos de IA' de la Universidad de Cartagena.
      
      Tu contexto de conocimiento es el siguiente:
      ${FULL_CONTEXT_TEXT}

      Instrucciones:
      1. Responde preguntas basándote PRINCIPALMENTE en el texto proporcionado.
      2. Si la respuesta no está en el texto, puedes usar tu conocimiento general pero aclara que es información externa.
      3. Mantén un tono profesional, educativo y amable.
      4. Sé conciso pero informativo.
      5. Si te preguntan por ejemplos, prioriza los mencionados en el texto (Estonia, Mendoza, UK, Francia).
    `;

    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
      }
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Hubo un error al conectar con el asistente de IA. Por favor verifica tu conexión o la clave de API.";
  }
};