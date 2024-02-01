import React from 'react';
import Container from "../../../Container.jsx";
import Faq from "../Faq/Faq.jsx";
import {faqsHome, podcastsKey} from "../../../../constants/homeData";

const PodcastsKey = () => {
    return (
        <div className="bg-black">
            <Container className="py-12 sm:py-16">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <h2 className="text-2xl text-white md:text-3xl font-bold tracking-tight text-center md:text-left">{podcastsKey.title}</h2>
                </div>
                <div className="flex flex-col pt-6">
                    <div className="flex flex-row pt-2 pb-4">
                        <span className="text-white text-center md:text-left">{podcastsKey.description}</span>
                    </div>
                    {faqsHome.map((d, i) => (
                        <Faq
                            answer={d.answer}
                            question={d.question}
                            key={i}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default PodcastsKey;