import { useDispatch } from "react-redux";
import { deleteToDoFB, updateToDoFB } from "../../redux/modules/todoSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 3px solid gray;
  border-radius: 15px;

  width: 200px;
  height: 300px;
  padding: 20px;

  box-shadow: 4px 4px gray;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px gray;
    transition: 0.1s;
  }
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  Button {
    border: 2px solid;
    border-radius: 5px;
    width: 70px;
    padding: 3px;
    background-color: white;
  }
`;
const Button = styled.button`
  color: ${(props) => (props.isDelete ? "#e84118" : "#4cd137")};
`;

const ToDo = ({ id, title, comment, isDone }) => {
  const dispatch = useDispatch();

  const done = (id) => {
    dispatch(updateToDoFB(id));
  };
  const remove = (id) => {
    dispatch(deleteToDoFB(id));
  };
  return (
    <Box>
      <Link to={`/${id}`} state={{ id, title, comment, isDone }}>
        <EditIcon />
      </Link>
      <h3>{title.length > 12 ? title.slice(0, 12) + "..." : title}</h3>
      <p>{comment.length > 25 ? comment.slice(0, 25) + "..." : comment}</p>
      <Buttons>
        <Button isDelete={true} onClick={() => remove(id)}>
          <DeleteIcon />
        </Button>
        <Button isDelete={false} onClick={() => done(id)}>
          {isDone ? <CancelIcon /> : <CheckCircleOutlineIcon />}
        </Button>
      </Buttons>
    </Box>
  );
};

export default ToDo;
