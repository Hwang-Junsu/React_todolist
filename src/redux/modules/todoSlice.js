import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todolist",
  initialState: [],
  reducers: {
    loadToDo: (state, action) => {
      return action.payload;
    },
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    doneToDo: (state, action) => {
      return state.map((toDo) =>
        toDo.id === action.payload.id ? { ...toDo, isDone: !toDo.isDone } : toDo
      );
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
  },
});

//middleware(firebase)
export const loadTodolist = () => {
  // 파이어스토어 db에 todolist라는 이름의 collection을 받아와서 아이디 값을 부여하고 리덕스에 넣을 것임.
  return async function (dispatch) {
    const todo_data = await getDocs(collection(db, "todolist"));

    let todo_list = [];
    todo_data.forEach((doc) => {
      todo_list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(toDoSlice.actions.loadToDo(todo_list));
  };
};

export const addToDoFB = (toDo) => {
  // 파이어베이스에 정보를 등록하고, 리덕스에도 적용한다.
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "todolist"), toDo);
    const _toDo = await getDoc(docRef);
    const todo_data = { id: _toDo.id, ..._toDo.data() };
    dispatch(toDoSlice.actions.addToDo(todo_data));
  };
};

export const updateToDoFB = (todo_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "todolist", todo_id);
    const _toDo = await getDoc(docRef);
    await updateDoc(docRef, { isDone: !_toDo.data().isDone });
    // firestore안의 정보까지 바꿈.

    // redux의 정보를 바꿀 액션을 해야함.
    const _todo_list = getState().toDoList;
    console.log(_todo_list);
    const todo_index = _todo_list.findIndex((todo) => {
      return String(todo.id) === String(todo_id);
    });
    dispatch(toDoSlice.actions.doneToDo(_todo_list[todo_index]));
  };
};

export const deleteToDoFB = (todo_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "todolist", todo_id);
    await deleteDoc(docRef);
    // firestore안의 정보까지 바꿈.

    // redux의 정보를 바꿀 액션을 해야함.
    const _todo_list = getState().toDoList;
    const todo_index = _todo_list.findIndex((todo) => {
      return String(todo.id) === String(todo_id);
    });
    dispatch(toDoSlice.actions.deleteToDo(_todo_list[todo_index]));
  };
};

export default toDoSlice.reducer;
