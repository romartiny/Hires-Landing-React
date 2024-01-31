import React from "react";
import './assets/App.css';
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";
import Subfooter from "../components/Subfooter/Subfooter.jsx";
import {IntakeAsync} from "../components/Intake/Intake.async";
import {ProsAsync} from "../components/Pros/Pros.async";

function App() {
  return (
    <div>
        <Header/>
        <Hero />
        <ProsAsync />
        <Contacts />
        <IntakeAsync />
        <Subfooter />
    </div>
  );
}

export default App;
