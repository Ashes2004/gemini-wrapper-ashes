export interface GeminiConfig {
  apiKey: string;
  model?: string;
  instruction?: string;
}

export interface AskOptions {
  temperature?: number;
  maxOutputTokens?: number;
}
