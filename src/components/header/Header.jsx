import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
`;
const Tail = styled.h4`
  position: absolute;

  top: 60%;
  left: 60%;
`;
const HeaderStyle = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 10px 30px;
  position: relative;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Title>My Todo List</Title>
      <Tail>Made with React</Tail>
    </HeaderStyle>
  );
};

export default Header;
