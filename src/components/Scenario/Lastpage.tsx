import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Button from '../Button';
const Wrapper = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* ✅ 위에서부터 정렬 */
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #111, #5a5a5a);
  border-radius: 16px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.4);
  gap: 1.2rem;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Message = styled.div`
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: #fff;
  margin-bottom: 2.5rem;

  strong {
    font-size: 1.8rem;
    color: #00ccff;
    display: block;
    margin-bottom: 0.8rem;
  }
`;

const StyledBtn = styled(Button)`
  padding: 12px 28px;
  background: #00ccff;
  color: #000;
  font-weight: 600;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 240px;

  &:hover {
    background: #00aacc;
    color: #fff;
  }
`;

const LastPage: React.FC = () => {
  const router = useRouter();

  const goToDatapage = () => {
    router.push('/datapage');
  };

  const goToStart = () => {
    localStorage.setItem('currentIndex', '1');
    window.location.reload();
  };
  const goToCommerce = () => {
    window.open('https://kmkcommerce.vercel.app/', '_blank');
  };

  const goToGitHub = () => {
    window.open('https://github.com/kimminkum/thebriefing', '_blank');
  };

  const goToSecond = () => {
    window.open('https://kimminkum.github.io/react-pj-second/', '_blank');
  };

  const goToStory = () => {
    window.open('https://flvrabbit.tistory.com/', '_blank');
  };

  return (
    <Wrapper>
      <Message>
        <strong>🎉 여기까지 읽어주셔서 감사합니다.</strong>
        기술 스택과 프로젝트 외에도 궁금한 점이 있다면 언제든지 연락주세요!
      </Message>
      <StyledBtn onClick={goToDatapage}>🔍 DataPage로 이동</StyledBtn>
      <StyledBtn onClick={goToStart}>🔁 처음부터 다시 보기</StyledBtn>
      <StyledBtn onClick={goToGitHub}>🛠 GitHub 소스 보기</StyledBtn>
      <StyledBtn onClick={goToCommerce}> 이커머스 데모 페이지 보기</StyledBtn>
      <StyledBtn onClick={goToStory}>📘 티스토리 블로그</StyledBtn>
    </Wrapper>
  );
};

export default LastPage;
