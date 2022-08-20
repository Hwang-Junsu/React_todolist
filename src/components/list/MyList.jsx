import React, {useEffect} from "react";
import ToDo from "../todo/ToDo";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {loadTodolist} from "../../redux/modules/todolist";

const ListContainer = styled.div`
  width: 100%;
  margin: 10px auto;

  padding: 30px;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: auto;
`;
const Status = styled.h1``;

const MyList = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadTodolist());
  }, []);
  const toDoList = useSelector((state) => state.todolist);

  return (
    <ListContainer>
      <Status>Working.. 🔥</Status>
      <List>
        {toDoList.map((toDo) => {
          return !toDo.isDone ? (
            <ToDo
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              comment={toDo.comment}
              isDone={toDo.isDone}
            />
          ) : null;
        })}
      </List>
      <Status>Done..! 🎉</Status>
      <List>
        {toDoList.map((toDo) => {
          return toDo.isDone ? (
            <ToDo
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              comment={toDo.comment}
              isDone={toDo.isDone}
            />
          ) : null;
        })}
      </List>
    </ListContainer>
  );
};

export default MyList;
