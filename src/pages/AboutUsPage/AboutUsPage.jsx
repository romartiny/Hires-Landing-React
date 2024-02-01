import React from 'react';
import Header from "../../components/Header/Header.jsx";
import About from "../../components/PagesComponents/AboutUs/About.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subfooter from "../../components/Subfooter/Subfooter.jsx";

const AboutUsPage = () => {
    return (
        <>
            <Header classNames={'relative bg-black'}/>
            <About />
            <Footer />
            <Subfooter />
        </>
    );
};

export default AboutUsPage;