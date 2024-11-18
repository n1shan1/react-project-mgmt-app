import { React, forwardRef } from "react";

const Input = forwardRef(({ label, isTextArea, ...props }, ref) => {
  const classes = {
    input:
      "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600",
    label: "text-sm font-bold uppercase text-stone-500",
    p: "flex flex-col gap-1 my-4",
  };
  return (
    <p className={classes.p}>
      <label className={classes.label}>{label}</label>
      {isTextArea ? (
        <textarea ref={ref} className={classes.input} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes.input} {...props} />
      )}
    </p>
  );
});

export default Input;
