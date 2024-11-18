import React from "react";
import Button from "./resuables/Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) => {
  return (
    <aside className="h-screen w-1/3 m-0 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-300 hover:bg-stone-800";
          if (project.id === selectedProjectID) {
            cssClasses += " bg-stone-800 text-stone-400";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li className="mt-4" key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;