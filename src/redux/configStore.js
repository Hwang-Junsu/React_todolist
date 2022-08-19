import {createStore} from "redux";

const initialData = {
  id: 0,
  title: "투두리스트",
  comment: "투두리스트 페이지를 완성시키자.",
  isDone: false,
};

const ADD = "ADD";
const DELETE = "DELETE";
const DONE = "DONE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (text) => {
  return {
    type: DELETE,
    text,
  };
};
export const doneToDo = (text) => {
  return {
    type: DONE,
    text,
  };
};

const reducer = (state = [initialData], action) => {
  switch (action.type) {
    case ADD:
      return [
        {
          title: action.text.title,
          comment: action.text.comment,
          id: Date.now(),
        },
        ...state,
      ];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.text.id);
    case DONE:
      return state.map((toDo) =>
        toDo.id === action.text.id ? {...toDo, isDone: !toDo.isDone} : toDo
      );
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
