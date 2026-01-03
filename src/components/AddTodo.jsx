import React from "react";

const AddTodo = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className="m-5">
      <div className="flex items-center gap-2 md:max-w-xl md:w-full md:mx-auto">
        <input
          type="text"
          autoFocus
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new Task..."
          className="bg-transparent border border-gray-300 px-3 py-2 sm:py-3  rounded-lg text-sm sm:text-md w-full"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-3 rounded-lg text-xl sm:text-sm flex items-center gap-2 flex-shrink-0"
        >
          + <span className="hidden sm:inline">Add</span>
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
