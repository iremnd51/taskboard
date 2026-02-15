export default function createTodo(id, text, completed = false) {
  return {
    id,
    text,
    completed,
  };
}
