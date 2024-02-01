import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Equipment from "../../components/PagesComponents/Equipment/Equipment.jsx";
import DeviceList from "../../components/PagesComponents/Equipment/DeviceList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subfooter from "../../components/Subfooter/Subfooter.jsx";

const EquipmentPage = () => {
    return (
        <>
            <Header classNames={'relative bg-black'}/>
            <Equipment />
            <DeviceList />
            <Footer />
            <Subfooter />
        </>
    );
};

export default EquipmentPage;