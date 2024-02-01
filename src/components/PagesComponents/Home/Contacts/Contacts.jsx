import React from 'react';
import Container from "../../../Container.jsx";
import {Link} from "react-router-dom";
import {contactsData} from "../../../../constants/homeData";
import ContactsBlocks from "./ContactsBlocks.jsx";

const Contacts = () => {

    return (
        <section id="contacts" className="bg-black">
            <Container className="py-12 sm:py-16">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <h2 className="text-2xl text-white md:text-3xl font-bold tracking-tight text-center md:text-left">{contactsData.title}</h2>
                    <div className="pt-8 md:pt-0">
                        <Link to={contactsData.runMove.link} target="_blank" rel="noopener noreferrer" className="text-white border rounded-3xl px-5 py-2 ml-0 md:ml-5 hover:bg-white hover:text-black transition duration-300">{contactsData.runMove.title}</Link>
                        <Link to={contactsData.driveMove.link} target="_blank" rel="noopener noreferrer" className="text-white border rounded-3xl px-5 py-2 ml-5 hover:bg-white hover:text-black transition duration-300">{contactsData.driveMove.title}</Link>
                    </div>
                </div>
                <div className="flex flex-col pt-8">
                    <div className="relative h-[26rem] w-full">
                        <iframe
                            src={contactsData.mapLink}
                            title={contactsData.title}
                            width="560"
                            style={{width: '100%', height: '100%'}}
                            className="rounded-3xl"
                        ></iframe>
                    </div>
                    <ContactsBlocks />
                </div>
            </Container>
        </section>
    );
};

export default Contacts;