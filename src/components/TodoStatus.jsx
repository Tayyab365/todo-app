import React from "react";

const TodoStatus = ({ todos, filter, setFilter }) => {
  return (
    <div className="mx-5 pt-2 space-x-5 text-sm md:max-w-xl md:w-full md:mx-auto">
      <span
        onClick={() => setFilter("All")}
        className={`px-3 py-2 rounded-lg cursor-pointer ${
          filter === "All" && "bg-white"
        }`}
      >
        All ({todos.length})
      </span>
      <span
        onClick={() => setFilter("Active")}
        className={`px-3 py-2 rounded-lg cursor-pointer ${
          filter === "Active" && "bg-white"
        }`}
      >
        Active ({todos.filter((t) => !t.status).length})
      </span>
      <span
        onClick={() => setFilter("Completed")}
        className={`px-3 py-2 rounded-lg cursor-pointer ${
          filter === "Completed" && "bg-white"
        }`}
      >
        Completed ({todos.filter((t) => t.status).length})
      </span>
    </div>
  );
};

export default TodoStatus;
