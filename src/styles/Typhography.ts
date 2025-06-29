// src/styles/Typography.ts
import styled from 'styled-components';

/* 기본 본문 텍스트 */
export const Body = styled.p`
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  font-weight: 400;
  line-height: 1.7;
  color: #111;
  transition: all 0.2s ease-in-out;
`;

/* 강조 문구 (Highlight) */
export const Highlight = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #fff3c8, #ffd966);
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  color: #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  animation: pulseHighlight 1.2s ease-in-out infinite alternate;

  @keyframes pulseHighlight {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.03);
      opacity: 0.85;
    }
  }
`;

/* 제목 구조 */
export const Heading = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.4;
  color: #0a0a0a;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 0 #ccc;
`;

export const Subheading = styled.h3`
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

/* 캡션 */
export const Caption = styled.span`
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  color: #888;
  font-weight: 400;
  line-height: 1.4;
`;

/* 뱃지 스타일 */
export const Badge = styled.span`
  display: inline-block;
  background-color: #e0ecff;
  color: #124b8d;
  font-size: clamp(0.75rem, 0.9vw, 0.875rem);
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  margin-right: 0.4rem;
  border-radius: 999px;
  white-space: nowrap;
  box-shadow: 0 0 0 1px #d0dcf5;
`;

/* 강조된 텍스트 전용 */
export const Emphasis = styled.span`
  color: #e63946;
  font-weight: 700;
  text-decoration: underline;
`;
