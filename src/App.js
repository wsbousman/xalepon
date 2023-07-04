import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Components/Gallery/Index.js';
import Header from './Components/Header/Index.js';
import Nav from './Components/Nav/Index.js';
import Process from './Components/Process/Index.js';
import './App.css';

class App extends Component {
  conditional = {value: true}
  render() {
  return (
    <div className="wrapper">
      <div className="links">
      <Router>
      {/*conditional rendering via ternary operator*/}
      {this.conditional.value ? <Header /> : null}
      <Nav />
      {/*declarative component routing*/}
      <Routes>
        <Route exact path ="/Gallery" element={<Gallery></Gallery>}/>
        <Route exact path ="/Process" element={<Process></Process>}/>
      </Routes>
      {/*footer*/}
      </Router>
      </div>
    </div>
  );
}
}

export default App;