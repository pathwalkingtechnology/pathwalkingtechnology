import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

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

    setInput("");
  };

  return (
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
      <style jsx>{`
        .chatbot {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 300px;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
        }
        .chatbot-messages {
          max-height: 400px;
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
          width: calc(100% - 70px);
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
