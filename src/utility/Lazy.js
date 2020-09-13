import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #f5f5f5;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #f5f5f5;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity .75s ease;
  backface-visibility: hidden;
  &.loaded {
    opacity: 1;
  }
`;

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = (e) => {
    refPlaceholder.current.remove();
    
    e.target.classList.add('loaded')
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage;
