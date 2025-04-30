import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  height?: number;
  type?: "button" | "submit" | "reset";
};

const ButtonText = styled.span`
  position: relative;
  display: inline-block;
  z-index: 2;
  color: inherit;

  &:hover ~ span::before {
    width: 100%;
  }
`;

const ButtonOverlay = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgba(77, 77, 77, 0.3);

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: orange;
    z-index: 1;
    border-radius: 8px;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Btn = styled.button<{ height?: number; type?: string }>`
  position: relative;
  width: 100%;
  border: none; /* border를 없앰 */
  height: ${(props) => (props.height ? `${props.height}px` : "24px")};
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #222;

  &:hover {
    color: #fff;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  height
}) => {
  return (
    <Btn
      as="button"
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      height={height}
    >
      <ButtonText>{children}</ButtonText>
      <ButtonOverlay />
    </Btn>
  );
};

export default Button;
