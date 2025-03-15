import React from "react";
import TodoList from "./components/TodoList"; // Ensure the correct path

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}
import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

export default App;
