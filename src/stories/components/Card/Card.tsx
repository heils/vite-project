import styled from "styled-components";
import { CardProps } from "./Card.types";
import { Button } from "../Button/Button";

const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background-color: #d9d9d9;
`;

const StyledImage = styled.img<CardProps>`
  width: 100%;
  height: 160px;
  margin-bottom: 80px;
  overflow: hidden;
  background-color: #b8b8b8;
`;

const StyledText = styled.div<CardProps>`
  width: 80%;
  height: 160px;
  text-align: justify;
  font-size: 1.2em;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 20px; 
  justify-content: space-between;
`;

const StyledButton = styled(Button)`

`;

export const Card = ({
  description = "DescriptionLorem Ipsum is simply dummy text of the sheets containing Lorem Ipsum.",
  disabled = false,
  ...props
}: CardProps) => {
  return (
    <StyledCard>
      <StyledImage />
      <StyledText>{description}</StyledText>
      <StyledButtonContainer>
        <Button
          primary={true}
          size={"small"}
          disabled={disabled}
          {...props}
          label="Code"
        ></Button>
        <StyledButton
          primary={true}
          size={"small"}
          disabled={disabled}
          {...props}
          label="Website"
        ></StyledButton>
      </StyledButtonContainer>
    </StyledCard>
  );
};
