import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import todolist from "./modules/todolist";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({todolist});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
export default store;
