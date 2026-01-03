import { PencilIcon, Save, Trash2, X } from "lucide-react";
import React, { useState } from "react";

const TodoItem = ({ todo, handleDelete, toggleStatus, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  return (
    <li className="bg-white px-5 py-2 sm:py-4 text-sm rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            disabled={isEditing}
            checked={todo.status}
            onChange={() => toggleStatus(todo.id)}
            className="sm:w-4 sm:h-4"
          />
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                autoFocus
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-transparent border border-gray-300 px-3 py-1 sm:py-2 rounded-lg text-sm w-32 sm:w-56 md:w-80"
              />

              <Save
                size={24}
                onClick={() => {
                  handleEdit(todo.id, editText);
                  setIsEditing(false);
                }}
                className=" bg-blue-500 text-white p-1 sm:w-8 sm:h-8 rounded-md cursor-pointer"
              />
              <X
                size={24}
                onClick={() => setIsEditing(false)}
                className="bg-[#99a1af] text-white p-1 sm:w-8 sm:h-8 rounded-md cursor-pointer"
              />
            </div>
          ) : (
            <p className={`${todo.status && "line-through text-gray-400"}`}>
              {todo.text}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <PencilIcon
            size={18}
            onClick={() => setIsEditing(!isEditing)}
            className="cursor-pointer text-blue-500 sm:w-5 sm:h-5"
          />
          <Trash2
            size={18}
            onClick={() => handleDelete(todo.id)}
            className="cursor-pointer text-red-500 sm:w-5 sm:h-5"
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
