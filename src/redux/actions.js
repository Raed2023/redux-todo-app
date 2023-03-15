import { ADD, COMPLET, DELETE_TASK } from "./actionTypes";

export const handleAdd = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};
export const handleDelete = (THEID) => {
  return {
    type: DELETE_TASK,
    payload: THEID,
  };
};
export const handleComplet = (COMID) => {
    return {
      type: COMPLET,
      payload: COMID,
    };
  };


