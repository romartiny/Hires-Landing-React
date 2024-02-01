import React from 'react';
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Home/Hero/Hero.jsx";
import {ProsAsync} from "../components/Home/Pros/Pros.async";
import PodcastsKey from "../components/Home/PodcastsKey/PodcastsKey.jsx";
import Clients from "../components/Home/Clients/Clients.jsx";
import Contacts from "../components/Home/Contacts/Contacts.jsx";
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
