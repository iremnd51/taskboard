import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
     <input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Yeni görev ekle..."
  className="w-full p-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none"
/>

      <button className="bg-blue-500 text-white px-4 rounded">
        Ekle
      </button>
    </form>
  );
}
