import React from "react";
import MyList from "../components/list/MyList";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import {useState} from "react";
import {useSelector} from "react-redux";

const ToDoList = () => {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoComment, setToDoComment] = useState("");

  const toDoList = useSelector((state) => state);

  const titleChange = (event) => {
    setToDoTitle(event.target.value);
  };
  const commentChange = (event) => {
    setToDoComment(event.target.value);
  };
  const inputReset = () => {
    setToDoTitle("");
    setToDoComment("");
  };
  return (
    <Layout>
      <Form
        toDoTitle={toDoTitle}
        toDoComment={toDoComment}
        titleChange={titleChange}
        commentChange={commentChange}
        inputReset={inputReset}
      />
      <MyList toDoList={toDoList} />
    </Layout>
  );
};

export default ToDoList;
