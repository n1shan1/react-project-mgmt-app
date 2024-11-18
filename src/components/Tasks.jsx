import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any task yet.
        </p>
      ) : (
        <ul className="w-full p-4 mt-4 rounded-lg bg-stone-100">
          {tasks.map((task) => (
            <li
              className="flex justify-between m-4 bg-stone-300 rounded-xl p-4"
              key={task.id}
            >
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-400"
                onClick={() => onDelete(task.id)}
                aria-label={`Delete task: ${task.text}`}
              >
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
