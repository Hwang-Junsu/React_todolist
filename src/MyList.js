import style from "./MyList.module.css";

const MyList = ({ toDoList, done }) => {
  const onClick = () => {
    done();
  };
  return (
    <div className={style.list_container}>
      <h1>Working.. 🔥</h1>
      {toDoList.map((toDo) => {
        return !toDo.isDone ? (
          <div key={toDo.title} className={style.list}>
            <h3>{toDo.title}</h3>
            <p>{toDo.comment}</p>
            <button>삭제하기</button>
            <button onClick={() => (toDo.isDone = !toDo.isDone)}>완료</button>
          </div>
        ) : null;
      })}
      <h1>Done..! 🎉</h1>
      {toDoList.map((toDo) => {
        return toDo.isDone ? (
          <div key={toDo.title} className={style.list}>
            <h3>{toDo.title}</h3>
            <p>{toDo.comment}</p>
            <button>삭제하기</button>
            <button onClick={onClick}>취소</button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MyList;
