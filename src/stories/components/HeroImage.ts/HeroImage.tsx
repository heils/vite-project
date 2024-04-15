import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';
import Image from '../../assets/background_image.png';


const StyledHeroImage = styled.div<HeroImageProps>`
  width: ${(props) => (props.size === 'large' ? '1440px' : '200px')};
  height: ${(props) => (props.size === 'large' ? '1000px' : '400px')};
  display: block;
  margin: 0 auto;
`;

const HeroImage: React.FC<HeroImageProps> = ({ size = 'large'}) => {
  return <StyledHeroImage size={size} ><img src={Image}/>
  </StyledHeroImage>
};

export default HeroImage;
