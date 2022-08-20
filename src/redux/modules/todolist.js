import {db} from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const initialData = {
  title: "투두리스트",
  comment: "투두리스트 페이지를 완성시키자.",
  isDone: false,
};

//Actions
const LOAD = "LOAD";
const ADD = "ADD";
const DELETE = "DELETE";
const DONE = "DONE";

export function loadToDo(todolist) {
  return {type: LOAD, todolist};
}
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

//middlewares
export const loadTodolist = () => {
  return async function (dispatch) {
    const todo_data = await getDocs(collection(db, "todolist"));

    let todo_list = [];
    todo_data.forEach((doc) => {
      todo_list.push({...doc.data()});
    });
    dispatch(loadToDo(todo_list));
  };
};
export const addToDoFB = (toDo) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "todolist"), toDo);
    const _toDo = await getDoc(docRef);
    const todo_data = {id: _toDo.id, ..._toDo.data()};

    dispatch(addToDo(todo_data));
  };
};

export const updateToDoFB = (todo_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "todolist", todo_id);
    await updateDoc(docRef, {isDone: !docRef.data().isDone});

    const _todo_list = getState().todolist;
    const todo_index = _todo_list.findIndex((todo) => {
      console.log(todo.id, todo_id);
      return +todo.id === +todo_id;
    });
    dispatch(doneToDo(_todo_list[todo_index]));
  };
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case "LOAD": {
      return action.todolist;
    }

    case ADD:
      return [action.text, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.text.id);
    case DONE:
      return state.map((toDo) =>
        toDo.id === action.text.id ? {...toDo, isDone: !toDo.isDone} : toDo
      );
    default:
      return state;
  }
}
