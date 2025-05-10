import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button"; // Button.tsx에서 import

interface Props {
  onReset: () => void;
}

const Wrapper = styled.div`
  height: 60%;
  width: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;

const StyledBtn = styled(Button)`
  padding: 1rem 2rem;
  background: #2f2f2f;
  color: #fff;
  border-radius: 8px;
  margin-top: calc(40 / 750 * 100%);
`;

const LastPage: React.FC<Props> = ({ onReset }) => {
  const navigate = useNavigate();

  const goToDataPage = () => {
    navigate("/datapage"); // 경로 이동
  };
  const goToFristPage = () => {
    navigate("/");
  };

  return (
    <Wrapper className="font-24">
      <p>📄 전체 시나리오를 확인해주셔서 감사합니다!</p>
      <StyledBtn onClick={goToDataPage}>🔍 DataPage로 이동</StyledBtn>
      <StyledBtn onClick={onReset}>🔁 처음부터 다시 보기</StyledBtn>
    </Wrapper>
  );
};

export default LastPage;
