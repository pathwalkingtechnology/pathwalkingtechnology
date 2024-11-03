import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
        onClick={toggleChatbot}
        aria-label="Chat with Path"
      >
        💬
      </button>

      {isOpen && (
        <div className="chat-window bg-white shadow-lg rounded-lg p-4 mt-2 w-80 max-h-96">
          <div className="chat-header flex justify-between items-center">
            <h3 className="text-lg font-bold">Path Chatbot</h3>
            <button onClick={toggleChatbot}>✖</button>
          </div>
          <div className="chat-body overflow-y-auto mt-4">
            {/* Aquí se integrará el cuerpo del chat, incluyendo la API */}
          </div>
          <div className="chat-footer mt-4">
            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
