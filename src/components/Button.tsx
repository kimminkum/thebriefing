// src/components/Button.tsx
import React from "react";
import styled from "styled-components";

type Variant = "primary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>; // ✅ 이벤트 객체 받기
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  variant?: Variant;
};

const Btn = styled.button<{ variant?: Variant }>`
  background: ${({ variant }) =>
    variant === "outline" ? "transparent" : "black"};
  color: ${({ variant }) => (variant === "outline" ? "#333" : "white")};
  border: ${({ variant }) =>
    variant === "outline" ? "1px solid #ccc" : "none"};
  opacity: 0.6;
  border-radius: 0;
  padding: 0.6rem;
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
  style,
  variant
}) => {
  return (
    <Btn
      type={type}
      className={className}
      onClick={onClick}
      style={style}
      variant={variant}
    >
      {children}
    </Btn>
  );
};

export default Button;
