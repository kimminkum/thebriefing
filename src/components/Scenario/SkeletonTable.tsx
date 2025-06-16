import React from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const Row = styled.div`
  height: 24px;
  margin-bottom: 8px;
  border-radius: 4px;
  background: #ddd;
  background-image: linear-gradient(90deg, #ddd 0px, #ececec 40px, #ddd 80px);
  background-size: 200px 100%;
  animation: ${shine} 1.2s infinite;
`;

export const SkeletonTable: React.FC<{ rows: number }> = ({ rows }) => (
  <div>
    {Array.from({ length: rows }).map((_, i) => (
      <Row key={i} />
    ))}
  </div>
);
