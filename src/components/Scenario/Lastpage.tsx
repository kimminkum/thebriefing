import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "../Button";

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
  padding: calc(16 / 684 * 100%) calc(32 / 684 * 100%);
  background: #2f2f2f;
  color: #fff;
  border-radius: 8px;
  margin-top: calc(20 / 684 * 100%);
`;

const LastPage: React.FC = () => {
  const router = useRouter();

  const goToDatapage = () => {
    router.push("/datapage");
  };

  const goToStart = () => {
    localStorage.setItem("currentIndex", "1"); // 초기화
    window.location.reload(); // 새로고침으로 첫 페이지로 이동
  };

  const goToGitHub = () => {
    window.open("https://github.com/kimminkum/thebriefing", "_blank");
  };

  return (
    <Wrapper className="font-24">
      <p>📄 전체 시나리오를 확인해주셔서 감사합니다!</p>
      <StyledBtn onClick={goToDatapage}>🔍 DataPage로 이동</StyledBtn>
      <StyledBtn onClick={goToStart}>🔁 처음부터 다시 보기</StyledBtn>
      <StyledBtn onClick={goToGitHub}>🛠 GitHub 소스 보기</StyledBtn>
    </Wrapper>
  );
};

export default LastPage;
