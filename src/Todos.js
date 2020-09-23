import React from "react";
import "./Todos.css";
import Button from "@material-ui/core/Button";

function Todos({ todo, index, deleteTodo, completedTodo }) {
  return (
    <div className="todos">
      <div
        style={{ color: todo.isCompleted ? "lightgray" : "" }}
        className="todo"
      >
        {todo.task}
      </div>

      <div>
        <Button
          className="btn-delete"
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => deleteTodo(index)}
        >
          Delete
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          className="btn-completed"
          onClick={() => completedTodo(index)}
        >
          {todo.isCompleted ? `complete` : `incomplete`}
        </Button>
      </div>
    </div>
  );
}

export default Todos;
