import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, toggleStatus, handleEdit }) => {
  return (
    <div className="m-5 my-5 md:max-w-xl md:w-full md:mx-auto">
      <ul className="space-y-5">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            toggleStatus={toggleStatus}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
