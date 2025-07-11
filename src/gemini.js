import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

let api_key = "AIzaSyCnl12-E9xeepBHSSwZylvVpAUxWQK47Fc"

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

const genAI = new GoogleGenerativeAI(api_key);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text() ; 
}

export default run;