import React from "react";
import Header from "./Header";
import MyList from "./MyList";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoComment, setToDoComment] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addToDo = (event) => {
    let list = [...toDoList];
    list.push({ title: toDoTitle, comment: toDoComment, isDone: false });
    setToDoList(list);
    event.preventDefault();
  };
  const done = (event) => {
    console.log(event);
  };
  const titleChange = (event) => {
    setToDoTitle(event.target.value);
  };
  const commentChange = (event) => {
    setToDoComment(event.target.value);
  };
  console.log(toDoList);
  return (
    <div className="App">
      <Header />
      <form className={styles.container}>
        <div>
          <label>
            <strong>제목</strong>
            <input
              onChange={titleChange}
              name="title"
              value={toDoTitle}
              type="text"
            />
          </label>
          <label>
            <strong>내용</strong>
            <input
              onChange={commentChange}
              name="comment"
              value={toDoComment}
              type="text"
            />
          </label>
        </div>
        <button onClick={addToDo} className={styles.btn}>
          추가하기
        </button>
      </form>
      <MyList toDoList={toDoList} done={done} />
    </div>
  );
}

export default App;
