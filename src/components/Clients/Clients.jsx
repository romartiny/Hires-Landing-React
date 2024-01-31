import React from 'react';
import Container from "../Container.jsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBuyOpen} from "../../redux/slices/buySlice";
import {clientsData, mainData} from "../../constants/data";

const Clients = () => {
    const dispatch = useDispatch();

    const openBuyMenu = (action) => {
        dispatch(setBuyOpen(action))
    }

    return (
        <section id="pros">
            <Container className="py-12 sm:py-16">
                <div className="flex flex-col items-center md:justify-between md:flex-row">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">{clientsData.title}</h2>
                    <div className="pt-8 md:pt-0">
                        <Link to="" className="text-black border rounded-3xl px-5 py-2 ml-0 md:ml-5 hover:bg-black hover:text-white hover:border-black transition duration-300">{clientsData.allServices}</Link>
                    </div>
                </div>
                <div className="flex pt-8 flex-col">
                    <div className="flex w-full flex-col-reverse md:flex-row">
                        <div className="w-full md:max-w-[28rem] bg-black rounded-2xl mr-7 px-8 py-8 mt-6 md:mt-0">
                            <h3 className="text-2xl text-white font-medium pb-5">{clientsData.services.online.title}</h3>
                            <span className="text-white">
                                {clientsData.services.online.description}
                            </span>
                        </div>
                        <div className="relative flex-grow h-48 md:h-auto">
                            <iframe
                                width="560"
                                height="315"
                                src={clientsData.services.online.video}
                                title={clientsData.services.online.title}
                                frameBorder="0"
                                style={{width: '100%', height: '100%'}}
                                className="rounded-3xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex w-full flex-col-reverse md:flex-row-reverse pt-6">
                        <div className="w-full md:max-w-[28rem] bg-black rounded-2xl px-8 py-8 mt-6 md:mt-0">
                            <h3 className="text-2xl text-white font-medium pb-5">{clientsData.services.interview.title}</h3>
                            <span className="text-white">
                                {clientsData.services.interview.description}
                            </span>
                        </div>
                        <div className="relative flex-grow mr-0 md:mr-7 h-48 md:h-auto">
                            <iframe width="560" height="315"
                                    src={clientsData.services.interview.video}
                                    title={clientsData.services.interview.title} frameBorder="0" style={{width: '100%', height: '100%'}}
                                    className="rounded-3xl"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="flex w-full flex-col-reverse md:flex-row pt-6">
                        <div className="w-full md:max-w-[28rem] bg-black rounded-2xl mr-7 px-8 py-8 mt-6 md:mt-0">
                            <h3 className="text-2xl text-white font-medium pb-5">{clientsData.services.podcast.title}</h3>
                            <span className="text-white">
                                {clientsData.services.podcast.description}
                            </span>
                        </div>
                        <div className="relative flex-grow h-48 md:h-auto">
                            <iframe width="560" height="315"
                                    src={clientsData.services.podcast.video}
                                    style={{width: '100%', height: '100%'}}
                                    className="rounded-3xl"
                                    title={clientsData.services.podcast.title} frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-8">
                    <button className="text-black border rounded-3xl px-6 py-2 ml-0 md:ml-5 hover:bg-black hover:text-white hover:border-black transition duration-300" onClick={() => openBuyMenu(true)}>{mainData.buyButton}</button>
                </div>
            </Container>
        </section>
    );
};

export default Clients;