import logo from './logo.svg';
import './App.css';
import FastFoodKiosk from './conteiner/Components/FastFoodKiosk';
import Menu from './conteiner/Components/Menu';
import Header from './conteiner/Components/Header';
import React from 'react';



   function App() {
  return (
    <div className="App">
       <FastFoodKiosk/> 
      <Menu/>
      <Header/>

    </div>
);
};


export default App;
