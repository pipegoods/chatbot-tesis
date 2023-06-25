import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

// Definir el runtime de este endpoint
export const runtime = "edge"

// Crear el clietnte de OpenAI
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

export async function POST (req, res) {

  const { messages } = await req.json();


  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        content: 'Actua como mi asesor de tesis, ayudame a corregir puntos de mi tesis y a mejorarla',
        role: 'system',
      },
      {
        content: 'Como debo redactar la idea principal',
        role: 'user',
      },
      {
        content: 'La idea principal debe ser clara y concisa, debe ser una oración que resuma el contenido de tu tesis',
        role: 'system',
      },
      ...messages,
    ],
    max_tokens: 500,
    temperature: 0.9,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  // Transformar la respuesta de openai en un text-stream
  const stream = new OpenAIStream(response)
  return new StreamingTextResponse(stream)
}