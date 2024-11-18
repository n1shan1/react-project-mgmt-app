import React from "react";
import noprojectimage from "../assets/no-projects.png";
import Button from "./resuables/Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-3xl p-0 m-0 font-bold text-stone-500 my-4">
        Project Manager
      </div>
      <div className="mt-24 text-center w-2/3 mx-auto">
        <img
          src={noprojectimage}
          alt="No projects available"
          className="h-16 w-16 object-contain mx-auto"
        />

        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400">
          Select a project or get started with a new one!
        </p>
        <p className="mt-8">
          <Button onClick={onStartAddProject}>Create new Project</Button>
        </p>
      </div>
    </div>
  );
};

export default NoProjectSelected;
