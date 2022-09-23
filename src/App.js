import logo from './logo.svg';
import './App.css';
import Navar from './components/Navbar/Navar';
import AllGun from './components/AllGun/AllGun';
import { useState } from 'react';


function App() {
  const[Guncounter, sectGuncounter]=useState(0);
   
  const counter =() =>{
     sectGuncounter(Guncounter+1);
  }
  return (
    <div className="App">
    <Navar Guncounter={Guncounter}></Navar>
      <AllGun counter={counter}></AllGun>
  
    </div>
  );
}

export default App;
