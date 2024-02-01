import React from 'react';
import Container from "../Container.jsx";
import {mainData} from "../../constants/homeData";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBuyOpen} from "../../redux/slices/buySlice";
import logo from "../../app/assets/icons/logo.svg"
import {navigationData} from "../../constants/navigationData";

const Footer = () => {
    const dispatch = useDispatch();

    const openBuyMenu = () => {
        dispatch(setBuyOpen(true))
    }

    return (
        <footer id="footer" className="bg-black">
            <Container className="py-6 sm:py-10">
                <nav className="flex justify-center flex-col lg:flex-row lg:justify-start lg:items-center">
                    <Link to={'/'} className="flex items-center justify-center">
                        <img src={logo ?? undefined} alt="hires-studio" className="md:pr-12 w-44 lg:w-56 pb-5 md:pb-0"/>
                    </Link>
                    {navigationData.map((item, index) => (
                        <Link key={index} to={item.link} className="flex justify-center pt-4 text-white md:pr-5 hover:text-gray-400 transition duration-300">{item.title}</Link>
                    ))}
                    <button className="flex justify-center pt-4 text-white md:pr-5 hover:text-gray-400 transition duration-300" onClick={() => openBuyMenu()}>{mainData.buyButton}</button>
                </nav>
            </Container>
        </footer>
);
};

export default Footer;