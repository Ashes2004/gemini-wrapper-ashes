# gemini-wrapper-by-ashes

A simple, type-safe **Node.js / TypeScript wrapper** for the Google Gemini API.  
This package helps you initialize Gemini once and ask questions easily with clean abstractions.

> ⚠️ Server-side only. Do NOT use this package in browser or client-side code.

---

## Features

- ✅ Easy initialization with API key
- ✅ Type-safe (written in TypeScript)
- ✅ Clean `ask()` method
- ✅ Supports system instructions
- ✅ Works with Node.js, Next.js (server), Express, etc.
- ✅ Ships both ESM and CommonJS builds

---

## Installation

```bash
npm install gemini-wrapper-by-ashes
```

---

## Requirements

- Node.js 18 or higher
- A valid Google Gemini API key

---

## Basic Usage

```typescript
import { Gemini } from "gemini-wrapper-by-ashes";

const ai = new Gemini({
  apiKey: process.env.GEMINI_API_KEY!,
  model: "gemini-1.5-flash",
  instruction: "You are a helpful assistant"
});

(async()=>{
const response = await ai.ask("Explain TypeScript generics");
console.log(response);
})();
```

---

## Configuration

### `Gemini` constructor

```typescript
new Gemini(config)
```

### `config` options

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiKey` | `string` | ✅ Yes | Your Gemini API key |
| `model` | `string` | ❌ No | Gemini model name (default: `gemini-2.5-flash`) |
| `instruction` | `string` | ❌ No | System instruction (system prompt) |

---

## ask() Method

```typescript
ask(prompt: string, options?: AskOptions): Promise<string>
```

### Example

```typescript
const reply = await ai.ask("What is async/await?");
```

### AskOptions

```typescript
{
  temperature?: number;
  maxOutputTokens?: number;
}
```

Example with options:

```typescript
const reply = await ai.ask("Explain recursion", {
  temperature: 0.3,
  maxOutputTokens: 500
});
```

---

## Error Handling

Errors are thrown normally and should be handled using `try/catch`.

```typescript
try {
  const res = await ai.ask("Hello");
  console.log(res);
} catch (err: any) {
  console.error(err.message);
}
```

Common error cases:
- Invalid API key
- Invalid model name
- Network issues

---

## Important Notes

### Server-side only

This package is NOT safe for frontend usage.

❌ Do NOT use in:
- React frontend
- Vite
- Client-side Next.js

✅ Safe for:
- Node.js backend
- Next.js API routes / server components
- Express / NestJS
- CLI tools

---

## TypeScript Support

This package ships with built-in type definitions.

```typescript
import type { GeminiConfig, AskOptions } from "gemini-wrapper-by-ashes";
```

No extra setup required.

---

## Models

Model names are not validated locally. If an invalid model is used, Gemini API will throw an error at request time.

Example valid models (subject to change by Google):
- `gemini-2.5-flash`
- `gemini-2.5-pro`

---

## Project Structure (internal)

```
src/
├── Gemini.ts      // Core wrapper class
├── types.ts       // Type definitions
└── index.ts       // Public exports
```

---