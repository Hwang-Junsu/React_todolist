import style from "./MyList.module.css";
import ToDo from "../todo/ToDo";

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
            <ToDo
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              comment={toDo.comment}
              isDone={toDo.isDone}
              onClick={onClick}
              onRemove={onRemove}
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
              onClick={onClick}
              onRemove={onRemove}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MyList;
