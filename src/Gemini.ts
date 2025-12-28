import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import type  { GeminiConfig, AskOptions } from "./types";

export class Gemini {
  private model: GenerativeModel;

  constructor(config: GeminiConfig) {
    if (!config.apiKey) {
      throw new Error("Gemini API key is required");
    }

    const genAI = new GoogleGenerativeAI(config.apiKey);

    this.model = genAI.getGenerativeModel({
      model: config.model ?? "gemini-2.5-flash",
      systemInstruction: config.instruction,
    });
  }

 async ask(prompt: string, options?: AskOptions): Promise<string> {
  try {
    const result = await this.model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: options?.temperature ?? 0.7,
        maxOutputTokens: options?.maxOutputTokens ?? 1024,
      },
    });

    return result.response.text();
  } catch (error: any) {
    throw new Error(
      `Gemini request failed: ${error?.message ?? "Unknown error"}`
    );
  }
}

}
