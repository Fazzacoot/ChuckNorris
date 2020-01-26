import React from 'react';
import styled from 'styled-components';
import preloader from '../assets/images/preloader.gif';
import Container from './styled/container';

export default function Loading() {
  return (
    <Container>
      <img src={preloader} alt="loading..." />
    </Container>
  );
}
