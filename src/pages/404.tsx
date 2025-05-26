// src/pages/ErrorPage.tsx
import React from "react";
import styled from "styled-components";
import Link from "next/link"; // ✅ Next.js 전용 Link

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fdf7e3;
  color: #333;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HomeButton = styled.a`
  padding: 0.8rem 1.6rem;
  background-color: #2f2f2f;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #444;
  }
`;

const ErrorPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>404 - 페이지를 찾을 수 없습니다</Title>
      <Message>요청하신 경로에 해당하는 페이지가 존재하지 않아요.</Message>

      <Link href="/" passHref>
        <HomeButton>🏠 홈으로 돌아가기</HomeButton>
      </Link>
    </Wrapper>
  );
};

export default ErrorPage;
