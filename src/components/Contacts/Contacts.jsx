import React from 'react';
import Container from "../Container.jsx";
import {Link} from "react-router-dom";

const Contacts = () => {

    return (
        <div className="bg-black">
            <Container className="py-12 sm:py-16">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Наши контакты</h2>
                    <div className="pt-8 md:pt-0">
                        <Link to="https://www.youtube.com/watch?v=mgaCjo1LAFc" target="_blank" rel="noopener noreferrer" className="text-white border rounded-3xl px-5 py-2 ml-0 md:ml-5 hover:bg-white hover:text-black transition duration-300">Как пройти</Link>
                        <Link to="https://www.youtube.com/watch?v=30uR3XZfDwI" target="_blank" rel="noopener noreferrer" className="text-white border rounded-3xl px-5 py-2 ml-5 hover:bg-white hover:text-black transition duration-300">Как проехать</Link>
                    </div>
                </div>
                <div className="flex flex-col pt-8">
                    <div className="relative h-[26rem] w-full">
                        <iframe
                            src="https://yandex.by/map-widget/v1/?ll=30.319381%2C59.920144&mode=search&oid=55375805127&ol=biz&z=15.6"
                            width="560"
                            frameBorder="1"
                            allowFullScreen="false"
                            style={{width: '100%', height: '100%'}}
                            className="rounded-3xl"
                        ></iframe>
                    </div>
                    <div className="flex justify-around flex-col md:flex-row pt-7">
                        <div className="group flex-1 min-w-0 py-7 px-7 border border-gray-300 drop-shadow-xl rounded-3xl hover:bg-white transition duration-300">
                            <h3 className="text-2xl text-white font-medium group-hover:text-black transition duration-300">Связь</h3>
                            <div className="flex flex-col pt-3">
                                <Link to={'https://api.whatsapp.com/send?phone=79939731212'} target="_blank" rel="noopener noreferrer" className="text-sm text-white group-hover:text-black duration-300">Hires Telegram</Link>
                                <Link to={'https://t.me/hiresstud'} target="_blank" rel="noopener noreferrer" className="text-sm pt-2 text-white group-hover:text-black duration-300">Hires WhatsApp</Link>
                                <Link to={'tel:+79939731212'} target="_blank" rel="noopener noreferrer" className="text-sm pt-2 text-white group-hover:text-black duration-300">+7 (993) 973-12-12</Link>
                            </div>
                        </div>
                        <div className="group flex-1 min-w-0 py-7 px-7 border mx-0 my-5 md:mx-8 md:my-0 border-gray-300 drop-shadow-xl rounded-3xl hover:bg-white transition duration-300">
                            <h3 className="text-2xl text-white font-medium group-hover:text-black transition duration-300">Соцсети</h3>
                            <div className="flex flex-col pt-3">
                                <Link to={'https://vk.com/hires.studio'} target="_blank" rel="noopener noreferrer" className="text-sm text-white group-hover:text-black duration-300">ВКонтакте</Link>
                                <Link to={'https://t.me/hiresst'} target="_blank" rel="noopener noreferrer" className="text-sm pt-2 text-white group-hover:text-black duration-300">Телеграм</Link>
                            </div>
                        </div>
                        <div
                            className="group flex-1 min-w-0 py-7 px-7 border border-gray-300 drop-shadow-xl rounded-3xl hover:bg-white transition duration-300">
                            <h3 className="text-2xl text-white font-medium group-hover:text-black transition duration-300">Адрес</h3>
                            <div className="flex flex-col pt-3">
                                <span className="text-sm pt-2 text-white group-hover:text-black duration-300">ПН-ВС 10:00 - 21:00</span>
                                <Link to={'https://yandex.ru/maps/-/CDuYNKN4'} target="_blank" rel="noopener noreferrer" className="text-sm pt-2 text-white group-hover:text-black duration-300">МОСКОВСКИЙ ПРОСП., 22М, САНКТ-ПЕТЕРБУРГ ЭТАЖ 2, ОФИС 4Н</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contacts;