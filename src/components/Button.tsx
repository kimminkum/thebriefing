import React from "react";
import styled from "styled-components";

type Variant = "primary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  disabled?: boolean; // ✅ 추가
  variant?: Variant;
};

const Btn = styled.button<{ variant?: Variant }>`
  background: ${({ variant }) =>
    variant === "outline" ? "transparent" : "#111"};
  color: ${({ variant }) => (variant === "outline" ? "#333" : "#fff")};
  border: ${({ variant }) =>
    variant === "outline" ? "1px solid #999" : "none"};
  font-family: "Pretendard", sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  opacity: 0.85;
  transition: all 0.2s ease-in-out;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 0.8)};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  style,
  variant = "primary"
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
