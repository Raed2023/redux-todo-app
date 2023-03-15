import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../redux/actions";

const AddNewTask = () => {
  const [newTaskAction, setNewTaskAction] = useState("hello");
  const dispatch=useDispatch()
  const handleSubmit = (e) => {
e.preventDefault()
    const newTodoTask = {
      id: Math.random(),
      action: newTaskAction,
      isDone: false,
    };
dispatch(handleAdd(newTodoTask))
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTaskAction}
          onChange={(e) => setNewTaskAction(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNewTask;
