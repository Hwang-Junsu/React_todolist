import {useDispatch} from "react-redux";
import {deleteToDo, doneToDo, updateToDoFB} from "../../redux/modules/todolist";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  border: 3px solid gray;
  border-radius: 15px;

  width: 320px;
  padding: 20px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  Button {
    border: 2px solid;
    border-radius: 5px;
    padding: 10px;
    width: 120px;
  }
`;
const Button = styled.button`
  color: ${(props) => (props.isDelete ? "#e84118" : "#4cd137")};
`;

const ToDo = ({id, title, comment, isDone}) => {
  const dispatch = useDispatch();

  const done = (id) => {
    dispatch(updateToDoFB(id));
  };
  const remove = (id) => {
    dispatch(deleteToDo({id}));
  };
  return (
    <Box>
      <Link to={`/${id}`}>상세보기</Link>
      <h3>{title}</h3>
      <p>{comment}</p>
      <Buttons>
        <Button isDelete={true} onClick={() => remove(id)}>
          삭제하기
        </Button>
        <Button isDelete={false} onClick={() => done(id)}>
          {isDone ? "취소" : "완료"}
        </Button>
      </Buttons>
    </Box>
  );
};

export default ToDo;
