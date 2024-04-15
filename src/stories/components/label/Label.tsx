import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types";

// Define styled components for text
const StyledLabel = styled.span<LabelProps>`
  font-family: Inter, sans-serif;
  font-size: 16px;

  ${(props) =>
    props.size === "large" &&
    css`
      font-weight: bold;
      font-size: 24px;
    `}

  /* Apply primary styles */
  ${(props) =>
    props.primary &&
    css`
      color: #000000; 
    `}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export const Label: React.FC<LabelProps> = ({ text, ...rest }) => {
  return <StyledLabel {...rest}>{text}</StyledLabel>;
};
