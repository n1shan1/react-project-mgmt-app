import React, { useRef } from "react";
import Modal from "./resuables/Modal";
import Input from "./resuables/Input";

const NewProject = ({ onAddProject, onCancel }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption={"Okay"}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400">
          Seems like there are some issues in your inputs!
        </p>
        <p className="text-stone-400">Enter the valid inputs!</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-900"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950 "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label={"Title"} />
          <Input ref={descRef} label={"Description"} isTextArea={true} />
          <Input type="date" ref={dueDateRef} label={"Due Date"} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
