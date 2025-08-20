import { useState, useRef, useEffect } from "react";
import { Copy, Mic } from "lucide-react";
import ReactMarkdown from "react-markdown";

const Chatbotcor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = message.trim();
    if (!userMessage) return;

    setChatLog((prev) => [...prev, { type: "user", text: userMessage }]);
    setMessage("");
    setIsThinking(true);

    const response = await fetch("http://127.0.0.1:8000/api/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        setIsThinking(false);
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      setChatLog((prev) => {
        const updated = [...prev];
        if (updated.length && updated[updated.length - 1].type === "bot") {
          updated[updated.length - 1].text += chunk;
        } else {
          updated.push({ type: "bot", text: chunk });
        }
        return updated;
      });
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  return (
    <>
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
        >
          💬
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[350px] h-[500px] bg-gray-950 rounded-xl shadow-2xl border border-gray-800 flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-xl">
            <span className="font-bold">CodePilot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm shadow ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                  {msg.type === "bot" && (
                    <button
                      onClick={() => navigator.clipboard.writeText(msg.text)}
                      className="text-xs text-gray-300 hover:text-white mt-1"
                    >
                      Copy
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="text-gray-400 text-sm">Thinking...</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-800 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbotcor;
