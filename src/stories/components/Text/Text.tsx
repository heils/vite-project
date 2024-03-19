import React from "react";
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

// Define styled components for text
const StyledText = styled.span<TextProps>`
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
    !props.primary &&
    css`
      background: #000000;
      color: #ffff; 
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export const Text: React.FC<TextProps> = ({ text, ...rest }) => {
  return <StyledText {...rest}>{text}</StyledText>;
};
