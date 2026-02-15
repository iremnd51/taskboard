import { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm";
import TodoItem from "../Components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) setTodos(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

 return (
  <div className="relative min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 flex items-center justify-center px-4 overflow-hidden">

    {/* Floating Bubbles */}
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <span className="bubble w-20 h-20 left-[10%]"></span>
      <span className="bubble w-32 h-32 left-[25%]"></span>
      <span className="bubble w-16 h-16 left-[50%]"></span>
      <span className="bubble w-24 h-24 left-[70%]"></span>
      <span className="bubble w-28 h-28 left-[85%]"></span>
    </div>

    <div className="relative z-10 backdrop-blur-lg bg-white/20 border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-xl text-white transition-all duration-500 hover:scale-105">

      <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
        ✨ TaskBoard ✨
      </h1>

      <TodoForm addTodo={addTodo} />

      <div className="mt-4">
        {todos.length === 0 ? (
          <p className="text-center text-white/80 italic">
            Henüz görev yok 🚀
          </p>
        ) : (
          <>
            <p className="text-sm mb-3 text-white/80">
              Toplam {todos.length} görev
            </p>

            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
              />
            ))}
          </>
        )}
      </div>

    </div>
  </div>
);

}
