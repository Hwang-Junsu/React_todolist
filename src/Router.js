import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToDoDetail from "./pages/ToDoDetail";
import ToDoList from "./pages/ToDoList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/:id" element={<ToDoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
