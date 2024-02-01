import React from 'react';
import Container from "../../Container";
import {
    additionalStudio,
    colorPhotoVideoStudio,
    photoVideoStudio,
    pricesPodcastStudio
} from "../../../constants/pricesData";
import PriceLine from "./PriceLine";

const PricesList = () => {
    return (
        <section id="prices-list" className="bg-black">
            <Container className="py-2">
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pt-6 pb-4">{pricesPodcastStudio.title}</h2>
                {pricesPodcastStudio.data.map((d, i) => (
                    <PriceLine
                        title={d.title}
                        description={d.description}
                        subDescription={d.subDescription}
                        price={d.price}
                        link={d.link}
                        key={i}
                    />
                ))}
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pt-6 pb-4">{photoVideoStudio.title}</h2>
                {photoVideoStudio.data.map((d, i) => (
                    <PriceLine
                        title={d.title}
                        description={d.description}
                        subDescription={d.subDescription}
                        price={d.price}
                        link={d.link}
                        key={i}
                    />
                ))}
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pt-6 pb-4">{colorPhotoVideoStudio.title}</h2>
                {colorPhotoVideoStudio.data.map((d, i) => (
                    <PriceLine
                        title={d.title}
                        description={d.description}
                        subDescription={d.subDescription}
                        price={d.price}
                        link={d.link}
                        key={i}
                    />
                ))}
                <h2 className="text-3xl font-bold text-white tracking-tight text-center pt-6 pb-4">{additionalStudio.title}</h2>
                {additionalStudio.data.map((d, i) => (
                    <PriceLine
                        title={d.title}
                        description={d.description}
                        subDescription={d.subDescription}
                        price={d.price}
                        link={d.link}
                        key={i}
                    />
                ))}
            </Container>
        </section>
    );
};

export default PricesList;