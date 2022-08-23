import Router from "./Router";
import React, {useEffect} from "react";
import {loadTodolist} from "./redux/modules/todolist";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodolist());
  }, [dispatch]);
  return <Router />;
}
export default App;
