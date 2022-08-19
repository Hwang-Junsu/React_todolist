import React from "react";
import {useParams, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import styled from "styled-components";

const Box = styled.div`
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
  const {id} = useParams();
  const list = useSelector((state) => state);
  const toDo = list[list.findIndex((x) => +x.id === +id)];
  const navigate = useNavigate();
  return (
    <Box isDone={toDo.isDone}>
      <h1>{toDo.title}</h1>
      <CheckDone>{toDo.isDone ? "✅" : "❌"}</CheckDone>
      <h2>{toDo.comment}</h2>
      <GoBackBtn onClick={() => navigate("/")}>뒤로가기</GoBackBtn>
    </Box>
  );
}

export default Detail;
