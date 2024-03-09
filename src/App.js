import React from 'react';
import { Container, Navbar } from 'react-bootstrap/Container';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar></Navbar>
        </Container>
      </Navbar>
    </div>
  );

  <About />
}
export default App;
