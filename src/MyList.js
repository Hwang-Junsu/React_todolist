import style from "./MyList.module.css";

const MyList = ({ toDoList, done, remove }) => {
  const onClick = (target) => {
    done(target);
  };
  const onRemove = (target) => {
    remove(target);
  };
  return (
    <div className={style.list_container}>
      <h1>Working.. 🔥</h1>
      <div className={style.lists}>
        {toDoList.map((toDo) => {
          return !toDo.isDone ? (
            <div key={toDo.id} className={style.list}>
              <h3>{toDo.title}</h3>
              <p>
                {toDo.comment.length >= 38
                  ? toDo.comment.slice(0, 38) + "..."
                  : toDo.comment}
              </p>
              <div className={style.buttons}>
                <button
                  className={style.delete_button}
                  onClick={() => onRemove(toDo.id)}
                >
                  삭제하기
                </button>
                <button
                  className={style.change_button}
                  onClick={() => onClick(toDo.id)}
                >
                  완료
                </button>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <h1>Done..! 🎉</h1>
      <div className={style.lists}>
        {toDoList.map((toDo) => {
          return toDo.isDone ? (
            <div key={toDo.id} className={style.list}>
              <h3>{toDo.title}</h3>
              <p>
                {toDo.comment.length >= 38
                  ? toDo.comment.slice(0, 38) + "..."
                  : toDo.comment}
              </p>
              <div className={style.buttons}>
                <button
                  className={style.delete_button}
                  onClick={() => onRemove(toDo.id)}
                >
                  삭제하기
                </button>
                <button
                  className={style.change_button}
                  onClick={() => onClick(toDo.id)}
                >
                  취소
                </button>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MyList;
