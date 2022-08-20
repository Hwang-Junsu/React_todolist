import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;

  padding: 40px;

  border: 1px solid ${(props) => (props.isDone ? "#4cd137" : "#e84118")};
  border-radius: 15px;
`;
const IdBox = styled.p`
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 12px;
`;
const GoBackBtn = styled.button`
  padding: 10px;
  width: 100px;
  color: #40739e;
  font-size: 20px;

  border: 1px solid #40739e;
  border-radius: 10px;
  margin: 20px;
`;
const CheckDone = styled.span`
  position: relative;
`;

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const toDo = location.state;

  return (
    <Box isDone={toDo.isDone}>
      <IdBox>ID : {toDo.id}</IdBox>
      <h1>{toDo.title}</h1>
      <CheckDone>{toDo.isDone ? "✅" : "❌"}</CheckDone>
      <h2>{toDo.comment}</h2>
      <GoBackBtn onClick={() => navigate("/")}>뒤로가기</GoBackBtn>
    </Box>
  );
}

export default Detail;
