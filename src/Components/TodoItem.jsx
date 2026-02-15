import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <div className="flex justify-between items-center p-3 border rounded mb-2">
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border p-1 rounded"
        />
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          className={todo.completed ? "line-through cursor-pointer" : "cursor-pointer"}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={() => {
              updateTodo(todo.id, newText);
              setIsEditing(false);
            }}
            className="text-green-500"
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-500"
          >
            Düzenle
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
