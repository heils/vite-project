import styled from "styled-components";
import { ContainerProps } from "./Container.types";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* Add margin between the containers */
`;

const StyledImage = styled.img<ContainerProps>`
  width: 100%;
  height: 160px;
  margin-bottom: 80px;
  overflow: hidden;
  background-color: #b8b8b8;
  margin-right: 200px;
`;

const StyledText = styled.div<ContainerProps>`
  width: 80%;
  height: 160px;
  text-align: justify;
  font-size: 1.2em;
`;

export const Container = ({
  description = "DescriptionLorem Ipsum is simply dummy text of the sheets containing Lorem Ipsum.",
  disabled = false,
  ...props
}: ContainerProps) => {
  return (
    <FlexContainer>
      <StyledImage />
      <StyledText>{description}</StyledText>
    </FlexContainer>
  );
};
