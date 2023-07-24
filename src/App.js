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
      <p className="h2">
        I make knives. Here's some stuff I've made. 
      </p>
      <img src="https://i.imgur.com/eonphlo.png" alt="Malocchio"/>
      <img src="https://i.imgur.com/n9omRMT.png" alt="Lout"/>
      <img src="https://i.imgur.com/DTv82Pb.png" alt="Akribos"/>
      <p className="h3">I started off just kind of messing around, making handles for cheap pre-made knife blanks:</p>
      <img src="https://i.imgur.com/PKCpahl.png" alt="Buffalo"/>
      <img src="https://i.imgur.com/OG0X8Wa.png" alt="Santoku"/>
      <p className="h3">...And graduated to nicer materials, regrinding/profiling/finishing/sharpening blades, honing my craft:</p>
      <img src="https://i.imgur.com/FP4S1OI.png" alt="Furey"/>
      <img src="https://i.imgur.com/OVw2LY0.png" alt="Ramsey"/>
      <p className="h3">These days I do full stock removal knifemaking from premium steels, always with exotic but robust handle materials.</p>
      <img src="https://i.imgur.com/PYQU5zD.png" alt="Little"/>
      <p className="h3">Sometimes with fancy PVD/CVD coatings:</p>
      <img src="https://i.imgur.com/k7eaRFc.png" alt="Shorty"/>
      <p className="h3">Or acid etching and flame anodizing titanium:</p>
      <img src="https://i.imgur.com/4oUx89l.png" alt="Malocchio Handles"/>
      <img src="https://i.imgur.com/2boFucy.png" alt="TiTiBar"/>
      <p className="h3">Id guestimate each knife entailing around 50 hours of work.</p>
      <img src="https://i.imgur.com/DEukKwJ.png" alt="Scrap"/>
      <p className="h3">Which leaves me with a never-ending slew of unfinished projects:</p>
      <img src="https://i.imgur.com/wIZma1n.png" alt="Hubris"/>
      <img src="https://i.imgur.com/HSqofTH.png" alt="Raw"/>
      <p className="h3">So I do not accept commissions. But thanks for looking.</p>
      <img src="https://i.imgur.com/OXuycKm.png" alt="Bench"/>
    </div>
  );
}
}

export default App;