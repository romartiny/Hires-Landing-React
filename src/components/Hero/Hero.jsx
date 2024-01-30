import React from 'react';
import render from '../../app/assets/videos/render.mp4'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {setBuyOpen} from "../../redux/slices/buySlice";

const Hero = () => {
    const dispatch = useDispatch();

    const openBuyMenu = () => {
        dispatch(setBuyOpen(true))
    }

    return (
        <section id="hero-studio">
            <div className="absolute z-10 top-1/2 md:top-[25rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[21rem] md:w-[23rem]">
                <div className="flex items-center flex-col">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Hires Studio</h1>
                    <span className="text-white text-sm pt-3 text-center px-8">Студия подкастов в Санкт-Петербурге</span>
                    <div className="flex flex-col md:justify-evenly md:flex-row w-full pt-5 px-5">
                        <button className="text-xl bg-transparent rounded-3xl px-4 py-2 border border-white text-white hover:bg-white hover:text-black hover:border transition duration-300" onClick={() => openBuyMenu()}>
                            Забронировать
                        </button>
                        <button className="text-xl text-white border border-gray-300 rounded-3xl py-2 px-4 hover:bg-blue-600 transition duration-300 hover:border-blue-600 mt-3 md:mt-0">
                            Цены
                        </button>
                    </div>
                    <div className="flex justify-around items-center flex-row w-[8rem] pt-6">
                        <div className="h-8 w-7">
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="opacity-30 hover:opacity-100 transition duration-300">
                                    <path fill="#ffffff" d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="h-7 w-7">
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="opacity-30 hover:opacity-100 transition duration-300">
                                    <path fill="#ffffff" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-16 md:bottom-44 w-full flex justify-center items-center z-10'>
                <a href='#about'>
                    <div className='w-[30px] h-[54px] rounded-3xl border-2 border-white opacity-20 flex justify-center items-start p-1'>
                        <motion.div animate={{y: [0, 28, 0]}} transition={{duration: 3.5, repeat: Infinity, repeatType: "loop"}} className='w-2 h-2 rounded-full bg-white my-1'/>
                    </div>
                </a>
            </div>
            <div className="video-banner relative py-0 md:py-[26rem] h-[100vh] md:h-0">
                <div className="h-full w-full z-0 absolute overflow-hidden inset-0 pointer-events-none">
                    <video height="1600" width="900" autoPlay loop muted playsInline
                           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-1 w-full h-full object-cover video-blur">
                        <source src={render ?? undefined} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Hero;