import React from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import JumbotronContainer from './Components/JumbotronContainer';
import WorldComponent from './Components/WorldComponent';
import IndiaComponent from './Components/IndiaComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <JumbotronContainer/>
      <WorldComponent/>
      <IndiaComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
