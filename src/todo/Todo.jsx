import { CheckCircle2, ListTodo } from "lucide-react";
import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoStatus from "../components/TodoStatus";
import toast from "react-hot-toast";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const EmptyState = {
    All: {
      icon: <ListTodo size={36} />,
      text: "No tasks yet. Add one above!",
    },
    Active: {
      icon: <CheckCircle2 size={36} />,
      text: "All tasks completed! 🎉",
    },
    Completed: {
      icon: <CheckCircle2 size={36} />,
      text: "No completed tasks yet.",
    },
  };

  const addTodo = () => {
    toast.dismiss();
    if (!newTodo.trim()) {
      return toast.error("Please Add task");
    }

    const newTodoObj = {
      id: Date.now(),
      text: newTodo,
      status: false,
    };

    setTodos([...todos, newTodoObj]);
    toast.success("Task Added");
    setNewTodo("");
  };

  const handleDelete = (id) => {
    toast.dismiss();
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
    toast.success("Task Deleted Successfully");
  };

  const toggleStatus = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodo);
  };

  const handleEdit = (id, editText) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodo);
    toast.success("Task Updated Successfully");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return todo.status === false;
    if (filter === "Completed") return todo.status === true;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedCount = todos.filter((t) => t.status).length;

  const clearCompleted = () => {
    const updatedTodo = todos.filter((t) => !t.status);
    setTodos(updatedTodo);
  };

  return (
    <div className="bg-[#ebf2ff] min-h-screen pt-5">
      <div className="flex justify-center items-center gap-3">
        <ListTodo className="text-[#155dfc]" />
        <h1 className="text-xl sm:text-2xl font-semibold">My Tasks</h1>
      </div>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <div className="md:max-w-xl md:w-full md:mx-auto sm:flex sm:items-center sm:justify-between">
        <TodoStatus todos={todos} filter={filter} setFilter={setFilter} />

        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="mx-2 md:mx-0 mt-3 sm:mt-0 text-sm text-gray-500 px-3 sm:px-4 md:px-0 py-1 whitespace-nowrap"
          >
            Clear Completed
          </button>
        )}
      </div>

      {filteredTodos.length > 0 ? (
        <div>
          <TodoList
            todos={filteredTodos}
            handleDelete={handleDelete}
            toggleStatus={toggleStatus}
            handleEdit={handleEdit}
          />
        </div>
      ) : (
        <div className="mt-20 flex flex-col justify-center items-center gap-5 text-gray-400">
          {EmptyState[filter].icon}
          <p className="text-sm">{EmptyState[filter].text}</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
