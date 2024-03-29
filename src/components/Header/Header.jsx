import React, {useState} from 'react';
import logo from '../../app/assets/icons/logo.svg'
import Container from "../Container.jsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBuyOpen} from "../../redux/slices/buySlice";
import {mainData, mobileNavigationData} from "../../constants/homeData";
import {navigationData} from "../../constants/navigationData";

const Header = ({classNames}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const dispatch = useDispatch();

    const openBuyMenu = (action) => {
        dispatch(setBuyOpen(action));
    }

    const buyAndClose = (action) => {
        dispatch(setBuyOpen(action));
        setNavbarOpen(!action);
    }

    return (
        <header id="hires-header" className={`${classNames} w-full z-20`}>
            <Container className={'flex justify-between p-5'}>
                <Link to={'/'}>
                    <img src={logo ?? undefined} alt="Hires Studio" className="cursor-pointer"/>
                </Link>
                <nav className="items-center hidden lg:flex">
                    {navigationData.map((item, index) => (
                        <Link key={index} to={item.link} className="text-white px-5 hover:text-gray-400 transition duration-300 cursor-pointer">{item.title}</Link>
                    ))}
                </nav>
                <button className="hidden lg:block bg-white rounded-3xl px-6 py-2.5 border-2 border-white text-black hover:bg-transparent hover:text-white hover:border-2 transition duration-300 cursor-pointer" onClick={() => openBuyMenu(true)}>{mainData.buyButton}
                </button>
                <button className={`${navbarOpen ? "fixed mx-4 my-5 mr-4 sm:mr-8" : "relative"} lg:hidden flex top-0 right-0 z-20 w-10 h-10 text-white focus:outline-none`} onClick={() => setNavbarOpen(!navbarOpen)}>
                    <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <span className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"}`}></span>
                        <span className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"}`}></span>
                        <span className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"}`}></span>
                    </div>
                </button>
            </Container>
            <nav className={`fixed flex lg:hidden top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-full"}`}>
                <ul className="flex flex-col items-start w-full h-min pt-3">
                    <li className="flex flex-col w-full">
                        {navigationData.map((item, index) => (
                            <Link key={index} to={item.link} className="text-2xl hover:text-white/80 pt-3 transition duration-300" onClick={() => { setNavbarOpen(false); }}>
                                {item.title}
                            </Link>
                        ))}
                        <button className="w-full bg-white rounded-3xl px-6 py-2.5 border-2 mt-12 border-white text-black hover:bg-transparent hover:text-white hover:border-2 transition duration-300" onClick={() => buyAndClose(true)}>{mainData.buyButton}
                        </button>
                        <Link to={'/'} className="flex justify-center items-center pt-12" onClick={() => setNavbarOpen(false)}>
                            <img src={logo ?? undefined} alt="Hires Studio" className="opacity-40"/>
                        </Link>
                        <Link to={mobileNavigationData.telegram.link} target="_blank" rel="noopener noreferrer" className="flex justify-center text-sm pt-12 text-gray-600/90 group-hover:text-black duration-300">{mobileNavigationData.telegram.title}</Link>
                        <Link to={mobileNavigationData.whatsapp.link} target="_blank" rel="noopener noreferrer" className="flex justify-center text-sm pt-12 text-gray-600/90 group-hover:text-black duration-300">{mobileNavigationData.whatsapp.title}</Link>
                        <Link to={mobileNavigationData.phone.link} target="_blank" rel="noopener noreferrer" className="flex justify-center text-sm pt-12 text-gray-600/90 group-hover:text-black duration-300">{mobileNavigationData.phone.title}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;