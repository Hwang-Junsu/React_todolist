import React from "react";
import Header from "./Header";
import MyList from "./MyList";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
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
    <div className={styles.App}>
      <Header />
      <hr style={{ width: "90%", margin: "40px" }} />
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
      <MyList toDoList={toDoList} done={done} remove={remove} />
    </div>
  );
}

export default App;
