import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/PagesComponents/Home/Hero/Hero.jsx";
import {ProsAsync} from "../../components/PagesComponents/Home/Pros/Pros.async";
import PodcastsKey from "../../components/PagesComponents/Home/PodcastsKey/PodcastsKey.jsx";
import Clients from "../../components/PagesComponents/Home/Clients/Clients.jsx";
import Contacts from "../../components/PagesComponents/Home/Contacts/Contacts.jsx";
import Subfooter from "../../components/Subfooter/Subfooter.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const HomePage = () => {
    return (
        <>
            <Header classNames={'absolute'}/>
            <Hero />
            <ProsAsync />
            <PodcastsKey />
            <Clients />
            <Contacts />
            <Footer />
            <Subfooter />
        </>
    );
};

export default HomePage;
