import React from 'react';
import {useState, useEffect} from 'react';
import Banner from './Banner';
import BarreLaterale from './BarreLaterale';
import Main from './Main'
import '../styles/App.css';

function App() {

  const [isVisible, setIsVisible] = useState(true);

  const handleResize = () => 
    {
      if (window.innerWidth < 1620)
      {
        setIsVisible(false);
      }
      else
      {
        setIsVisible(true);
      }
    };

  useEffect(() =>
    {
      window.addEventListener("resize", handleResize);
      handleResize();
      return() => 
        {
          window.removeEventListener("resize", handleResize);
        }
    }, []
  );




  return (
    <div className="App">
        <Banner className="Banner" isVisible={isVisible}/>
        <BarreLaterale className="sidebar" isVisible={isVisible}/>
        <Main />

    </div>
  );
}

export default App;
