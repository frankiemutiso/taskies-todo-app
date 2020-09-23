import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { task: "Code", isCompleted: false },
    { task: "Sleep", isCompleted: false },
    { task: "Repeat", isCompleted: false }
  ]);

  const addTodo = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Taskies</h1>
      <h3>
        {todos.length}{" "}
        {todos.length > 1 || todos.length === 0 ? "tasks" : "task"} remaining
      </h3>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todos
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
        />
      ))}
    </div>
  );
}

export default App;
