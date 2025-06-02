// components/Common/StyledApiTable.ts
import styled from "styled-components";

// 🔹 전체 컨테이너
export const Container = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  font-family: Pretendard, sans-serif;
  border: 1px solid #ddd;
  max-width: 720px;
  margin: 2rem auto;
`;

// 🔹 제목 (h3, h2 등 상황에 따라)
export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2c3e50;
  text-align: center;
`;

// 🔹 버튼
export const ActionButton = styled.button`
  padding: 6px 12px;
  margin-bottom: 1rem;
  background: #2f2f2f;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

// 🔹 리스트 전체 (ul 역할)
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 🔹 개별 행 (li 역할)
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  align-items: center;
`;

// 🔹 셀 (span 역할)
export const Cell = styled.span<{
  width?: string;
  grow?: boolean;
  ellipsis?: boolean;
  isAuthor?: boolean;
  textcenter?: boolean;
}>`
  ${({ width }) => (width ? `width: ${width}; max-width: ${width};` : "")}
  ${({ grow }) => grow && "flex: 1;"}
  ${({ ellipsis }) =>
    ellipsis &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
  ${({ isAuthor }) => isAuthor && "padding-left: 6px;"}
  text-align: ${({ textcenter }) => (textcenter ? "center" : "left")};
`;

// 🔹 Header 행
export const Header = styled(ListItem)`
  font-weight: bold;
  background: #f9f9f9;
`;
