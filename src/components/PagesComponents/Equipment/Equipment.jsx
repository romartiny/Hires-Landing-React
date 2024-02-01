import React from 'react';
import Container from "../../Container.jsx";
import {equipmentData} from "../../../constants/equipmentData";

const Equipment = () => {
    return (
        <section id="equipment" className="bg-black">
            <Container className="pt-12 sm:pt-16">
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pb-8">{equipmentData.title}</h2>
                <img src={equipmentData.image ?? undefined} alt={equipmentData.title}
                     className="rounded-3xl h-[20rem] mb-5 w-full object-cover border border-gray-700"/>
                <p className="text-white pt-2">{equipmentData.description}</p>
            </Container>
        </section>
    );
};

export default Equipment;