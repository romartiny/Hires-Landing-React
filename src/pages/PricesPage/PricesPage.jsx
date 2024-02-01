import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Prices from "../../components/PagesComponents/Prices/Prices.jsx";
import PricesList from "../../components/PagesComponents/Prices/PricesList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subfooter from "../../components/Subfooter/Subfooter.jsx";

const PricesPage = () => {
    return (
        <>
            <Header classNames={'relative bg-black'} />
            <Prices />
            <PricesList />
            <Footer />
            <Subfooter />
        </>
    );
};

export default PricesPage;