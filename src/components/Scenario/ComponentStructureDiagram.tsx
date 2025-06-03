import React from "react";
import styled from "styled-components";

const TreeWrapper = styled.div`
  background: #fdfdfc;
  padding: calc(24 / 720 * 100%);
  border-radius: calc(16 / 720 * 100%);
  border: 2px solid #ddd;
  max-width: 720px;
  margin: calc(32 / 720 * 100%) auto;
`;

const TreeList = styled.ul`
  list-style: none;
  padding-left: calc(24 / 720 * 100%);
  border-left: 2px solid #ccc;
`;

const TreeNode = styled.li<{ $isRoot?: boolean }>`
  position: relative;
  margin: calc(16 / 720 * 100%) 0;
  padding-left: ${({ $isRoot }) => ($isRoot ? "0" : "calc(16 / 720 * 100%)")};

  &::before {
    content: "";
    position: absolute;
    left: calc(-24 / 720 * 100%);
    top: calc(14 / 720 * 100%);
    width: calc(16 / 720 * 100%);
    height: 2px;
    background: #ccc;
    display: ${({ $isRoot }) => ($isRoot ? "none" : "block")};
  }
`;

const NodeBox = styled.div<{ $isRoot?: boolean }>`
  padding: calc(12 / 720 * 100%) calc(20 / 720 * 100%);
  background: ${({ $isRoot }) => ($isRoot ? "#e6f2ff" : "#fff")};
  border: 2px solid ${({ $isRoot }) => ($isRoot ? "#4a90e2" : "#aaa")};
  border-radius: calc(8 / 720 * 100%);
  font-weight: 600;
  color: #333;
  display: inline-block;
  box-shadow: 2px 2px 0 #bbb;

  &:hover {
    background: ${({ $isRoot }) => ($isRoot ? "#d0e9ff" : "#f9f9f9")};
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
              <NodeBox>TextWindow</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>ToggleButton</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>BackButton</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>

            <TreeNode>
              <NodeBox>CenterWindow</NodeBox>
            </TreeNode>

            <TreeNode>
              <NodeBox>HelpWindow</NodeBox>
              <TreeList>
                <TreeNode>
                  <NodeBox>TutorialBtn</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>TypingSpeed</NodeBox>
                </TreeNode>
                <TreeNode>
                  <NodeBox>ExitBtn</NodeBox>
                </TreeNode>
              </TreeList>
            </TreeNode>

            <TreeNode>
              <NodeBox>UiWindow</NodeBox>
            </TreeNode>
          </TreeList>
        </TreeNode>
      </TreeList>
    </TreeWrapper>
  );
};

export default ComponentStructureDiagram;
