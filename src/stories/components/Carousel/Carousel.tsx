import styled from "styled-components";
import { CarouselProps } from "./Carousel.types";
import { Card } from "../Card";

const StyledCarousel = styled.div<CarouselProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Carousel = ({ disabled = false }: CarouselProps) => {
  return (
    <StyledCarousel>
      <StyledCardWrapper>
        <Card disabled={disabled}></Card>
      </StyledCardWrapper>
      <StyledCardWrapper style={{ marginTop: "30px" }}>
        <Card disabled={disabled}></Card>
      </StyledCardWrapper>
      <StyledCardWrapper style={{ marginTop: "50px" }}>
        <Card disabled={disabled}></Card>
      </StyledCardWrapper>
    </StyledCarousel>
  );
};
