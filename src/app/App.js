import React from "react";
import './assets/App.css';
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Pros from "../components/Pros/Pros";
import Contacts from "../components/Contacts/Contacts";
import Intake from "../components/Intake/Intake";

function App() {
  return (
    <div>
        <Header className={''}/>
        <Hero />
        <Pros />
        <Contacts />
        <Intake />
    </div>
  );
}

export default App;
