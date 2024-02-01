import React from 'react';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import {ProsAsync} from "../components/Pros/Pros.async";
import PodcastsKey from "../components/PodcastsKey/PodcastsKey";
import Clients from "../components/Clients/Clients";
import Contacts from "../components/Contacts/Contacts";
import {IntakeAsync} from "../components/Intake/Intake.async";
import Subfooter from "../components/Subfooter/Subfooter";
import Footer from "../components/Footer/Footer";

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
