import React from "react";
import './assets/App.css';
import Header from "../components/header/Header.jsx";
import Hero from "../components/hero/Hero.jsx";

function App() {
  return (
    <div>
        <div>
            <Header className={''}/>
            <Hero />
        </div>
        <div className="pt-52 bg-white">

        </div>
    </div>
  );
}

export default App;
