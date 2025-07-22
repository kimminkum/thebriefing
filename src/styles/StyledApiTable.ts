// src/styles/StyledApiTable.ts
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  font-family: Pretendard, sans-serif;
  border: 1px solid #ddd;
  max-width: 720px;
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

// ✅ boolean 속성을 DOM에 전달하지 않도록 커스텀 필터링
export const Cell = styled('span').withConfig({
  shouldForwardProp: (prop) => !['grow', 'ellipsis', 'isAuthor'].includes(prop),
})<{
  width?: string;
  grow?: boolean;
  ellipsis?: boolean;
  isAuthor?: boolean;
}>`
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ grow }) => grow && 'flex: 1;'}
  ${({ ellipsis }) =>
    ellipsis &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
  ${({ isAuthor }) => isAuthor && 'padding-left: 6px;'}
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  margin-bottom: 1rem;
  background: #2f2f2f;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Header = styled(ListItem)`
  font-weight: bold;
  background: #f9f9f9;
`;

export const Controls = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.25rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;

  @media (max-width: 400px) {
    max-width: 160px; /* ✅ 작은 화면에서 Input 최대 너비 제한 */
  }
`;

export const Select = styled.select`
  margin-left: 0.5rem;
  padding: 0.25rem 0.3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;

  @media (max-width: 400px) {
    max-width: 120px;
  }
`;
