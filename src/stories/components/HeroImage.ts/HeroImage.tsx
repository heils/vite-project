import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

interface StyledHeroImageProps {
  src: string;
  size?: 'small' | 'large';
}

const StyledHeroImage = styled.img<StyledHeroImageProps>`
  width: ${(props) => (props.size === 'large' ? '100%' : '50%')};
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const HeroImage: React.FC<HeroImageProps> = ({ size = 'large', disabled = false }) => {
  const imageUrl = disabled ? '../../assets/background_image.png' : '../../assets/background_image.png';

  return <StyledHeroImage src={imageUrl} size={size} />;
};

export default HeroImage;
