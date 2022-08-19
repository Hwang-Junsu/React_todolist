import React from "react";
import Header from "../header/Header";
import styled from "styled-components";

const LayoutStyle = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
`;

const Layout = ({children}) => {
  return (
    <LayoutStyle>
      <Header />
      <hr style={{width: "90%", margin: "40px"}} />
      <main>{children}</main>
    </LayoutStyle>
  );
};

export default Layout;
