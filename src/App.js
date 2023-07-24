import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './components/Gallery/Index.js';
import Header from './components/Header/Index.js';
import Nav from './components/Nav/Index.js';
import Process from './components/Process/Index.js';
import './App.css';

class App extends Component {
  conditional = {value: true}
  render() {
  return (
  <div className="wrapper">
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
    <div className="wrapper">
      <p className="h2">I make knives. Here's some stuff I've made.</p>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/eonphlo.png" alt="Malocchio"/>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/n9omRMT.png" alt="Lout"/>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/DTv82Pb.png" alt="Akribos"/>
    </div>
    <p className="h3">I started off just kind of messing around, making handles for cheap pre-made knife blanks:</p>
    <div className="img">
      <img src="https://i.imgur.com/PKCpahl.png" alt="Buffalo"/>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/OG0X8Wa.png" alt="Santoku"/>
    </div>
    <p className="h3">...And graduated to nicer materials, regrinding/profiling/finishing/sharpening blades, honing my craft:</p>
    <div className="img">
      <img src="https://i.imgur.com/FP4S1OI.png" alt="Furey"/>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/OVw2LY0.png" alt="Ramsey"/>
    </div>
    <p className="h3">These days I do full stock removal knifemaking from premium steels, always with exotic but robust handle materials.</p>
    <div className="img">
      <img src="https://i.imgur.com/PYQU5zD.png" alt="Little"/>
    </div>
    <p className="h3">Sometimes with fancy PVD/CVD coatings:</p>
    <div className="img">
      <img src="https://i.imgur.com/k7eaRFc.png" alt="Shorty"/>
    </div>
    <p className="h3">Or acid etching and flame anodizing titanium:</p>
    <div className="img">
      <img src="https://i.imgur.com/4oUx89l.png" alt="Malocchio Handles"/>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/2boFucy.png" alt="TiTiBar"/>
    </div>
    <p className="h3">Id guestimate each knife entailing around 50 hours of work.</p>
    <div className="img">
      <img src="https://i.imgur.com/DEukKwJ.png" alt="Scrap"/>
    </div>
    <p className="h3">Which leaves me with a never-ending slew of unfinished projects:</p>
    <div className="img">
      <img src="https://i.imgur.com/wIZma1n.png" alt="Hubris"/>
    </div>
    <div className="img">
      <img src="https://i.imgur.com/HSqofTH.png" alt="Raw"/>
    </div>
    <p className="h3">So I do not accept commissions. But thanks for looking.</p>
    <div className="img">
      <img src="https://i.imgur.com/OXuycKm.png" alt="Bench"/>
    </div>
    </div>
  );
}
}

export default App;