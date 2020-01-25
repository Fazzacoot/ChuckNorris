import React from 'react';
import styled from 'styled-components';


import { colors, unit } from '../styles/global';

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
      </InnerContainer>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('footer')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'black',
  color: colors.textSecondary,
  // position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: 460,
  padding: unit * 2.5,
  margin: '0 auto',
});
