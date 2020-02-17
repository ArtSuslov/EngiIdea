import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Filter />
        <Content />
      </Container>
    </div>
  );
}

export default App;
