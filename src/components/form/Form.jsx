import styles from "./Form.module.css";

const Form = ({
  commentChange,
  titleChange,
  addToDo,
  toDoTitle,
  toDoComment,
}) => {
  return (
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
  );
};

export default Form;
