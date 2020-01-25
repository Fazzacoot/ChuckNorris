import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/';
import './styles/index.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const RenderApp = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>

);

render(<RenderApp />, document.getElementById('root'));

