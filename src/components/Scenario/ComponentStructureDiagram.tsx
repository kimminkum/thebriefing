// src/components/ComponentStructureDiagram.tsx
import React from "react";
import styled from "styled-components";

const DiagramWrapper = styled.div`
  margin-top: calc(-60 / 654 * 100%);
  background: #fdfaf5;
  border: 2px solid #888;
  border-radius: 12px;
  padding: calc(20 / 654 * 100%) calc(60 / 654 * 100%);
  color: #333;
  max-width: 100%;
`;

const Node = styled.div<{ $isRoot?: boolean }>`
  padding: calc(18 / 526 * 100%) calc(32 / 526 * 100%);
  border: 2px solid ${({ $isRoot }) => ($isRoot ? "#4a90e2" : "#aaa")};
  background: ${({ $isRoot }) => ($isRoot ? "#e6f2ff" : "#fff")};
  border-radius: 8px;
  font-weight: 600;
  text-align: left;
  margin-left: ${({ $isRoot }) => ($isRoot ? "0px" : "calc(40 / 690 * 100%)")};
  margin-bottom: calc(20 / 526 * 100%);
  box-shadow: 2px 2px 0 #999;
  position: relative;
  width: 50%;
  line-height: 1 !important;

  + .sub-branch {
    margin-left: calc(60 / 526 * 100%);
  }
`;

const SubBranch: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="sub-branch">{children}</div>
);

const ComponentStructureDiagram: React.FC = () => {
  return (
    <DiagramWrapper className="font-16">
      <Node $isRoot>Main.tsx</Node>

      <Node>TextWindow</Node>

      <SubBranch>
        <Node className="sub-branch">ToggleButton</Node>

        <Node className="sub-branch">BackButton</Node>
      </SubBranch>

      <Node>CenterWindow</Node>

      <Node>HelpWindow</Node>

      <SubBranch>
        <Node className="sub-branch">TutorialBtn</Node>

        <Node className="sub-branch">TypingSpeed</Node>

        <Node className="sub-branch">ExitBtn</Node>
      </SubBranch>

      <Node>UiWindow</Node>
    </DiagramWrapper>
  );
};

export default ComponentStructureDiagram;
