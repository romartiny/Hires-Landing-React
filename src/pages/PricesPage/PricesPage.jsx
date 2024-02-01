import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Prices from "../../components/PagesComponents/Prices/Prices";
import PricesList from "../../components/PagesComponents/Prices/PricesList";
import Footer from "../../components/Footer/Footer";
import Subfooter from "../../components/Subfooter/Subfooter";

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