import React from 'react';
import styled from 'styled-components';
import { ApolloError } from 'apollo-boost';
import Container from './styled/container';

interface ErrorTypes{
  error: ApolloError
}


const Error: React.FC<ErrorTypes> = ( error ) => {
  return(
    <Container>
      {error.error.message}
    </Container>
  );
}

export default Error