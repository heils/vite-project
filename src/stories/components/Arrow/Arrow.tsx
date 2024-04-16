import React from "react";
import styled, { css } from "styled-components";
import { ArrowProps } from "./Arrow.types";

const StyledArrow = styled.button<ArrowProps>`
  background-color: ${(props) => (props.primary ? "#D9D9D9" : "transparent")};
  color: ${(props) => (props.primary ? "#000" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) =>
      !props.disabled && (props.primary ? "#b3b3b3" : "#f0f0f0")};
  }

  &:active {
    background-color: ${(props) =>
      !props.disabled && (props.primary ? "#999999" : "#dcdcdc")};
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #ffffff;
      color: #666;
    `}

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent
      ${(props) => (props.primary ? "#D9D9D9" : "#000")};
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Arrow: React.FC<ArrowProps> = ({
  primary = false,
  disabled = false,
  ...props
}) => {
  return (
    <StyledArrow primary={primary} disabled={disabled} {...props}></StyledArrow>
  );
};
