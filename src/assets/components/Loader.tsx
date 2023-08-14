import React from 'react';
// import { Ripple } from 'react-preloaders';
import { StyledLoader } from '../styles/Loader.styled';

const Preloader = () => {
  return (
    // <Ripple />
    <StyledLoader>
      {/* <Ripple color={'#d8315b'} /> */}
      <h3>Loading...</h3>
    </StyledLoader>
  )
}

export default Preloader;