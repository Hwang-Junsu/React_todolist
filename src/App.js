import Router from "./Router";
import React, { useEffect } from "react";
import { loadTodolist } from "./redux/modules/todoSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodolist());
  }, []);
  return <Router />;
}
export default App;
