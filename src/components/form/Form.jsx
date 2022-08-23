import { useDispatch } from "react-redux";
import { addToDoFB } from "../../redux/modules/todoSlice";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
  height: 5rem;
  padding: 10px 30px;

  border: 1px solid gray;
  background-color: #eee;

  border-radius: 10px;
`;
const Input = styled.label`
  margin: 10px;
  input {
    margin-left: 10px;
    width: 12rem;
    height: 2rem;
    border: none;
    border-radius: 10px;
    padding: 5px;
  }
`;
const Btn = styled.button`
  background-color: green;
  color: white;

  margin-left: 10px;
  width: 7rem;
  height: 2rem;
  border: none;
  border-radius: 10px;
`;

const Form = () => {
  const dispatch = useDispatch();

  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoComment, setToDoComment] = useState("");
  const titleChange = (event) => {
    setToDoTitle(event.target.value);
  };
  const commentChange = (event) => {
    setToDoComment(event.target.value);
  };
  const inputReset = () => {
    setToDoTitle("");
    setToDoComment("");
  };
  const addToDo = (event) => {
    dispatch(
      addToDoFB({
        title: toDoTitle,
        comment: toDoComment,
        isDone: false,
      })
    );
    inputReset();
    event.preventDefault();
  };

  return (
    <Container>
      <div>
        <Input>
          <strong>제목</strong>
          <input
            onChange={titleChange}
            name="title"
            value={toDoTitle}
            type="text"
          />
        </Input>
        <Input>
          <strong>내용</strong>
          <input
            onChange={commentChange}
            name="comment"
            value={toDoComment}
            type="text"
          />
        </Input>
      </div>
      <Btn onClick={addToDo}>추가하기</Btn>
    </Container>
  );
};

export default Form;
