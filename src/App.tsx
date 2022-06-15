import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import AllOrders from './AllOrders';
import Create from './create';

function App() {
  return (
    <div className="App">
      Test
      <AllOrders />
      <Container><Create /></Container>
      
    </div>
  );
}

export default App;
