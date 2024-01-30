import React from "react";
import './assets/App.css';
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Pros from "../components/Pros/Pros.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";
import Intake from "../components/Intake/Intake.jsx";
import Subfooter from "../components/Subfooter/Subfooter.jsx";

function App() {
  return (
    <div>
        <Header/>
        <Hero />
        <Pros />
        <Contacts />
        <Intake />
        <Subfooter />
    </div>
  );
}

export default App;
