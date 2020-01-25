import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './categories';
import ShowMore from './showmore';
// import { Footer } from '../components';
import styled from 'styled-components';


export default function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route exact path="/showmore" component={ShowMore} />
      </Switch>
      {/* <Footer /> */}
    </Container>
  )
}

const Container = styled('div')({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column"
});
