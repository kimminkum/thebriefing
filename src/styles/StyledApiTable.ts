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
export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2f2f2f;
  margin-bottom: 0.4rem;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;

  strong {
    color: #2b4d73;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.9rem;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

export const Cell = styled.span<{
  width?: string;
  grow?: boolean;
  ellipsis?: boolean;
  isAuthor?: boolean;
}>`
  ${({ width }) => (width ? `width: ${width};` : "")}
  ${({ grow }) => grow && "flex: 1;"}
  ${({ ellipsis }) =>
    ellipsis &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
  ${({ isAuthor }) => isAuthor && "padding-left: 6px;"}
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

// 🔹 Header 행
export const Header = styled(ListItem)`
  font-weight: bold;
  background: #f9f9f9;
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const Select = styled.select`
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;
