import style from "./MyList.module.css";
import ToDo from "../todo/ToDo";

const MyList = ({toDoList}) => {
  return (
    <div className={style.list_container}>
      <h1>Working.. 🔥</h1>
      <div className={style.lists}>
        {toDoList.map((toDo) => {
          return !toDo.isDone ? (
            <ToDo
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              comment={toDo.comment}
              isDone={toDo.isDone}
            />
          ) : null;
        })}
      </div>
      <h1>Done..! 🎉</h1>
      <div className={style.lists}>
        {toDoList.map((toDo) => {
          return toDo.isDone ? (
            <ToDo
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              comment={toDo.comment}
              isDone={toDo.isDone}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MyList;
