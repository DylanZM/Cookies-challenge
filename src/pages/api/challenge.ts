import type { APIRoute } from 'astro';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;

export const POST: APIRoute = async () => {
  if (!API_KEY) {
    return new Response(JSON.stringify({ 
      challenge: "Drink a glass of water (API Key missing in .env!)" 
    }), { status: 200, headers: { "Content-Type": "application/json" } });
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = "Generate a single, short, random daily challenge for personal growth, health, or mindfulness in English. It must be 1 sentence max. Just return the text of the challenge, no quotes, no extra formatting. Make it sound like a fun real-life quest.";
    
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/"/g, "").trim();
    
    return new Response(JSON.stringify({ challenge: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    console.error("Gemini API Error:", e);
    return new Response(JSON.stringify({ 
      challenge: "Take 5 deep breaths (API Error)" 
    }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
};
