import React from "react";
import MyList from "../components/list/MyList";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";

const ToDoList = () => {
  return (
    <Layout>
      <Form />
      <MyList />
    </Layout>
  );
};

export default ToDoList;
