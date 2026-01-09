
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAuraResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the official AI Assistant for AURA Tech, a startup team of 7 experts specializing in AI, Web Development, Mobile Apps, and IoT. 
        Your goal is to represent AURA Tech professionally. 
        AURA Tech's notable projects include: AI Chatbot for College, Mozhi (Communication System), and Event Registerpro (Registration system).
        Your tone should be innovative, friendly, and expert-driven. Encourage users to collaborate with AURA Tech for their upcoming projects.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a minor sync issue with the AURA servers. How else can I assist you with our services today?";
  }
};
