import React from 'react';
import Container from "../Container.jsx";
import {mainData, navigationData} from "../../constants/data";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBuyOpen} from "../../redux/slices/buySlice";

const Footer = () => {
    const dispatch = useDispatch();

    const openBuyMenu = () => {
        dispatch(setBuyOpen(true))
    }

    return (
        <div className="bg-black">
            <Container className="py-6 sm:py-10">
                <nav className="flex justify-center flex-col md:flex-row md:justify-start">
                    {navigationData.map((item, index) => (
                        <Link key={index} to={item.link} className="flex justify-center pt-4 text-white md:pr-5 hover:text-gray-400 transition duration-300">{item.title}</Link>
                    ))}
                    <button className="flex justify-center pt-4 text-white md:pr-5 hover:text-gray-400 transition duration-300" onClick={() => openBuyMenu()}>{mainData.buyButton}</button>
                </nav>
            </Container>
        </div>
);
};

export default Footer;