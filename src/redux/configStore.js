// import { createStore, combineReducers, applyMiddleware } from "redux";
// import todolist from "./modules/todolist";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./modules/todoSlice";

// const middlewares = [thunk];
// const rootReducer = combineReducers({ todolist });
// const enhancer = applyMiddleware(...middlewares);

//const store = createStore(rootReducer, enhancer);
const store = configureStore({ reducer: { toDoList: toDoReducer } });
export default store;
