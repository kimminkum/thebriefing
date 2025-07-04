// src/styles/Typography.ts
import styled from 'styled-components';

/* 기본 본문 텍스트 */
export const Body = styled.p`
  font-size: clamp(0.95rem, 1.3vw, 1.2rem);
  font-weight: 400;
  line-height: 1.6;
  color: #111;
  transition: all 0.2s ease-in-out;
`;

/* 강조 문구 (Highlight) */
export const Highlight = styled.span`
  display: inline-block;
  background-color: #fff2b3;
  font-weight: 600;
  padding: 0.05em 0.05em; // 기존보다 좌우 여백 줄임
  margin: 0 2px;
  border-radius: 4px;
  color: #222;
  line-height: 1.5;
  transition: all 0.2s ease;
  box-shadow: 0 0 0px transparent;
  &:hover {
    box-shadow: 0 0 4px #ffe97f;
  }
`;

/* 뱃지 스타일 */
export const Badge = styled.span`
  display: inline-block;
  background-color: #e8f0fe;
  color: #345a9c;
  font-weight: 500;
  padding: 0.05em 0.05em; // 기존보다 좌우 여백 줄임
  border-radius: 999px;
  margin: 0 2px;
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

/* 강조된 텍스트 전용 */
export const Emphasis = styled.span`
  color: #e63946;
  font-weight: 700;
  text-decoration: underline;
`;

// src/styles/Typography.ts

export const Typography = {
  titleXL: `
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    line-height: 1.3;
  `,
  titleLG: `
    font-size: clamp(1.25rem, 2.5vw, 1.7rem);
    font-weight: 600;
    line-height: 1.4;
  `,
  subtitle: `
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 500;
    line-height: 1.5;
  `,
  body: `
    font-size: clamp(0.95rem, 1.3vw, 1.1rem);
    font-weight: 400;
    line-height: 1.6;
  `,
  caption: `
    font-size: clamp(0.75rem, 1vw, 0.9rem);
    font-weight: 300;
    line-height: 1.4;
  `,
  badge: `
    font-size: 13px;
    font-weight: 600;
    padding: 2px 2px;
    border-radius: 8px;
    background-color: #f0f0f0;
    color: #333;
    display: inline-block;
  `,
};
