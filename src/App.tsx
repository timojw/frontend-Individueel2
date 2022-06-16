import React from 'react';
import './App.css';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import AllOrders from './Components/AllOrders';
import NavBar from './Components/Navbar';
import Create from './Components/create';
import Home from './pages/index';
import About from './pages/about';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'



function App() {

  return (
      <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Bezorg App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="new-order">New Order</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/new-order" element={<About />}></Route>
       </Routes>
       </div>
    
  );
}

export default App;
