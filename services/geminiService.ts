import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime crashes in dev without env
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateSlogans = async (niche: string): Promise<string[]> => {
  if (!ai) {
    // Simulate response if no API key is present for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1500));
    return [
      `Plante o futuro com ${niche}.`,
      `${niche} que transforma realidades.`,
      `A força natural do seu ${niche}.`
    ];
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Você é um redator publicitário criativo da agência "Plante".
    Crie 3 slogans curtos, impactantes e modernos (máximo 6 palavras) para uma empresa do nicho: "${niche}".
    O tom de voz deve ser ousado, criativo e inspirador.
    Retorne APENAS os 3 slogans separados por quebras de linha, sem numeração ou introdução.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    const text = response.text || '';
    return text.split('\n').filter(line => line.trim().length > 0);
  } catch (error) {
    console.error("Error generating slogans:", error);
    throw new Error("Failed to generate slogans");
  }
};