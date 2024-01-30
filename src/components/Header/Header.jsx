import React from 'react';
import logo from '../../app/assets/icons/logo.svg'
import Container from "../Container.jsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBuyOpen} from "../../redux/slices/buySlice";

const Header = () => {
    const dispatch = useDispatch();

    const openBuyMenu = () => {
        dispatch(setBuyOpen(true))
    }

    return (
        <header id="hires-header" className='absolute w-full z-10'>
            <Container className={'flex justify-between p-5'}>
                <Link to={'/'}>
                    <img src={logo ?? undefined} alt="Hires Studio" className=""/>
                </Link>
                <nav className="items-center hidden lg:flex">
                    <Link to="/about" className="text-white px-5 hover:text-gray-400 transition duration-300">О нас</Link>
                    <Link to="/rent" className="text-white px-5 hover:text-gray-300 transition duration-300">Аренда студии</Link>
                    <Link to="/key" className="text-white px-5 hover:text-gray-300 transition duration-300">Под ключ</Link>
                    <Link to="/prices" className="text-white px-5 hover:text-gray-300 transition duration-300">Цены</Link>
                    <Link to="/contacts" className="text-white px-5 hover:text-gray-300 transition duration-300">Контакты</Link>
                </nav>
                <button className="hidden lg:block bg-white rounded-3xl px-6 py-2.5 border-2 border-white text-black hover:bg-transparent hover:text-white hover:border-2 transition duration-300" onClick={() => openBuyMenu()}>Забронировать</button>
                <button className="block lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
                    </svg>
                </button>
            </Container>
        </header>
    );
};

export default Header;