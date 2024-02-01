import React from 'react';
import Container from "../../Container.jsx";
import Faq from "../Home/Faq/Faq.jsx";
import {equipmentData} from "../../../constants/equipmentData";

const DeviceList = () => {
    return (
        <section id="device-list" className="bg-black">
            <Container className="py-2">
                {equipmentData.data.map((d, i) => (
                    <Faq
                        answer={d.description}
                        question={d.title}
                        key={i}
                    />
                ))}
            </Container>
        </section>
    );
};

export default DeviceList;