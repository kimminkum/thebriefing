// src/components/Button.tsx
import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>; // ✅ 이벤트 객체 받기
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
};

const Btn = styled.button`
  background-color: black;
  color: white;
  font-family: "Press Start 2P", monospace;
  opacity: 0.6;
  border: none;
  border-radius: 0;
  padding: 8px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  style
}) => {
  return (
    <Btn type={type} className={className} onClick={onClick} style={style}>
      {children}
    </Btn>
  );
};

export default Button;
