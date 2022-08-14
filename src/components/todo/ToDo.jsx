import style from "./ToDo.module.css";

const ToDo = ({ id, title, comment, isDone, onClick, onRemove }) => {
  return (
    <div className={style.list}>
      <h3>{title}</h3>
      <p>{comment}</p>
      <div className={style.buttons}>
        <button className={style.delete_button} onClick={() => onRemove(id)}>
          삭제하기
        </button>
        <button className={style.change_button} onClick={() => onClick(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default ToDo;
