import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav/Nav";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #333;
  color: #fff;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav position="fixed"></Nav>
    </HeaderContainer>
  );
};

export default Header;
