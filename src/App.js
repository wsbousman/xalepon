import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {motion} from 'framer-motion';
import Gallery from './components/Gallery/Index.js';
import Header from './components/Header/Index.js';
import Nav from './components/Nav/Index.js';
import Process from './components/Process/Index.js';
import './App.css';

class App extends Component {
  conditional = {value: true}
  render() {
  return (
  <div>
  <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
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
    <div className="test">
    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
      <p className="h2">I make knives. Here's some stuff I've made.</p>
    </div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/eonphlo.png" alt="Malocchio"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/SsULwPr.png" alt="Akribos"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/y23MVWR.png" alt="Scrap2"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/n9omRMT.png" alt="Lout"/>
      </motion.div>
    </div>

    <p className="h3">I started off just kind of messing around, making handles for cheap, pre-made knife blanks:</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/PKCpahl.png" alt="Buffalo"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/OG0X8Wa.png" alt="Santoku"/>
    </motion.div>
    </div>

    <p className="h3">...and graduated to nicer materials, regrinding/profiling/finishing/sharpening blades, honing my craft:</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/FP4S1OI.png" alt="Furey"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >      <img className="imgtag" src="https://i.imgur.com/HIrCz5C.png" alt="Ramsey"/>
    </motion.div>
    </div>

    <p className="h3">These days I do full stock removal knifemaking from premium steels, always with exotic but robust handle materials.</p>
    
    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/PYQU5zD.png" alt="Little"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/D20svXE.png" alt="Toku"/>
    </motion.div>
    </div>

    <p className="h3">Sometimes with fancy PVD/CVD coatings:</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/k7eaRFc.png" alt="Shorty"/>
    </motion.div>
    </div>

    <p className="h3">Or acid etched and flame anodized titanium:</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/4oUx89l.png" alt="Malocchio Handles"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/2boFucy.png" alt="TiTiBar"/>
    </motion.div>
    </div>

    <p className="h3">Id guestimate each knife entailing around 50 hours of work, depending on features.</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/DEukKwJ.png" alt="Scrap"/>
    </motion.div>
    </div>

    <p className="h3">Which leaves me with a never-ending slew of unfinished projects:</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/wIZma1n.png" alt="Hubris"/>
    </motion.div>
    </div>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/HSqofTH.png" alt="Raw"/>
    </motion.div>
    </div>

    <p className="h3">So I do not accept commissions. But thanks for looking.</p>

    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: "8px 0px 8px 0px",
      }}
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      >
      <img className="imgtag" src="https://i.imgur.com/OXuycKm.png" alt="Bench"/>
    </motion.div>
    </div>
  </div>
  </div>
  </div>
  );
}
}

export default App;