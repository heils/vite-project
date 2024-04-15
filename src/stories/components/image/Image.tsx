import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledHeroImage = styled.div<ImageProps>`
  width: ${(props) => (props.size === 'large' ? '1440px' : '200px')};
  height: ${(props) => (props.size === 'large' ? '600px' : '200px')};
  display: block;
  margin: 0 auto;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-color: #ccc;
`;

const HeroImage: React.FC<ImageProps> = ({ size = 'large', src}) => {
  return <StyledHeroImage size={size} src={src} />;
};

export default HeroImage;
