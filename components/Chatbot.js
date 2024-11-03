import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Abrir y cerrar el chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Enviar mensaje a la API y manejar la respuesta
  const sendMessage = async () => {
    if (!input.trim()) return; // Evitar mensajes vacíos

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error comunicándose con OpenAI:", error);
      const errorMessage = { role: "assistant", content: "Hubo un error. Inténtalo de nuevo." };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chatbot-container">
      <button onClick={toggleChatbot} className="chatbot-toggle">
        {isOpen ? "Cerrar Chatbot" : "Abrir Chatbot"}
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Escribe tu mensaje aquí..."
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      )}

      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 80px; /* Ajuste para evitar conflicto con el botón de WhatsApp */
          right: 20px;
          width: 300px;
          z-index: 1000;
        }
        .chatbot-toggle {
          background-color: #0070f3;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
        }
        .chatbot {
          margin-top: 10px;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
        }
        .chatbot-messages {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 10px;
        }
        .message.user {
          text-align: right;
          color: blue;
        }
        .message.assistant {
          text-align: left;
          color: green;
        }
        input {
          width: calc(100% - 60px);
          padding: 8px;
          margin-right: 5px;
        }
        button {
          padding: 8px 12px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
