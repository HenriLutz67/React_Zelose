import React from 'react';
import Banner from './Banner';
import BarreLaterale from './BarreLaterale';
import Main from './Main'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
        <Banner className="Banner"/>
        <BarreLaterale className="sidebar"/>
        <Main />

    </div>
  );
}

export default App;
