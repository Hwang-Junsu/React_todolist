import styles from "./Form.module.css";
import {useDispatch} from "react-redux";
import {addToDo as dispatchToDo} from "../../redux/configStore";

const Form = ({
  commentChange,
  titleChange,
  toDoTitle,
  toDoComment,
  inputReset,
}) => {
  const dispatch = useDispatch();

  const addToDo = (event) => {
    dispatch(dispatchToDo({title: toDoTitle, comment: toDoComment}));
    inputReset();
    event.preventDefault();
  };

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
