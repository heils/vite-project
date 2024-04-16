import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroup = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 10px;
`;

const RadioLabel = styled.label`
  margin-bottom: 8px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

const RadioText = styled.span`
  color: #00000;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ options, name }) => {
  return (
    <RadioContainer>
      <RadioGroup>
        {options.map((option, index) => (
          <RadioLabel key={index}>
            <RadioInput
              type="radio"
              name={name}
              value={option.value}
              disabled={option.disabled}
            />
            <RadioText>{option.label}</RadioText>
          </RadioLabel>
        ))}
      </RadioGroup>
    </RadioContainer>
  );
};

export default RadioButton;
