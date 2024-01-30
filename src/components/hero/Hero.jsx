import React from 'react';
import render from '../../app/assets/videos/render.mp4'

const Hero = () => {
    return (
        <div className="">
            <div>
                <div className="absolute z-10 top-1/2 md:top-[24rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[21rem] md:w-[23rem]">
                    <div className="flex items-center flex-col">
                        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Hires Studio</h1>
                        <span className="text-white text-sm pt-3 text-center px-8">Студия подкастов в Санкт-Петербурге</span>
                        <div className="flex flex-col md:justify-evenly md:flex-row w-full pt-5 px-5">
                            <button className="text-xl bg-white rounded-3xl px-4 py-2 border border-white text-black hover:bg-transparent hover:text-white hover:border transition duration-300">
                                Забронировать
                            </button>
                            <button className="text-xl text-white border border-gray-300 rounded-3xl py-2 px-4 hover:bg-blue-600 transition duration-300 hover:border-blue-600 mt-3 md:mt-0">
                                Цены
                            </button>
                        </div>
                    </div>
                </div>
                <div className="video-banner relative py-[25rem] lg:py-[26rem] h-[100vh] md:h-0">
                    <div className="h-full w-full z-0 absolute overflow-hidden inset-0 pointer-events-none">
                        <video height="1600" width="900" autoPlay loop muted
                               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-1 w-full h-full object-cover video-blur">
                            <source src={render ?? undefined} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;