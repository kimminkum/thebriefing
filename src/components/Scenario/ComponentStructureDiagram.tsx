import React from 'react';
import styled from 'styled-components';

const TreeWrapper = styled.div`
  background: #fdfdfc;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid #ddd;
  max-width: 640px;
  margin: 2rem auto;
  max-height: 70vh;
  overflow-y: auto;
`;

const TreeList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  border-left: 2px solid #ccc;
`;

const TreeNode = styled.li<{ $isRoot?: boolean }>`
  position: relative;
  margin: 0.75rem 0;
  padding-left: ${({ $isRoot }) => ($isRoot ? '0' : '1rem')};

  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0.6rem;
    width: 1rem;
    height: 2px;
    background: #ccc;
    display: ${({ $isRoot }) => ($isRoot ? 'none' : 'block')};
  }
`;

const NodeBox = styled.div<{ $isRoot?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ $isRoot }) => ($isRoot ? '#e6f2ff' : '#fff')};
  border: 2px solid ${({ $isRoot }) => ($isRoot ? '#4a90e2' : '#aaa')};
  border-radius: 8px;
  font-weight: 600;
  color: #333;
  display: inline-block;
  box-shadow: 2px 2px 0 #bbb;
  &:hover {
    background: ${({ $isRoot }) => ($isRoot ? '#d0e9ff' : '#f9f9f9')};
  }
`;

const ComponentStructureDiagram: React.FC = () => {
  return (
    <TreeWrapper className="font-16">
      <TreeList>
        <TreeNode $isRoot>
          <NodeBox $isRoot>Main.tsx</NodeBox>
          <TreeList>
            <TreeNode>
              <NodeBox>assets/img</NodeBox>
            </TreeNode>
            <TreeNode>
              <NodeBox>components</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>시나리오 컴포넌트</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>Window</NodeBox>
                  <TreeList>
                    <TreeNode>
                      <NodeBox>TextWindow</NodeBox>
                    </TreeNode>
                    <TreeNode>
                      <NodeBox>CenterWindow</NodeBox>
                    </TreeNode>
                    <TreeNode>
                      <NodeBox>HelpWindow</NodeBox>
                    </TreeNode>
                    <TreeNode>
                      <NodeBox>UiWindow</NodeBox>
                    </TreeNode>
                  </TreeList>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>data</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>scenarioData.tsx</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>atoms</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>scenarioAtom.ts</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>hooks</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>커스텀 훅 모음</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>types</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>타입 정의 모음</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>styles</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>GlobalStyles.ts</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>StyledPokeCard.tsx</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>pages</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>index.tsx</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>Main.tsx</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>datapage.tsx</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
            <TreeNode>
              <NodeBox>utils</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>GlobalContext.tsx</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>
          </TreeList>
        </TreeNode>
      </TreeList>
    </TreeWrapper>
  );
};

export default ComponentStructureDiagram;
