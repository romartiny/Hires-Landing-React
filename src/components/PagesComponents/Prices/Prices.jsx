import React from 'react';
import Container from "../../Container.jsx";
import {pricesData} from "../../../constants/pricesData";

const Prices = () => {
    return (
        <section id="contacts" className="bg-black">
            <Container className="pt-12 sm:pt-16">
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pb-8">{pricesData.title}</h2>
                <img src={pricesData.image ?? undefined} alt={pricesData.title}
                     className="rounded-3xl h-[20rem] mb-5 w-full object-cover border border-gray-700"/>
                <p className="text-white pt-2">{pricesData.description}</p>
            </Container>
        </section>
    );
};

export default Prices;