import { React, useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };
  const handleClick = () => {
    if (!enteredTask.trim()) return; // Prevent adding empty tasks
    onAdd(enteredTask.trim());
    setEnteredTask(""); // Clear input only after adding
  };

  return (
    <div className="flex item-center gap-4">
      <input
        className="w-64 rounded-sm px-2 py-1 bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 p-2 bg-stone-200 rounded-md hover:text-stone-900 hover:bg-stone-300 "
        onClick={handleClick} // Add this line
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
