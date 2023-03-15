import { ADD, COMPLET, DELETE_TASK } from "./actionTypes";

const init = {
  todos: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
      case DELETE_TASK:
        return{

            ...state,todos:state.todos.filter(el=>el.id!==payload)
        };
        case COMPLET:
            return{
                ...state,
                todos:state.todos.map(el=>el.id==payload?{...el,isDone:!el.isDone}:el)
            }


    default:
      return state;
  }
};
