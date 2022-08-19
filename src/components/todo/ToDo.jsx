import style from "./ToDo.module.css";
import {useDispatch} from "react-redux";
import {deleteToDo, doneToDo} from "../../redux/configStore";

const ToDo = ({id, title, comment, isDone}) => {
  const dispatch = useDispatch();

  const done = (id) => {
    dispatch(doneToDo({id, isDone}));
  };
  const remove = (id) => {
    dispatch(deleteToDo({id}));
  };
  return (
    <div className={style.list}>
      <h3>{title}</h3>
      <p>{comment}</p>
      <div className={style.buttons}>
        <button className={style.delete_button} onClick={() => remove(id)}>
          삭제하기
        </button>
        <button className={style.change_button} onClick={() => done(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default ToDo;
