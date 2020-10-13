import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
