import { useState, useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: "user" | "ai";
  content: string;
}

// Remove trailing slash if exists
const API_URL = (
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"
).replace(/\/$/, "");

export default function AIChat({ isOpen, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Hi 👋 I'm Astha's AI assistant. Ask me about skills, projects, or experience!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) return null;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userInput },
    ]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: data.response || "No response from AI.",
        },
      ]);
    } catch (error: any) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            error?.message ||
            "⚠️ Server error. Please check backend.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="w-full max-w-md h-[600px] bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-800">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
          <h2 className="font-semibold text-sm tracking-wide">
            AI Assistant
          </h2>
          <button
            onClick={onClose}
            className="hover:opacity-70 transition"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-slate-800 text-slate-200 border border-slate-700"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-2xl text-sm text-slate-300 w-fit">
              Typing...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-slate-800 flex gap-2 bg-slate-900">
          <input
            type="text"
            placeholder="Ask about my projects..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition shadow-lg shadow-indigo-900/40"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}