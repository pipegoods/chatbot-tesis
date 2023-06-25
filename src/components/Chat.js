"use client";

import { useChat } from "ai/react";
import { useEffect } from "react";

export function Chat() {
  const { messages, input, handleSubmit, handleInputChange } = useChat();

  const isAssistant = (role) => role === "assistant";

  useEffect(() => {
    const chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
  }, [messages]);

  return (
    <section className="md:max-w-xl">
      <h1 className="text-2xl font-bold">Tesis Chatbot</h1>
      <p className="text-sm text-gray-500">
        Te ayudaré a corregir tu tesis, solo hazme preguntas que estoy seguro de
        que te responderé acertadamente.
      </p>

      <article
        className="flex flex-col overflow-y-auto max-h-[50vh] mt-5 mb-10"
        style={{ scrollBehavior: "smooth" }}
        id="chat"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              isAssistant(message.role) ? "text-blue-500" : "text-black"
            } text-sm mb-2`}
          >
            <strong>
              {isAssistant(message.role) ? "Tutor 🤖" : "Estudiante"}
            </strong>
            : {message.content}
          </div>
        ))}
      </article>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-wrap justify-center gap-1"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe tu pregunta"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[250px] md:max-w-xl"
        />

        <button
          type="submit"
          className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
