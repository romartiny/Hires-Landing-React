import React from 'react';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero.jsx";
import {ProsAsync} from "../components/Pros/Pros.async";
import PodcastsKey from "../components/PodcastsKey/PodcastsKey.jsx";
import Clients from "../components/Clients/Clients.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";
import {IntakeAsync} from "../components/Intake/Intake.async";
import Subfooter from "../components/Subfooter/Subfooter.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero />
            <ProsAsync />
            <PodcastsKey />
            <Clients />
            <Contacts />
            <IntakeAsync />
            <Footer />
            <Subfooter />
        </>
    );
};

export default HomePage;
