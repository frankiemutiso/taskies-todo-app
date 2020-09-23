import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form action="" className="app__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoForm;
