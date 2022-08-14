import React from "react";
import MyList from "../components/list/MyList";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import { useState } from "react";

const ToDoList = () => {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoComment, setToDoComment] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [id, setId] = useState(0);
  const addToDo = (event) => {
    let list = [...toDoList];
    list.push({
      id: id,
      title: toDoTitle,
      comment: toDoComment,
      isDone: false,
    });
    setId(id + 1);
    setToDoList(list);
    event.preventDefault();
  };
  const done = (id) => {
    setToDoList(
      toDoList.map((list) =>
        list.id === id ? { ...list, isDone: !list.isDone } : list
      )
    );
  };
  const remove = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id));
  };
  const titleChange = (event) => {
    setToDoTitle(event.target.value);
  };
  const commentChange = (event) => {
    setToDoComment(event.target.value);
  };
  return (
    <Layout>
      <Form
        toDoTitle={toDoTitle}
        toDoComment={toDoComment}
        titleChange={titleChange}
        commentChange={commentChange}
        addToDo={addToDo}
      />
      <MyList toDoList={toDoList} done={done} remove={remove} />
    </Layout>
  );
};

export default ToDoList;
