import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "#4132ea" : "transparent")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  height: 48px;
  width: 120px;
  border-radius: 12px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && (props.primary ? "#291ea7" : "#f0f0f0")};
  }

  &:active {
    background-color: ${(props) =>
      !props.disabled && (props.primary ? "#1f1487" : "#dcdcdc")};
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #ccc;
      color: #666;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  primary = false,

  backgroundColor,
  label,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton primary={primary} disabled={disabled} {...props}>
      {label}
    </StyledButton>
  );
};
