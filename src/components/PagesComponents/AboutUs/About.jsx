import React from 'react';
import Container from "../../Container.jsx";
import {aboutData} from "../../../constants/aboutUsData";

const About = () => {
    return (
        <section id="about-studio" className="bg-black">
            <Container className="py-12 sm:py-16">
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pb-8">{aboutData.title}</h2>
                <img src={aboutData.imageBackground ?? undefined}
                     className="rounded-3xl h-[20rem] w-full object-cover border border-gray-700"
                     alt={aboutData.imageBackground ?? undefined}/>
                <div>
                    <h2 className="text-white font-bold pt-8 text-center md:text-left">{aboutData.welcome.title}</h2>
                    <p className="text-white pt-3">{aboutData.welcome.description}</p>
                    <h2 className="text-white font-bold pt-6 text-center md:text-left">{aboutData.mission.title}</h2>
                    <p className="text-white pt-3">{aboutData.mission.description}</p>
                    <h2 className="text-white font-bold pt-6 text-center md:text-left">{aboutData.whyHires.title}</h2>
                    {aboutData.whyHires.data.map((item, index) => (
                        <p className="text-white pt-3" key={index}><span className="font-semibold">• {item.title}:</span> {item.description}</p>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default About;