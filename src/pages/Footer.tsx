import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../utils/GlobalContext";
import Btn from "../components/Button";

const FooterContainer = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: #333;
  color: #fff;
`;

const FooterIner = styled.div`
  width: 100%;
  padding: 20px 20px 40px;
  max-width: 1240px;
  margin: 0 auto;
`;

const BtnBox = styled.div`
  width: 200px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 30;
`;

const Footer: React.FC = () => {
  const { footerHeight, setFooterHeight } = useGlobalContext();

  const increaseHeight = () => {
    setFooterHeight(footerHeight + 100);
  };

  const decreaseHeight = () => {
    setFooterHeight(footerHeight - 100);
  };

  return (
    <>
      <FooterContainer height={footerHeight}>
        <FooterIner>
          Footer Page
          <BtnBox>
            <Btn onClick={increaseHeight}>증가 100</Btn>
          </BtnBox>
          <BtnBox>
            <Btn onClick={decreaseHeight}>감소 100</Btn>
          </BtnBox>
        </FooterIner>
      </FooterContainer>
    </>
  );
};

export default Footer;
