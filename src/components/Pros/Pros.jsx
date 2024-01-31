import React from 'react';
import Container from "../Container.jsx";
import {prosData} from "../../constants/data";

const Pros = () => {
    return (
        <section id="pros">
            <Container className="py-12 sm:py-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">{prosData.title}</h2>
                <div className="flex pt-12 flex-col content-between md:flex-row">
                    {prosData.services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center px-4 pt-4 md:pt-2">
                            <img src={service.image} alt={service.title} loading="lazy" className="w-[26rem] h-[20rem] object-cover filter brightness-75 hover:brightness-100 rounded-3xl hover:scale-105 transition duration-500"/>
                            <h3 className="text-xl font-semibold text-center pt-3">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Pros;